(async () => {
  const { EXTENSION_ALIAS: s } = await import("../const.js"), d = (await import("../Content.js")).default;
  if (window.self === window.top) {
    const t = document.createElement("div");
    t.id = s + "-root";
    const o = t.attachShadow({ mode: "open" }), e = document.createElement("link");
    e.rel = "stylesheet", e.href = chrome.runtime.getURL("css/style.css"), e.classList.add("darkreader"), o.appendChild(e), new d({
      target: o,
      props: {
        rootNode: t,
        // shadowRootNode,
        parentDocument: document
      }
    });
  }
})();
//# sourceMappingURL=content.js.map
