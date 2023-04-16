class c extends Error {
  constructor(n) {
    super(n), this.name = "AnkiConnectionError";
  }
}
class o extends Error {
  constructor(n) {
    super(n), this.name = "AnkiResponseError";
  }
}
async function t(e, n = {}) {
  const r = (await chrome.runtime.sendMessage({ type: "runAnkiRequest", data: { action: e, params: n } })).response;
  if (r.error)
    switch (r.error) {
      case "AnkiConnectionError":
        throw new c();
      case "AnkiResponseError":
        throw new o();
      default:
        throw new Error(r.error.name);
    }
  else
    return r.response;
}
async function u(e, n = {}, r = 6) {
  return fetch("http://127.0.0.1:8765", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ action: e, version: r, params: n })
  }).then(
    async (s) => {
      if (s.ok) {
        const a = await s.json();
        if (a.result === null)
          throw new o(a.error);
        return { response: a.result, error: null };
      } else
        throw new o();
    }
  ).catch((s) => (s instanceof o || (s = new c(s.response)), { response: null, error: s.name }));
}
async function l() {
  return t("modelNames");
}
async function d() {
  return t("deckNames");
}
async function m(e) {
  return t("modelFieldNames", { modelName: e });
}
async function p(e, n, r) {
  return t("addNote", {
    note: {
      deckName: e,
      modelName: n,
      fields: r,
      tags: ["fromMeemo!"],
      options: {
        allowDuplicate: !0
      }
    }
  });
}
export {
  o as A,
  u as a,
  l as b,
  c,
  m as d,
  p as e,
  d as g
};
