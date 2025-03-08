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
         on delete cascade
);