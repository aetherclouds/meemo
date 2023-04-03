# meemo
## About
### What is this?
Meemo is an extension aimed especially at language learners, and especially those who use Anki. 
From now on, you have a helpful little companion who'll be right next to your cursor and tell you the gender of the word you happen to be hovering upon. This is especially useful for the more romantic languages such as Portuguese and German that have gendered nouns. 
You can also quickly save pieces of text straight into Anki by selecting a certain area (or at the press of a key combination) and clicking the self-explanatory Anki icon that pops up. You then have a menu wherein you can select the deck and card model and fill it away. The tag `$replace$` will get replaced with the selected text. The fields you used this tag in will also stay saved, so that you can make your own templates.

### Why is this?
When I was learning German, I realized I'd spent too much time simply throwing words I didn't know the gender of, into a convenient online tool that would give you the gender for whatever you typed in (forgot the name and link, but I'll be sure to add it whenever we cross paths again), or into Google Translate, prepended with "The". So... I decided to create this! 
Though honestly, it was mostly fueled by the desire to learn a few lessons about browser extensions and augmenting Anki.

## Compatibility
This was not designed with super backward compatibility in mind. In other words, it probably won't work on your Pentium 4's Internet Explorer 6.0. Firefox compatibility is a to-do (because of manifest V3 still making its entry as of now).

## Things to mention
Initially, I planned to save notes straight into Anki's database. I then devotely sought to implement it using [sqlite.js](https://sql.js.org/#/) and some browser-compatible distribution (to which I forgot the link) of it from the depths of [GitHub](https://www.youtube.com/watch?v=dQw4w9WgXcQ). My dreams were shattered when I read that Anki themselves do not recommend modification by 3rd parties through anything other than AnkiConnect. Not to undermine how convenient AnkiConnect is, but it's a bummer that you have to open Anki to use it, as I feel that kind of takes the point away.
Also, it's damn hard to find datasets for nouns and their respective genders! I think I just hit jackpot with German, and then thought the others would be as easy.

## Contributing
If you dare to contribute to this project, you can simply `degit` this repo, run `npm install`, and then `npm run dev`. The dev script will actually build and watch. I suppose this is a bit deviant but the only folders that are actually built from source code are:
- `build/css`
- `build/js`

## Lessons I have learned
If I could start from scratch, I would've
- Definitely used TypeScript (or ReScript). Big, or just decently-sized, projects in JS can become a nightmare in the tracking of data flows.
- Stuck to TailwindCSS from the start. Sorry WindiCSS, but despite being harder to set-up, Tailwind had some features you don't, and when I needed them, things yawed slightly south.
- Researched better ways of debugging extensions.
- Separated the floating hover thing from the main content script, from the start. When I thought about the Save2Anki popup, I had already architected the whole project with the hover component as its cornerstone. While it was certainly important, as I had more floating components on the screen, I quickly realized I should've stramlined and refactored the adding of floating components, because there would be more than just one.
- Used Svelte's context and data stores API instead of prop drilling.

I will make sure to apply these to my next projects. It was an enjoyable adventure!

## Credits
- Country flag SVGs: [yammadev/flag-icons](https://github.com/yammadev/flag-icons)
- Noun gender data:
    - DE: [danielnaber.ce](http://www.danielnaber.de/morphologie/)
- Dungas for our pomodoro sessions and feedback
- & sincerely, thank you for having interest in my project! ..Or at least, in its readme!

## Possible updates
- Option to add key combination for popup & possibly other actions
- Find datasets for more languages (esp. Portuguese and Spanish)
- Fix hover staying fixed on scroll