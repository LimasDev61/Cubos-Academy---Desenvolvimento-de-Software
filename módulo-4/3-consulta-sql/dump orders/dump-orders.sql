DROP TABLE IF EXISTS "orders";

CREATE TABLE "orders" (
  id SERIAL PRIMARY KEY,
  email varchar(255) default NULL,
  date varchar(255),
  price integer NULL
);

INSERT INTO orders (id,email,date,price)
VALUES
  (1,'nunc@outlook.couk','2024-04-10 23:35:48',46518),
  (2,'curabitur.massa@protonmail.ca','2025-01-27 10:26:58',84830),
  (3,'vitae.aliquam.eros@protonmail.couk','2025-08-20 08:46:10',56866),
  (4,'arcu.sed@aol.edu','2024-05-21 09:29:50',53509),
  (5,'arcu.morbi@protonmail.couk','2024-04-16 06:45:42',21493),
  (6,'luctus.curabitur.egestas@google.edu','2024-04-09 23:06:31',86896),
  (7,'dapibus.id@aol.edu','2024-09-28 06:59:47',64626),
  (8,'placerat@outlook.com','2025-10-21 14:17:21',57190),
  (9,'nibh@hotmail.couk','2024-10-04 11:03:47',91292),
  (10,'neque@google.edu','2024-08-26 04:09:36',67984);
INSERT INTO orders (id,email,date,price)
VALUES
  (11,'lacus.nulla@hotmail.couk','2025-12-01 06:17:59',16521),
  (12,'magna@hotmail.net','2026-01-31 16:44:20',46428),
  (13,'massa.suspendisse@icloud.ca','2025-01-04 11:56:09',5868),
  (14,'tellus@protonmail.ca','2025-07-25 23:04:14',62206),
  (15,'amet.massa@aol.org','2024-12-07 00:55:35',54141),
  (16,'pulvinar.arcu.et@yahoo.net','2025-07-12 08:10:24',60503),
  (17,'tincidunt.adipiscing.mauris@google.edu','2025-09-07 05:03:39',92886),
  (18,'placerat.orci.lacus@google.ca','2025-09-26 15:39:42',40077),
  (19,'amet.metus.aliquam@yahoo.com','2024-05-19 18:59:56',83353),
  (20,'a.mi@aol.ca','2025-06-22 03:41:48',80681);
INSERT INTO orders (id,email,date,price)
VALUES
  (21,'leo.elementum@yahoo.edu','2025-02-19 22:33:12',39234),
  (22,'quisque@outlook.org','2025-11-16 02:18:25',65935),
  (23,'pede@google.ca','2025-04-13 11:09:25',67959),
  (24,'donec.dignissim@aol.edu','2024-08-17 09:13:57',23659),
  (25,'cras.dictum@hotmail.com','2025-03-30 16:35:23',9167),
  (26,'vitae.mauris.sit@yahoo.couk','2025-12-15 20:59:31',50770),
  (27,'ipsum@protonmail.org','2024-05-29 04:09:52',29792),
  (28,'pharetra@hotmail.net','2024-03-11 17:12:23',54410),
  (29,'vestibulum.neque.sed@hotmail.ca','2025-11-10 14:11:04',22058),
  (30,'volutpat@outlook.org','2025-07-31 06:16:35',87743);
INSERT INTO orders (id,email,date,price)
VALUES
  (31,'donec.consectetuer@icloud.couk','2024-11-03 12:53:02',16056),
  (32,'ligula.nullam@icloud.com','2025-05-22 04:24:06',73397),
  (33,'amet.consectetuer@yahoo.couk','2024-09-18 18:18:52',24957),
  (34,'est.mauris@hotmail.com','2024-09-07 13:15:55',30563),
  (35,'eu.lacus@icloud.net','2025-09-16 00:53:19',95989),
  (36,'est@aol.com','2024-12-24 15:48:50',80965),
  (37,'non.luctus.sit@icloud.com','2025-10-19 10:46:46',20709),
  (38,'eu.sem@aol.couk','2025-08-22 23:42:27',68904),
  (39,'scelerisque@google.com','2025-10-29 22:42:33',22550),
  (40,'scelerisque@protonmail.ca','2024-06-17 15:56:50',79502);
INSERT INTO orders (id,email,date,price)
VALUES
  (41,'sed@outlook.edu','2024-06-10 02:48:05',95632),
  (42,'morbi.accumsan@protonmail.ca','2024-10-16 08:27:50',99662),
  (43,'nulla.donec.non@outlook.org','2025-02-20 00:53:05',96462),
  (44,'viverra.maecenas@protonmail.org','2024-08-11 21:47:33',4376),
  (45,'sed.nec.metus@outlook.edu','2025-06-12 20:10:59',3019),
  (46,'sed.nunc.est@google.org','2024-07-12 09:03:17',80800),
  (47,'hendrerit.neque@hotmail.org','2026-02-17 11:42:19',75876),
  (48,'lacinia.mattis@google.org','2024-12-23 03:09:49',99192),
  (49,'accumsan.sed@hotmail.ca','2024-10-17 00:49:18',42789),
  (50,'ultrices.posuere.cubilia@hotmail.ca','2025-12-22 07:22:51',31997);
INSERT INTO orders (id,email,date,price)
VALUES
  (51,'dui@google.org','2025-03-11 01:04:40',66066),
  (52,'lorem.lorem@icloud.edu','2025-02-27 16:09:47',72490),
  (53,'ornare@protonmail.ca','2026-02-12 23:01:20',49371),
  (54,'suspendisse.sed@icloud.org','2024-12-17 09:35:45',80044),
  (55,'ac.fermentum.vel@yahoo.net','2024-04-23 05:53:32',69559),
  (56,'dolor@outlook.com','2024-06-06 05:13:51',3889),
  (57,'aliquam.nisl@icloud.org','2025-05-31 09:17:41',51630),
  (58,'nec.metus@icloud.ca','2024-03-27 07:25:47',7180),
  (59,'interdum@protonmail.org','2024-07-29 08:56:54',94063),
  (60,'ligula@outlook.couk','2026-02-16 09:55:46',76148);
INSERT INTO orders (id,email,date,price)
VALUES
  (61,'nunc.interdum.feugiat@aol.net','2025-07-12 16:10:38',86452),
  (62,'eros.turpis@aol.ca','2025-01-22 12:13:54',11187),
  (63,'pellentesque.habitant.morbi@hotmail.org','2025-05-22 08:59:18',13853),
  (64,'vitae@protonmail.couk','2025-05-24 00:24:34',94330),
  (65,'est.congue@icloud.net','2024-03-29 00:59:44',52107),
  (66,'dis.parturient.montes@yahoo.net','2025-07-15 21:24:26',77200),
  (67,'suspendisse.non.leo@icloud.edu','2024-09-17 03:15:06',7961),
  (68,'facilisis.non@hotmail.edu','2026-01-19 02:07:19',58066),
  (69,'in.ornare.sagittis@protonmail.ca','2025-10-07 10:09:40',72259),
  (70,'tincidunt.orci@google.net','2024-07-23 10:08:00',38548);
INSERT INTO orders (id,email,date,price)
VALUES
  (71,'tempor.lorem@hotmail.ca','2025-11-17 16:54:46',27097),
  (72,'aenean.eget@protonmail.edu','2025-09-26 16:06:44',42087),
  (73,'ipsum@google.com','2024-11-08 00:00:36',80193),
  (74,'amet.risus.donec@icloud.net','2025-12-30 01:48:59',91913),
  (75,'erat.vitae@icloud.ca','2026-01-10 17:28:44',2665),
  (76,'integer.urna@outlook.org','2024-11-11 21:31:31',29660),
  (77,'aliquet@hotmail.com','2024-08-07 13:32:30',25369),
  (78,'nam@hotmail.ca','2025-06-16 12:12:28',15358),
  (79,'quis.massa@aol.org','2024-03-02 18:32:07',7120),
  (80,'dui@yahoo.org','2026-01-05 03:22:57',97315);
INSERT INTO orders (id,email,date,price)
VALUES
  (81,'lectus.quis.massa@aol.ca','2025-11-13 05:29:38',38213),
  (82,'sollicitudin.orci@outlook.couk','2025-07-23 06:51:47',96404),
  (83,'ornare.egestas@outlook.ca','2025-12-15 10:46:10',57353),
  (84,'mollis.lectus@hotmail.couk','2025-01-29 00:53:25',1308),
  (85,'non.enim@yahoo.ca','2025-12-06 11:51:23',62561),
  (86,'a@icloud.couk','2025-04-28 10:41:58',29615),
  (87,'in.consequat@yahoo.couk','2025-12-10 12:41:50',44108),
  (88,'purus.mauris@yahoo.couk','2025-01-22 21:56:22',39148),
  (89,'mollis.integer@yahoo.ca','2025-07-24 08:21:22',22198),
  (90,'cursus.vestibulum@google.net','2024-12-05 13:48:50',19245);
INSERT INTO orders (id,email,date,price)
VALUES
  (91,'nam.interdum.enim@protonmail.com','2025-10-14 13:00:56',71553),
  (92,'pede.cum@protonmail.com','2024-05-26 03:57:18',53064),
  (93,'lobortis.quam.a@outlook.net','2024-08-12 10:01:15',80973),
  (94,'in@hotmail.org','2024-12-30 19:52:42',63879),
  (95,'interdum@yahoo.ca','2024-06-05 10:10:27',66959),
  (96,'et.arcu.imperdiet@hotmail.com','2024-05-22 12:27:08',72356),
  (97,'risus.a@protonmail.couk','2025-10-02 14:23:39',46711),
  (98,'aliquet.vel@hotmail.ca','2024-10-21 12:30:37',62815),
  (99,'fermentum@protonmail.edu','2025-05-03 21:14:05',28888),
  (100,'non.egestas.a@aol.net','2026-01-19 13:03:22',14988);
