import crypto from "node:crypto";
import db from "./db.js";

const select_user = db.prepare(/*sql*/ `
  SELECT email, password FROM users
  WHERE id = ?
`);
export function getUser(id) {
  return select_user.get(id);
}

const select_user_by_email = db.prepare(/*sql*/ `
  SELECT id, email, password FROM users
  WHERE email = ?
`);
export function getUserByEmail(email) {
  return select_user_by_email.get(email);
}

const insert_user = db.prepare(/*sql*/ `
  INSERT INTO users (email, password) VALUES ($email, $password)
  RETURNING id
`);
export function createUser(user) {
  return insert_user.get(user);
}

const select_user_from_session = db.prepare(/*sql*/ `
  SELECT users.id, users.email FROM users
    JOIN sessions on users.id = sessions.user_id
  WHERE sessions.id = ?
`);
export function getUserFromSession(sid) {
  return select_user_from_session.get(sid);
}

const insert_session = db.prepare(/*sql*/ `
  INSERT INTO sessions VALUES (?, ?)
  RETURNING id
`);
export function createSession(user_id) {
  const sid = crypto.randomBytes(18).toString("base64");
  return insert_session.get(sid, user_id);
}

const delete_session = db.prepare(/*sql*/ `
  DELETE FROM sessions WHERE id = ?
`);
export function removeSession(sid) {
  delete_session.run(sid);
}
