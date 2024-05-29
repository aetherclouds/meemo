<img width="834" alt="meemo-banner" src="https://user-images.githubusercontent.com/60078934/232831494-3067992d-ff79-467f-846a-56175173406d.png">

## Intro/usage
- Select strings of text & save them straight into Anki
- Use <kbd>ALT</kbd> + <kbd>A</kbd> to call the popup
- Fill the fields matching the card model. `$replace$` will get replaced with the selected text (which can be edited)
- Know the gender of nouns in real-time by hovering over them

## Credits
- Country flag SVGs: [yammadev/flag-icons](https://github.com/yammadev/flag-icons)
- Noun gender data:
    - DE: [danielnaber.ce](http://www.danielnaber.de/morphologie/)
- Dungas for our pomodoro sessions and feedback

## TODOs
- Key shortcuts for popup & other actions
- Datasets for more languages (especially Portuguese and Spanish)
- Safari?

## Developing
Meemo uses `pnpm`, but you may use any other.
1. `pnpm run watch:<ffox|chrm>`
2. Add extension as "temporary extension" under Chromium-based  browsers or Firefox

### Notes
1. `pnpm run dev:ffox` yields `TypeError: error loading dynamically imported module: http://localhost:port/@vite/client`, so I haven't used that.

2. "Hot Module Reloading is used to load changes inline without requiring extension rebuilds and extension/page reloads Currently only works in Chromium based browsers." I mainly use Firefox so I disabled this.

## Building
`pnpm run build:<ffox|chrm>`