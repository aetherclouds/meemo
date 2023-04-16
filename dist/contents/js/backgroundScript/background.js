import { D as g, i as O, I as E, E as u, m as f, s as w } from "../const.js";
import { a as k } from "../ankiConnectUtil.js";
(async () => {
  var s = {};
  console.log("alr lets test something", chrome.storage.sync.get("asd")), chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({ options: g }), O() && !E && chrome.tabs.create({
      url: "chrome://extensions/?options=" + chrome.runtime.id,
      active: !0
    });
  });
  let d = g;
  chrome.storage.sync.get("options").then((e) => {
    d = e.options || g;
  });
  var i = d.shouldStartEnabled.value;
  h(), p();
  function p() {
    let e = d.selectedLanguages.value;
    e.map((o) => {
      s[o] = {};
    }), L(s, e), b(s), x(s, e);
  }
  function L(e, o) {
    o.map(async (t) => {
      e[t].dict = {};
      const a = chrome.runtime.getURL("contents/data/dicts/" + t + ".csv"), n = await fetch(a);
      n.ok ? ((await n.text()).split(`
`).map((l) => {
        const [r, m] = l.split(",");
        r && m && (e[t].dict[r] = m.trim());
      }), console.log(t, "language dict is loaded with", Object.keys(e[t].dict).length, "entries")) : console.error(u, ": unable to load dict for " + t);
    });
  }
  async function b(e, o) {
    const t = chrome.runtime.getURL("contents/data/genders.csv"), a = await fetch(t);
    if (a.ok) {
      let n = await a.text(), c = y(n);
      Object.entries(c).forEach(([l, r]) => {
        try {
          e[l].genders = r;
        } catch (m) {
          if (!(m instanceof TypeError))
            throw m;
        }
      });
    }
  }
  function x(e, o) {
    o.map((t) => {
      e[t].flagURL = chrome.runtime.getURL(`contents/data/flags/${t}.svg`);
    });
  }
  chrome.runtime.onMessage.addListener(
    (e, o, t) => {
      switch (e.type) {
        case "getGender":
          let a = [];
          d.selectedLanguages.value.map((n) => {
            const c = s[n].dict[e.word], l = s[n].genders[c], r = s[n].flagURL;
            c && a.push({ countryCode: n, gender: c, wordForGender: l, flagURL: r, isSvelteComponent: !1 });
          }), w(a, "language"), t({ data: a });
          break;
        case "isExtensionOn":
          t({ isExtensionOn: i });
          break;
        case "updateOptions":
          d = e.data, p(), f({ type: "updateOptions", data: e.data });
          break;
        case "runAnkiRequest":
          return k(e.data.action, e.data.params).then((n) => {
            t({ response: n });
          }), !0;
      }
    }
  ), chrome.tabs.onUpdated.addListener((e, o, t) => {
    o.status == "complete";
  }), chrome.action.setBadgeBackgroundColor({
    color: [245, 30, 30, 255]
  }), chrome.action.onClicked.addListener((e) => {
    f({ type: i ? "disableExtension" : "enableExtension" }), i = !i, h(), console.log(u, ": toggling extension! now", i);
  });
  function h() {
    i ? chrome.action.setBadgeText({ text: "On" }) : chrome.action.setBadgeText({ text: "" });
  }
  function y(e) {
    let o = {};
    const t = e.split(`
`);
    for (let a = 1; a < t.length; a++) {
      const n = t[a].split(",");
      o[n[0]] = {
        m: n[1],
        f: n[2],
        n: n[3].trim()
      };
    }
    return o;
  }
})();
