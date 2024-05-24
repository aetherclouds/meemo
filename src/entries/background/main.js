import { messageAllTabs, sortObjectArrayByKey } from '~/lib/util'
import { DEFAULT_OPTIONS, IS_CHROME, browserAction, browserStorageSync } from '~/lib/const'
import { ankiRequest, testConnection } from "~/lib/ankiConnectUtil"


/* LanguageData structure:
{
  <LANGUAGE1>: {
    genders: {
      m: <MASCULINE_NAME>,
      f: <FEMININE_NAME>,
      n: <NEUTRAL_NAME>export const IS_CHROME = isChrome()
    },
    flagURL: <FLAG_URL>, 
    dict: {
      <WORD1>: <GENDER1>, 
      <WORD2>: <GENDER2>, 
      . . .
    },
  },
  <LANGUAGE2>: . . .
  . . .
}
*/
let languageData = {}
let options = DEFAULT_OPTIONS
let isExtensionOn = options.shouldStartEnabled.value


function updateBadgeText() {
    browserAction.setBadgeText({text: isExtensionOn ? 'On' : ''})
}

// NOTE: never do this (
function genderCSVToObj(CSVString) {
  let output = {}
  const lines = CSVString.split('\n')
  for (let i=1; i<lines.length; i++) { // skip header
      const contents = lines[i].split(',')
      output[contents[0]] = {
        'm': contents[1],
        'f': contents[2],
        'n': contents[3].trim()
      }
  }
  return output
}

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({options: DEFAULT_OPTIONS})
  // redirect to options on install
  // if (IS_CHROME && !IN_DEV) {
    chrome.tabs.create({
      url: 'chrome://extensions/?options='+chrome.runtime.id,
      active: true,
    })
  // }
})


// try load from sync
browserStorageSync.get('options').then(result => {
    options = result.options || DEFAULT_OPTIONS
})

function initLanguages() {
  let selectedLanguages = options.selectedLanguages.value
  // set initial word dictionary
  selectedLanguages.map((language) => {
    languageData[language] = {}
  })
  updateLanguageDict(languageData, selectedLanguages)
  updateLanguageGenders(languageData, selectedLanguages)
  updateLanguageFlagURLs(languageData, selectedLanguages)
  // console.log(languageData)

}

// load or update word dictionary into memory
function updateLanguageDict(languageData, selectedLanguages) {
  selectedLanguages.map(async (language) => {
    languageData[language].dict = {}

    // for each language, read its corresponding csv file for `WORD, GENDER` entries
    const filePath = chrome.runtime.getURL('data/dicts/' + language + ".csv")
    const response = await fetch(filePath)
    if (response.ok) {
      const csv = await response.text()
      csv.split('\n').map(line => {
        const [word, gender] = line.split(',')
        if (word && gender) {
          languageData[language].dict[word] = gender.trim()
        }
      }) 
      console.log(language, 'language dict loaded with', Object.keys(languageData[language].dict).length, 'entries')
    } else {
      console.error('unable to load dict for ', language)
    }
  })
}

// load or update all language genders. eg. {de: {f: 'feminin', . . .}, . . .}
async function updateLanguageGenders(languageData) {
  const filePath = chrome.runtime.getURL('data/genders.csv')
  const response = await fetch(filePath)
  if (response.ok) {
    let text = await response.text()
    // returns an object with corresponding {word: gender}
    let langToGenderObj = genderCSVToObj(text)
    Object.entries(langToGenderObj).forEach(([lang, genders]) => {
      try {
        languageData[lang].genders = genders        
      } catch (e) {
        if (!(e instanceof TypeError)) throw(e)
      }
    })
  }
}

function updateLanguageFlagURLs(languageData, selectedLanguages) {
  selectedLanguages.map( (language) => {
    languageData[language].flagURL = chrome.runtime.getURL(`flags/${language.toUpperCase()}.svg`)
  })
}


browserAction.setBadgeBackgroundColor({
  color: [245, 30, 30, 255]
});

// listen to tab events
chrome.runtime.onMessage.addListener(
  (request, sender, sendResponse) => {
    switch (request.type) { 

      case 'getGender':
        let data = []
        options.selectedLanguages.value.map(language => {
          const gender = languageData[language].dict[request.word]
          const wordForGender = languageData[language].genders[gender]
          const flagURL = languageData[language].flagURL
          if (gender) data.push({countryCode: language, gender, wordForGender, flagURL, isSvelteComponent: false,})
        })
        sortObjectArrayByKey(data, 'language')
        sendResponse({data})
        break

      case 'isExtensionOn':
        sendResponse({isExtensionOn})
        break
        
      case 'updateOptions':
        options = request.data
        initLanguages()
        messageAllTabs({type: 'updateOptions', data: request.data})
        break

      case 'runAnkiRequest':
        ankiRequest(request.data.action, request.data.params).then(response => {
          sendResponse({response})
        })
        return true

      default:
        break
    }
  }
)

// listen to click on extension icon
browserAction.onClicked.addListener((tab) => {
  messageAllTabs({type: isExtensionOn ? 'disableExtension' : 'enableExtension'})

  isExtensionOn = !isExtensionOn
  updateBadgeText()
});

updateBadgeText()
initLanguages()