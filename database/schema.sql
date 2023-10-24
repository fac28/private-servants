BEGIN;

CREATE TABLE IF NOT EXISTS servants (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  about TEXT,
  profile_img TEXT,
  base_price REAL


 
);

CREATE TABLE IF NOT EXISTS variants (
  id TEXT PRIMARY KEY,
task TEXT,
price_modifier REAL
);

COMMIT;
