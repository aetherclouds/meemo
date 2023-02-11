// // sw.js or extensionPage.js
// var importObject = { imports: { imported_func: arg => console.log(arg) } };
// WebAssembly.instantiateStreaming(fetch('../modules/sqlite3.wasm'), importObject)
// .then(obj => obj.instance.exports.exported_func());//output 42 in console

import { sortObjectArrayByKey } from "../util"
   
function addCardAndNote(db, fields = {}, collection='') {
  db.exec(`
  INSERT INTO Customers (CustomerName, ContactName, Address, City, PostalCode, Country)
  VALUES ('Cardinal', 'Tom B. Erichsen', 'Skagen 21', 'Stavanger', '4006', 'Norway');
  `)  
}

{
  
}

function addNote(db, fields = {}) {
  db.exec(`
  INSERT INTO notes (CustomerName, ContactName, Address, City, PostalCode, Country)
  VALUES ('Cardinal', 'Tom B. Erichsen', 'Skagen 21', 'Stavanger', '4006', 'Norway');
  `)  
}

(async () => {
  let ankiDbAsBuffer
  const ankiDbResponse = await fetch('C:/Users/kocze/AppData/Roaming/Anki2/Benutzer 1/collection.anki2')
    if (ankiDbResponse.ok) {
      // NOTE: we want response as an array of bytes as per sql.js documentation, not `.text()`
      // NOTE2: apparently sql.js wants an `Uint8Array` and not anything else
      ankiDbAsBuffer = new Uint8Array(await ankiDbResponse.arrayBuffer())
    }




const sqljs = await createSqlWasm({ wasmUrl: "../modules/sqlite3.wasm" })
const ankiDb = new sqljs.Database(ankiDbAsBuffer)
console.log(ankiDbAsBuffer)
console.log(typeof ankiDbAsBuffer)
let res = ankiDb.exec('SELECT * FROM notes')
console.log(res)
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
var IS_DEBUG = true
var selectedLanguages = ['de']
var languageData = {}
var isExtensionOn = IS_DEBUG
const EXTENSION_ALIAS = 'gender-io'

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({selectedLanguages})
})

// set initial word dictionary
chrome.storage.sync.get(['selectedLanguages']).then((result) => {
  selectedLanguages = result.selectedLanguages
  selectedLanguages.map((language) => {
    languageData[language] = {}
  })
  updateLanguageDict(languageData, selectedLanguages)
  updateLanguageGenders(languageData, selectedLanguages)
  updateLanguageFlagURLs(languageData, selectedLanguages)
  console.log(languageData)
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
        console.log('getGender bitch')
        let data = []
        selectedLanguages.map(language => {
          const gender = languageData[language].dict[request.word]
          const wordForGender = languageData[language].genders[gender]
          const flagURL = languageData[language].flagURL
          if (gender) data.push({countryCode: language, gender, wordForGender, flagURL, isSvelteCode: false})
        })
        sortObjectArrayByKey(data, 'language')
        console.log(data)
        sendResponse({data})
        break

      case 'isExtensionOn':
        sendResponse({isExtensionOn})

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
  console.log('toggling extension!')
  // https://stackoverflow.com/a/68896301 send message to all tabs
  chrome.tabs.query({}, (tabs) => tabs.forEach( tab => {
    chrome.tabs.sendMessage(tab.id, {type: isExtensionOn ? 'enableExtension' : 'disableExtension'})
  } ) );

  isExtensionOn = !isExtensionOn

  if (isExtensionOn) {
    chrome.action.setBadgeText({text: 'On'})
  } else {
    chrome.action.setBadgeText({text: ''})
  }  
  console.log(isExtensionOn)
});

// create connection with anki


// yes i wrote my own parser, so what?
function genderCSVToObj(stringCSV) {
  let output = {}
  const lines = stringCSV.split('\n')
  // we already know how the header is so let's just skip it by setting i to 1
  for (let i=1; i<lines.length; i++) {
      const contents = lines[i].split(',')
      console.log(contents)
      output[contents[0]] = {
        'm': contents[1],
        'f': contents[2],
        'n': contents[3].trim()
      }
  }
  console.log(output)
  return output
}

})()