BEGIN;

INSERT INTO servants VALUES
  (1, 'Boris Johnson','Boris Johnson was a guy','/boris_johnson_profile.jpeg' , 9.60),
  (2, 'Theresa May','Killer dancer according to Issy a vibe master', '/theresa_may_profile.jpg', 950.00)

ON CONFLICT DO NOTHING;


INSERT INTO variants VALUES
(1, 'Entertain at childrens Birthday Party', 1),
(2, 'Clean your flat', 1.2),
(3, 'Play tennis/golf with you', 1.5)

ON CONFLICT DO NOTHING;

COMMIT;