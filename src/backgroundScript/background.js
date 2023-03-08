import { messageAllTabs, sortObjectArrayByKey } from "../util"
import {test} from '../ankiConnectUtil'
import { DEFAULT_OPTIONS, EXTENSION_ALIAS, IS_DEBUG } from "../const"


// structure:
/* {
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
var isExtensionOn = IS_DEBUG || false

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({options: DEFAULT_OPTIONS})
})

let options = DEFAULT_OPTIONS

function initLanguages() {
  let selectedLanguages = options.selectedLanguages.value
  // set initial word dictionary
  selectedLanguages.map((language) => {
    languageData[language] = {}
  })
  updateLanguageDict(languageData, selectedLanguages)
  updateLanguageGenders(languageData, selectedLanguages)
  updateLanguageFlagURLs(languageData, selectedLanguages)
  console.log(languageData)

}
// setup: retrieve options and update local maps
chrome.storage.sync.get('options').then(result => {
  options = result.data || DEFAULT_OPTIONS
  initLanguages()
})

// load word dictionary into memory
function updateLanguageDict(languageData, selectedLanguages) {
  selectedLanguages.map(async (language) => {
    // for each language, read its corresponding csv file for `WORD, GENDER` entries
    const filePath = chrome.runtime.getURL('data/dicts/' + language + ".csv")
    const response = await fetch(filePath)
    if (response.ok) {
      let text = await response.text()
      // initialize map
      languageData[language].dict = {}
      text.split('\n').map(line => {
        const [word, gender] = line.split(',')
        if (word && gender) {
          languageData[language].dict[word] = gender.trim()
        }
      }) 
      console.log(language, 'language dict is loaded with', Object.keys(languageData[language].dict).length, 'entries')
    } else {
      console.error(EXTENSION_ALIAS + ' was unable to load dict for ' + language)
    }
  })
}

// load genders, eg. {de: {f: 'feminin', . . .}, . . .}
async function updateLanguageGenders(languageData, selectedLanguages) {
  const filePath = chrome.runtime.getURL('data/genders.csv')
  const response = await fetch(filePath)
  if (response.ok) {
    let text = await response.text()
    let langToGenderObj = genderCSVToObj(text)
    Object.entries(langToGenderObj).forEach(([lang, genders]) => {
      try {
        languageData[lang].genders = genders        
      } catch (e) {
        if (!e instanceof TypeError) throw(e)
      }
    })
  }
}

function updateLanguageFlagURLs(languageData, selectedLanguages) {
  selectedLanguages.map( (language) => {
    languageData[language].flagURL = chrome.runtime.getURL(`data/flags/${language}.svg`)
  })
}


// TODO update variables on storage change 
// chrome.storage.onChanged.addListener(function (changes, namespace) {
//   for (let [key, { oldValue, newValue }] of Object.entries(changes)) {
//     console.log(
//       `Storage key "${key}" in namespace "${namespace}" changed.`,
//       `Old value was "${oldValue}", new value is "${newValue}".`
//     )
//   }
// })

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

      default:
        break
    }
  }
)

// TODO pay attention to when this 
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status == 'complete') {
  }
})

chrome.action.setBadgeBackgroundColor({
  color: [245, 30, 30, 255]
});
// listen to click on extension icon
chrome.action.onClicked.addListener((tab) => {
  // https://stackoverflow.com/a/68896301 send message to all tabs
  messageAllTabs({type: isExtensionOn ? 'enableExtension' : 'disableExtension'})

  isExtensionOn = !isExtensionOn

  if (isExtensionOn) {
    chrome.action.setBadgeText({text: 'On'})
  } else {
    chrome.action.setBadgeText({text: ''})
  }  
  console.log('toggling extension! now', isExtensionOn)
});

// create connection with anki


// yes i wrote my own parser, so what?
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