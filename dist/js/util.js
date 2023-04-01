import { HTML_ESCAPE_LIST as l } from "./const.js";
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
async function d(n, r = {}, e = 6) {
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
async function m() {
  return c("modelNames");
}
async function h() {
  return c("deckNames");
}
async function p(n) {
  return c("modelFieldNames", { modelName: n });
}
async function y(n, r, e) {
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
function g() {
  return Math.max(
    document.body.scrollWidth,
    document.documentElement.scrollWidth,
    document.body.offsetWidth,
    document.documentElement.offsetWidth,
    document.documentElement.clientWidth
  );
}
function A(n, r) {
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
function E(n) {
  chrome.tabs.query({}, (r) => r.forEach((e) => {
    chrome.tabs.sendMessage(e.id, n);
  }));
}
function w(n) {
  for (const [r, e] of Object.entries(l))
    n = n.replaceAll(r, e);
  return n;
}
function k(n, r) {
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
export {
  a as A,
  d as a,
  m as b,
  i as c,
  p as d,
  k as e,
  w as f,
  h as g,
  y as h,
  g as i,
  E as m,
  A as s
};
//# sourceMappingURL=util.js.map
