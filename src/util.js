// UTIL
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

export function messageAllTabs(message) {
  chrome.tabs.query({}, (tabs) => tabs.forEach( tab => {
    chrome.tabs.sendMessage(tab.id, message)
  } ) )
}

/* TODO:
we need both tailwind AND local stylesheets to go together. for that, we'll inject tailwind's stylesheet
(app.postcss) by copying its content into a <style> node created in the same js script that loads
the main svelte component. then, inside the .svelte file, we'll have the local stylesheet.
*/
export function loadCss(node, filename) {

}