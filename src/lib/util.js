import { HTML_ESCAPE_LIST, IS_CHROME } from "./const";

// https://stackoverflow.com/a/1038781
export function getPageWidth() {
    return Math.max(
      document.body.scrollWidth,
      document.documentElement.scrollWidth,
      document.body.offsetWidth,
      document.documentElement.offsetWidth,
      document.documentElement.clientWidth
    );
  }
  
export function getPageHeight() {
    return Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.offsetHeight,
        document.documentElement.clientHeight
    );
}

export function areArraysEqual(array1, array2) {
    return array1.length === array2.length && array1.every(function(value, index) { return value === array2[index]})
}

export function sortObjectArrayByKey(_array, key) {
    const array = _array.slice()
    array.sort(
    (a, b) => {
        if ((a == undefined) || (b == undefined)) return 0
        const aUpper = a[key];
        const bUpper = b[key];
        if (aUpper < bUpper) {
          return -1;
        }
        if (aUpper > bUpper) {
          return 1;
        }
        // names must be equal
        return 0;
      }
    )
    return array
}

/* 
IF YOU GET the error:
`Uncaught (in promise) Error: Could not establish connection. Receiving end does not exist.`
nothing to worry about - the content script is just inactive in that tab .
*/
// https://stackoverflow.com/a/68896301
export function messageAllTabs(message) {
  chrome.tabs.query({}, (tabs) => tabs.forEach( tab => {
    chrome.tabs.sendMessage(tab.id, message)
  } ) )
}

export function escapeHtml(content) {
  for (const [key, value] of Object.entries(HTML_ESCAPE_LIST)) {
    content = content.replaceAll(key, value)
  }
  return content
}

// export function loadOptionsInto(optionVariable) {
//   let options = DEFAULT_OPTIONS
//   // try load from sync
//   browserStorageSync.get('options').then(result => {
//     options = result.options || DEFAULT_OPTIONS
//     optionVariable = options
//   })
// }

// https://stackoverflow.com/a/14853974
export function compareArrays(arr1, arr2) {
  // if the other array is a falsy value, return
  if (!arr2)
      return false;
  // if the argument is the same array, we can be sure the contents are same as well
  if(arr2 === arr1)
      return true;
  // compare lengths - can save a lot of time 
  if (arr1.length != arr2.length)
      return false;

  for (let i = 0, l=arr1.length; i < l; i++) {
      // Check if we have nested arrays
      if (arr1[i] instanceof Array && arr2[i] instanceof Array) {
          // recurse into the nested arrays
          if (!arr1[i].equals(arr2[i]))
              return false;       
      }           
      else if (arr1[i] != arr2[i]) { 
          // Warning - two different object instances will never be equal: {x:20} != {x:20}
          return false;   
      }           
  }       
  return true;
}

// https://stackoverflow.com/a/45985333
export function getBrowser() {
  if (typeof chrome !== "undefined") {
    if (typeof browser !== "undefined") {
      return "firefox"
    } else {
      return "chrome"
    }
  } else {
    return "other"
  }
}

export function isChrome() {
    return (typeof browser === "undefined")
}

// POLYFILLS //

export function getBrowserAction() {
  if (IS_CHROME) {
    return chrome.action
  } else {
    return browser.browserAction
  }
}

export function getBrowserStorageSync() {
  if (IS_CHROME) {
    return chrome.storage.sync
  } else {
    return browser.storage.sync
  }
}