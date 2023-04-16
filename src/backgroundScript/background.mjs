import { isChrome, loadOptions, messageAllTabs, sortObjectArrayByKey } from "../util"
import { BROWSER, DEFAULT_OPTIONS, EXTENSION_ALIAS, IN_DEV } from "../const"
import { ankiRequest } from "../ankiConnectUtil"
// LanguageData structure:
/* 
{
  LANGUAGE: {
    genders: {
      m: MASCULINE,
      f: FEMININE,
      n: NEUTRAL
    },
    flagURL: FLAGURL, 
    dict: {
      WORD: GENDER, 
      . . .
    },
  }
}
*/

(async () => {
var languageData = {}

console.log('alr lets test something', chrome.storage.sync.get('asd'))

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({options: DEFAULT_OPTIONS})
  // redirect to options on install
  // TODO: make options page look better on firefox so that I can do this without it being embarrassing
  if (isChrome() && !IN_DEV) {
    chrome.tabs.create({
      url: 'chrome://extensions/?options='+chrome.runtime.id,
      active: true,
    })
  }
})

let options = DEFAULT_OPTIONS
// try load from sync
chrome.storage.sync.get('options').then(result => {
    options = result.options || DEFAULT_OPTIONS
})

var isExtensionOn = options.shouldStartEnabled.value
updateBadgeText()
initLanguages()

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

// load word dictionary into memory
function updateLanguageDict(languageData, selectedLanguages) {
  selectedLanguages.map(async (language) => {
    // initialize map
    languageData[language].dict = {}

    // for each language, read its corresponding csv file for `WORD, GENDER` entries
    const filePath = chrome.runtime.getURL('contents/data/dicts/' + language + ".csv")
    const response = await fetch(filePath)
    if (response.ok) {
      let text = await response.text()
      text.split('\n').map(line => {
        const [word, gender] = line.split(',')
        if (word && gender) {
          languageData[language].dict[word] = gender.trim()
        }
      }) 
      console.log(language, 'language dict is loaded with', Object.keys(languageData[language].dict).length, 'entries')
    } else {
      console.error(EXTENSION_ALIAS, ': unable to load dict for ' + language)
    }
  })
}

// load genders, eg. {de: {f: 'feminin', . . .}, . . .}
async function updateLanguageGenders(languageData, selectedLanguages) {
  const filePath = chrome.runtime.getURL('contents/data/genders.csv')
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
    languageData[language].flagURL = chrome.runtime.getURL(`contents/data/flags/${language}.svg`)
  })
}

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

// TODO: pay attention to when this (note from the future: never leave a comment unfinished, now idk what this was about)
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status == 'complete') {
  }
})


chrome.action.setBadgeBackgroundColor({
  color: [245, 30, 30, 255]
});
// listen to click on extension icon
chrome.action.onClicked.addListener((tab) => {
  messageAllTabs({type: isExtensionOn ? 'disableExtension' : 'enableExtension'})

  isExtensionOn = !isExtensionOn
  updateBadgeText()
  console.log(EXTENSION_ALIAS, ': toggling extension! now', isExtensionOn)
});

function updateBadgeText() {
  if (isExtensionOn) {
    chrome.action.setBadgeText({text: 'On'})
  } else {
    chrome.action.setBadgeText({text: ''})
  }  
}

// yes i wrote my own parser, totally very fail-safe
function genderCSVToObj(stringCSV) {
  let output = {}
  const lines = stringCSV.split('\n')
  // we already know how the header is so let's just skip it by setting i to 1
  for (let i=1; i<lines.length; i++) {
      const contents = lines[i].split(',')
      output[contents[0]] = {
        'm': contents[1],
        'f': contents[2],
        'n': contents[3].trim()
      }
  }
  return output
}
  })()