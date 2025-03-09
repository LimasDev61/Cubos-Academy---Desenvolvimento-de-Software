-- CREATE

create database shop;

create table "categories" (
   "id"          serial not null,
   "description" text not null,
   "created_at"  timestamptz not null default now(),
   primary key ( "id" )
);

create table "products" (
   "id"            serial not null,
   "name"          text not null,
   "description"   text,
   "price"         int4 not null,
   "created_at"    timestamptz not null default now(),
   "categories_id" int4 not null,
   primary key ( "id" ),
   constraint "products_category_id" foreign key ( "categories_id" )
      references "public"."categories" ( "id" )
);

insert into categories (description) values ('Papelaria');
insert into categories (description) values ('Cozinha'), ('Móveis'), ('Eletrodomésticos');

insert into products (name, description, price, categories_id)
values
('Geladeira', 'brastemp', 15000, 4)

-- SELECT VIEWS

select * from products;
select * from categories;

create view products_morethan_10000 as 
select id, name, price from products where price > 10000 order by price asc;

select * from products_morethan_10000;

create view products_description_not_null as 
select * from products where description is not null;

select * from products_description_not_null;

--UPDATE

