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

export async function ankiRequestThroughBg(action, params={}) {
  const response = (await chrome.runtime.sendMessage({type: 'runAnkiRequest', data: {action, params}})).response
  // console.log('receiving anki response:', response)
  if (response.error) {
    // console.error(response.error)
    switch (response.error) {
      case 'AnkiConnectionError':
        throw new AnkiConnectionError()
      case 'AnkiResponseError':
        throw new AnkiResponseError()
      default:
        throw new Error(response.error.name)
    }
  } else {
    return response.response
  }
}

export async function ankiRequest(action, params={}, version=6) {
  const data = {action, version, params}
  return fetch('http://127.0.0.1:8765', {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
  }).then(async promisedResponse => { 
    if (!promisedResponse.ok) {
      throw new AnkiResponseError()
    } else {
      const response = await promisedResponse.json()
      // console.log('unprocessed response:',response)
      if (response.result === null) {
        throw new AnkiResponseError(response.error)
      }
      return {response: response.result, error: null}
    }
  }
  ).catch(err => {
    if (!(err instanceof AnkiResponseError)) {
      err = new AnkiConnectionError(err.response)
    }
    return {response: null, error: err.name}
  })
}

// here's what we gotta do:
// 1: get models
// 2: get decks
// - display models & decks for selection
// 3: add note

export async function getModelNames() {
  return ankiRequestThroughBg('modelNames')
}
export async function getDeckNames() {
  return ankiRequestThroughBg('deckNames')
}

export async function getModelFieldNames(modelName) {
  return ankiRequestThroughBg('modelFieldNames', {'modelName': modelName})
}

export async function addNote(deckName, modelName, fields) {
  return ankiRequestThroughBg('addNote', {
    'note': {
      'deckName': deckName,
      'modelName': modelName,
      'fields': fields,
      'tags': ['fromMeemo!'],
      "options": {
        "allowDuplicate": true,
    },
    }
  })
}

export async function test() {
  const response = await ankiRequestThroughBg('modelNames',)
  console.log(await getDeckNames())
    console.log(response)
}