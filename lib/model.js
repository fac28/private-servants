const db = require('../database/db.js')

const select_servants = db.prepare(/*sql*/ `
  SELECT id, name, about, profile_img, base_price FROM servants
`)

function listServants() {
  return select_servants.all()
}

const select_individual_servant = db.prepare(/*sql*/ `
  SELECT * FROM servants WHERE id = ?
`)

function selectServantByID(id) {
  return select_individual_servant.get(id)
}

module.exports = { listServants, selectServantByID }
