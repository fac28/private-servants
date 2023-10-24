BEGIN;

INSERT INTO servants VALUES
  (1, 'Boris Johnson','Boris Johnson was a guy','https://cdn1.img.sputniknews.in/img/07e7/08/15/3739344_361:0:2409:2048_1920x0_80_0_0_b9eb680f70f0e800649b2f6c8385f79a.jpg' , 9.60),
  (2, 'Theresa May','Killer dancer according to Issy a vibe master', 'https://pbs.twimg.com/media/DcD8b1QXkAA7XW5.jpg', 950.00)

ON CONFLICT DO NOTHING;


INSERT INTO variants VALUES
(1, 'Entertain at childrens Birthday Party', 1),
(2, 'Clean your flat', 1.2),
(3, 'Play tennis/golf with you', 1.5)

ON CONFLICT DO NOTHING;

COMMIT;