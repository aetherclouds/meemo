const e = !0, t = "meemo", o = {
  shouldStartEnabled: {
    description: "Whether the extension should be enabled by default upon opening the browser",
    type: "bool",
    value: !0
  },
  UIScale: {
    description: "Size of the hover utility",
    type: "float",
    value: 1
  },
  distanceToMouse: {
    description: "Distance between from the hover utility to the cursor",
    type: "float",
    value: 8
  },
  selectedLanguages: {
    description: "The languages that the selected word will be matched against",
    type: "languageSelection",
    value: ["de"]
  },
  shouldPopupBePinned: {
    description: "Whether popup should stay fixed to the screen rather than the page",
    type: "bool",
    value: !0
  }
}, n = ["pt", "de"], a = {
  // '&': '&amp;',
  "<": "&lt;",
  ">": "&gt;"
}, l = "$replace$";
export {
  n as AVAILABLE_LANGUAGES,
  o as DEFAULT_OPTIONS,
  t as EXTENSION_ALIAS,
  a as HTML_ESCAPE_LIST,
  e as IS_DEBUG,
  l as REPLACEMENT_STRING
};
//# sourceMappingURL=const.js.map
