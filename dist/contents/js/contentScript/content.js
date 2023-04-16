(async () => {
  const { EXTENSION_ALIAS: n } = await import("../const.js").then((a) => a._), s = (await import("../Content.js")).default, t = document.createElement("div");
  t.id = n + "-root";
  const o = t.attachShadow({ mode: "open" }), e = document.createElement("link");
  e.rel = "stylesheet", e.href = chrome.runtime.getURL("contents/css/style.css"), e.classList.add("darkreader"), o.appendChild(e), new s({
    target: o,
    props: {
      rootNode: t,
      // shadowRootNode,
      parentDocument: document
    }
  });
})();
