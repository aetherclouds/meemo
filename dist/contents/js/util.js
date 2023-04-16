const l = !0, d = c(), h = "meemo", i = {
  selectedLanguages: {
    description: "The languages that the selected word will be matched against",
    type: "languageSelection",
    value: ["de"]
  },
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
  shouldPopupBePinned: {
    description: "Whether popup should stay fixed to the screen rather than the page",
    type: "bool",
    value: !0
  },
  useMotion: {
    description: "Play animations and transitions, such as when moving your cursor or spawning the popup (disabling this should help if your computer is a literal potato)",
    type: "bool",
    value: !0
  }
}, p = Object.keys(i), f = [
  // 'pt', 
  "de"
], u = {
  // '&': '&amp;',
  "<": "&lt;",
  ">": "&gt;"
}, m = "$replace$";
function y() {
  return Math.max(
    document.body.scrollWidth,
    document.documentElement.scrollWidth,
    document.body.offsetWidth,
    document.documentElement.offsetWidth,
    document.documentElement.clientWidth
  );
}
function b(e, t) {
  const o = e.slice();
  return o.sort(
    (n, s) => {
      if (n == null || s == null)
        return 0;
      const r = n[t], a = s[t];
      return r < a ? -1 : r > a ? 1 : 0;
    }
  ), o;
}
function g(e) {
  chrome.tabs.query({}, (t) => t.forEach((o) => {
    chrome.tabs.sendMessage(o.id, e);
  }));
}
function E(e) {
  for (const [t, o] of Object.entries(u))
    e = e.replaceAll(t, o);
  return e;
}
function c() {
  return typeof chrome < "u" ? typeof browser < "u" ? "firefox" : "chrome" : "other";
}
export {
  f as A,
  d as B,
  i as D,
  h as E,
  l as I,
  p as O,
  m as R,
  E as e,
  y as g,
  g as m,
  b as s
};
