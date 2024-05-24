export default async function renderContent(
  cssPaths,
  render = (_appRoot) => {}
) {
  const appContainer = document.createElement("div");
  appContainer.id = 'meemo-root'
  const shadowRoot = appContainer.attachShadow({
    mode: import.meta.env.MODE === "development" ? "open" : "closed",
  });
  // commenting out because I mainly use Firefox
  // if (import.meta.hot) {
  //   const { addViteStyleTarget } = await import(
  //     "@samrum/vite-plugin-web-extension/client"
  //   );

  //   await addViteStyleTarget(shadowRoot);
  // } else {
    cssPaths.forEach((cssPath) => {
      const styleEl = document.createElement("link");
      styleEl.setAttribute("rel", "stylesheet");
      styleEl.setAttribute("href", chrome.runtime.getURL(cssPath));
      shadowRoot.appendChild(styleEl);
    });
  // }

  document.body.appendChild(appContainer);

  render(appContainer, shadowRoot);
}
