import createSqlWasm from "./modules/sql-wasm-browser"
const sqljs = await createSqlWasm({ wasmUrl: "../modules/sqlite3.wasm" })

// great reference, annotated db scheme: https://gist.github.com/sartak/3921255
// insight into anki db: https://www.natemeyvis.com/on-ankis-database.html

export async function dbFromFilePath(filePath) {
    let responseAsUInt8Array;
    const fetchResponse = await fetch('C:/Users/kocze/AppData/Roaming/Anki2/Benutzer 1/collection.anki2')
    if (fetchResponse.ok) {
      // NOTE: we want response as an array of bytes as per sql.js documentation, not `.text()`
      // NOTE2: apparently sql.js wants an `Uint8Array` and not anything else
      const responseAsBuffer = await ankiDbResponse.arrayBuffer()
      responseAsUInt8Array = new Uint8Array(responseAsBuffer)
      
    } else {
        throw new Error('Failed to fetch file')
    }

    const ankiDb = new sqljs.Database(responseAsUInt8Array)
    return ankiDb
}

export function insertNote(db, fields = {}) {
  db.exec(`
  INSERT INTO notes (id, guid, mid, mod, usn, tags, flds, sfld, csum, flags, data)
  VALUES (FILL, FILL, FILL, FILL, FILL, ..., , 0, "");
  `)  
}