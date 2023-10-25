BEGIN;

INSERT INTO servants VALUES
  (1, 'Boris Johnson','Boris Johnson was a guy','/boris_johnson_profile.jpeg' , 9.60),
  (2, 'Theresa May','Killer dancer according to Issy a vibe master', '/theresa_may_profile.jpg', 950.00),
  (3, 'David Cameron', 'Not to be mistaken with James Cameron', '/david_cameron_profile.jpeg', 20000),
  (4, 'Liz Truss', 'Prime minister for a minute or two', '/liz_truss_profile.webp', 8.41 ),
  (5, 'Joe Biden', 'Get it while supplies last', '/joe_biden_profile.jpeg', 1000),
  (6, 'The Queen', 'She just loves to serve', '/queen_profile.webp', 20000),
  (7, 'Donald Trump', 'Urgh', '/donald_trump_profile.jpg', -400000),
  (8, 'Nicola Sturgeon', 'Where did it all go wrong', '/nicola_sturgeon_profile.webp', 250),
  (9, 'Caroline Lucas', 'Perfect for every occassion', '/caroline_lucas_profile.webp', 100),
  (10,'Winston Churchill', 'Might be a bit dusty', '/winston_churchill_profile.jpeg', 3),
  (11, 'Abraham Lincoln', 'Honest Abe', '/abe_lincoln_profile.webp', 800),
  (12, 'Cleopatra', 'Last but not least', '/cleopatra_profile.jpeg', 100000)
ON CONFLICT DO NOTHING;


INSERT INTO variants VALUES
(1, 'Entertain at childrens Birthday Party', 1),
(2, 'Clean your flat', 1.2),
(3, 'Play tennis/golf with you', 1.5),
(4, 'Go on a panel show', 2),
(5, 'Give a speech', 2.5),
(6, 'Pass legislation', 4.5)



ON CONFLICT DO NOTHING;

COMMIT;
