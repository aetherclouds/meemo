![meemo-banner](https://user-images.githubusercontent.com/60078934/232831226-c4243a87-617e-4e04-93a6-c2101989473d.png)
## Intro
- Get the gender of nouns in real-time by hovering over them
- Select pieces of text & save them straight into Anki, or
- Use key combinations (ALT + A) to save arbitrary text into Anki
- Fill the fields and use the tag `$replace$` which will then get replaced by the desired text

## Credits
- Country flag SVGs: [yammadev/flag-icons](https://github.com/yammadev/flag-icons)
- Noun gender data:
    - DE: [danielnaber.ce](http://www.danielnaber.de/morphologie/)
- Dungas for our pomodoro sessions and feedback
- & sincerely, thank you for having interest in my project! ..Or at least, in reading this!

## Possible updates
- Option to add key combination for popup & possibly other actions
- Find datasets for more languages (esp. Portuguese and Spanish)


## Contributing/builidng
If you dare to contribute:
- `npm install` (node ^18.12.1 should be fine)
- `npm run dev` (works for chrome only)

to build:
- `npm run build:ffox` or `npm run build:chrm`
- Paste contents of `assets` into `dist-{BROWSER}/assets` (I haven't automated it)
