BEGIN;

INSERT INTO users VALUES
  (1, 'one@example.com','password1'),
  (2, 'two@example.com','password2')
ON CONFLICT DO NOTHING;

COMMIT;