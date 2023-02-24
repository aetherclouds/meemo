
async function ankiRequest(action, params={}, version=6) {
  const data = {action, version, params}
  return await fetch('http://127.0.0.1:8765', {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
  }).then(response => { 
    if (!response.ok) {
      throw new Error("AnkiConnect response returned not OK")
    } else {
      return response
    }
  }
  ).catch(err => {
    console.error('Error sending a request to AnkiConnect:', err)
  })
}

const times_to_attempt = 5
const attempt_cooldown = 1000
function tryActionElseWarn() {
  for (var i=0; i<times_to_attempt; i++) {
    
  }
}

// here's what we gotta do:
// 1: get models
// 2: get decks
// - display models & decks for selection
// 3: add note

function getModelNames() {
  return ankiRequest('modelNames')
}
function getDeckNames() {
  return ankiRequest('deckNames')
}

// TODO: create 2 cards, the 2nd of which is an inverse of the 1st, kinda like with my goethe words thing
function addNote(modelName, deckName, frontSide, backSide) {
  return ankiRequest('addNote', '')
}

// FIXME: this gives the error Module format iife does not support top-level await. Use the "es" or "system" output formats rather.
export async function test() {
  const response = await ankiRequest('createDeck', 6, {deck: 'test1'}).then(
    console.log(response => console.log(response.body))
  )
}