import { HTML_ESCAPE_LIST as l } from "./const.js";
function d() {
  return Math.max(
    document.body.scrollWidth,
    document.documentElement.scrollWidth,
    document.body.offsetWidth,
    document.documentElement.offsetWidth,
    document.documentElement.clientWidth
  );
}
function m(n, r) {
  const e = n.slice();
  return e.sort(
    (s, t) => {
      if (s == null || t == null)
        return 0;
      const o = s[r], u = t[r];
      return o < u ? -1 : o > u ? 1 : 0;
    }
  ), e;
}
function h(n) {
  chrome.tabs.query({}, (r) => r.forEach((e) => {
    chrome.tabs.sendMessage(e.id, n);
  }));
}
function p(n) {
  for (const [r, e] of Object.entries(l))
    n = n.replaceAll(r, e);
  return n;
}
function y(n, r) {
  if (!r)
    return !1;
  if (r === n)
    return !0;
  if (n.length != r.length)
    return !1;
  for (var e = 0, s = n.length; e < s; e++)
    if (n[e] instanceof Array && r[e] instanceof Array) {
      if (!n[e].equals(r[e]))
        return !1;
    } else if (n[e] != r[e])
      return !1;
  return !0;
}
class i extends Error {
  constructor(r) {
    super(r), this.name = "AnkiConnectionError";
  }
}
class a extends Error {
  constructor(r) {
    super(r), this.name = "AnkiResponseError";
  }
}
async function c(n, r = {}) {
  const e = (await chrome.runtime.sendMessage({ type: "runAnkiRequest", data: { action: n, params: r } })).response;
  if (e.error)
    switch (console.error(e.error), e.error) {
      case "AnkiConnectionError":
        throw new i();
      case "AnkiResponseError":
        throw new a();
      default:
        throw new Error(e.error.name);
    }
  else
    return e.response;
}
async function g(n, r = {}, e = 6) {
  return fetch("http://127.0.0.1:8765", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ action: n, version: e, params: r })
  }).then(
    async (t) => {
      if (t.ok) {
        const o = await t.json();
        if (o.result === null)
          throw new a(o.error);
        return { response: o.result, error: null };
      } else
        throw a();
    }
  ).catch((t) => (t instanceof a || (t = new i(t.response)), { response: null, error: t.name }));
}
async function A() {
  return c("modelNames");
}
async function E() {
  return c("deckNames");
}
async function w(n) {
  return c("modelFieldNames", { modelName: n });
}
async function k(n, r, e) {
  return c("addNote", {
    note: {
      deckName: n,
      modelName: r,
      fields: e,
      tags: ["fromMeemo!"],
      options: {
        allowDuplicate: !0
      }
    }
  });
}
export {
  a as A,
  g as a,
  A as b,
  i as c,
  w as d,
  y as e,
  p as f,
  E as g,
  k as h,
  d as i,
  h as m,
  m as s
};
//# sourceMappingURL=ankiConnectUtil.js.map
