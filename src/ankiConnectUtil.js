import createSqlWasm from "./modules/sql-wasm-browser"
const sqljs = await createSqlWasm({ wasmUrl: "../modules/sqlite3.wasm" })

function ankiRequest(action, params={}, version=6) {
  const data = {action, version, params}
  return fetch('http://127.0.0.1:8765', {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
  }).then(response => {
    if (!response.ok) {
      throw new Error("AnkiConnect response returned not OK")
    }}
  ).catch(err => {
    console.error("Fetch to AnkiConnect returned an error: ", err)
  })
}

export async function test() {
  console.log((await invoke('createDeck', 6, {deck: 'test1'})).body)
}