-- COlOQUE AQUI OS CÓDIGOS SQL QUE USAR
create database gestao_biblioteca; -- criando bd

CREATE TABLE "livros" (
  "ISBN" char(13) NOT NULL,
  "title_name" text NOT NULL,
  "publish_date" time NOT NULL DEFAULT now(),
  "id_library" int4 NOT NULL,
  "id_author" int4 NOT NULL,
  PRIMARY KEY ("ISBN", "id_author", "id_library"),
  CONSTRAINT "id_author" FOREIGN KEY ("id_author") REFERENCES "autor" ("id") ON DELETE CASCADE,
  CONSTRAINT "id_library" FOREIGN KEY ("id_library") REFERENCES "biblioteca" ("id") ON DELETE CASCADE,
  CONSTRAINT "title_name" UNIQUE ("title_name")
);

CREATE TABLE "autor" (
  "id" serial NOT NULL,
  "nationality" varchar(40) NOT NULL,
  "name" varchar(100) NOT NULL,
  PRIMARY KEY ("id"),
  CONSTRAINT "author" UNIQUE ("name")
);

CREATE TABLE "biblioteca" (
  "id" serial NOT NULL,
  "name" varchar(255) NOT NULL,
  "addres" text NOT NULL,
  PRIMARY KEY ("id"),
  CONSTRAINT "name" UNIQUE ("name")
);