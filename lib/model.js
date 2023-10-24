const db = require("../database/db.js");

const select_servants = db.prepare(/*sql*/ `
  SELECT id, name, about, profile_img, base_price FROM servants
`);

function listServants() {
  return select_servants.all();
}

module.exports = { listServants };
