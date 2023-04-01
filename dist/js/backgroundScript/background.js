import { a as y, m as u, s as O } from "../ankiConnectUtil.js";
import { DEFAULT_OPTIONS as m, EXTENSION_ALIAS as w } from "../const.js";
(async () => {
  var s = {};
  chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({ options: m });
  });
  let d = m;
  function p() {
    let e = d.selectedLanguages.value;
    e.map((n) => {
      s[n] = {};
    }), h(s, e), L(s), b(s, e);
  }
  chrome.storage.sync.get("options").then((e) => {
    d = e.data || m, p();
  });
  var i = d.shouldStartEnabled.value;
  f();
  function h(e, n) {
    n.map(async (t) => {
      e[t].dict = {};
      const o = chrome.runtime.getURL("data/dicts/" + t + ".csv"), a = await fetch(o);
      a.ok ? ((await a.text()).split(`
`).map((l) => {
        const [r, g] = l.split(",");
        r && g && (e[t].dict[r] = g.trim());
      }), console.log(t, "language dict is loaded with", Object.keys(e[t].dict).length, "entries")) : console.error(w + " was unable to load dict for " + t);
    });
  }
  async function L(e, n) {
    const t = chrome.runtime.getURL("data/genders.csv"), o = await fetch(t);
    if (o.ok) {
      let a = await o.text(), c = x(a);
      Object.entries(c).forEach(([l, r]) => {
        try {
          e[l].genders = r;
        } catch (g) {
          if (!(g instanceof TypeError))
            throw g;
        }
      });
    }
  }
  function b(e, n) {
    n.map((t) => {
      e[t].flagURL = chrome.runtime.getURL(`data/flags/${t}.svg`);
    });
  }
  chrome.runtime.onMessage.addListener(
    (e, n, t) => {
      switch (e.type) {
        case "getGender":
          let o = [];
          d.selectedLanguages.value.map((a) => {
            const c = s[a].dict[e.word], l = s[a].genders[c], r = s[a].flagURL;
            c && o.push({ countryCode: a, gender: c, wordForGender: l, flagURL: r, isSvelteComponent: !1 });
          }), O(o, "language"), t({ data: o });
          break;
        case "isExtensionOn":
          t({ isExtensionOn: i });
          break;
        case "updateOptions":
          d = e.data, p(), u({ type: "updateOptions", data: e.data });
          break;
        case "runAnkiRequest":
          return y(e.data.action, e.data.params).then((a) => {
            t({ response: a });
          }), !0;
      }
    }
  ), chrome.tabs.onUpdated.addListener((e, n, t) => {
    n.status == "complete";
  }), chrome.action.setBadgeBackgroundColor({
    color: [245, 30, 30, 255]
  }), chrome.action.onClicked.addListener((e) => {
    u({ type: i ? "disableExtension" : "enableExtension" }), i = !i, f(), console.log("toggling extension! now", i);
  });
  function f() {
    i ? chrome.action.setBadgeText({ text: "On" }) : chrome.action.setBadgeText({ text: "" });
  }
  function x(e) {
    let n = {};
    const t = e.split(`
`);
    for (let o = 1; o < t.length; o++) {
      const a = t[o].split(",");
      n[a[0]] = {
        m: a[1],
        f: a[2],
        n: a[3].trim()
      };
    }
    return n;
  }
})();
//# sourceMappingURL=background.js.map
