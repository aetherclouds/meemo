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
  if (response.error) {
    switch (response.error) {
      case 'AnkiConnectionError':
        throw new AnkiConnectionError(response.message)
      case 'AnkiResponseError':
        throw new AnkiResponseError(response.message)
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
      throw new AnkiResponseError("returned "+promisedResponse.status)
    } else {
      const response = await promisedResponse.json()
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
    return {response: null, error: err.name, message: err.message}
  })
}

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
  // note == card
  return ankiRequestThroughBg('addNote', {
    'note': {
      'deckName': deckName,
      'modelName': modelName,
      'fields': fields,
      'tags': ['fromMeemo!'],
      "options": {
        "allowDuplicate": true,
    } ,
    }
  })
}

export async function testConnection() {
  await getDeckNames()
}