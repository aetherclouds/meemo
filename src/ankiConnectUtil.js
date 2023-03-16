export class AnkiConnectionError extends Error {
  constructor(message) {
    super(message);
    this.name = "AnkiConnectionError";
  }
}

export class AnkiResponseError extends Error {
  constructor(message) {
    super(message);
    this.name = "AnkiResponseError";
  }
}

async function ankiRequest(action, params={}, version=6) {
  const data = {action, version, params}
  return fetch('http://127.0.0.1:8765', {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
  }).then(async promisedResponse => { 
    if (!promisedResponse.ok) {
      throw AnkiResponseError()
    } else {
      const response = await promisedResponse.json()
      if (response.result === null) {
        throw new AnkiResponseError(response.error)
      }
      return response.result
    }
  }
  ).catch(err => {
    // console.error('Error sending a request to AnkiConnect:', err)
    if (!(err instanceof AnkiResponseError)) {
      throw new AnkiConnectionError(err.response)
    }
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

export async function getModelNames() {
  return ankiRequest('modelNames')
}
export async function getDeckNames() {
  return ankiRequest('deckNames')
}

export async function getModelFieldNames(modelName) {
  return ankiRequest('modelFieldNames', {'modelName': modelName})
}

// TODO: create 2 cards, the 2nd of which is an inverse of the 1st, kinda like with my goethe words thing
export function addNote(modelName, deckName, frontSide, backSide) {
  return ankiRequest('addNote', '')
}

export async function test() {
  const response = await ankiRequest('modelNames',)
  console.log(await getDeckNames())
    console.log(response)
}