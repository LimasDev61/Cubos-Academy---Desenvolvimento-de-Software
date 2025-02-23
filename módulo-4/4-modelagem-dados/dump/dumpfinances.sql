create database finances;

create table "users" (
   "id"         serial not null,
   "name"       text not null,
   "email"      varchar(150) not null,
   "cpf"        char(14) not null,
   "password"   text not null,
   "created_at" timestamptz not null default now(),
   primary key ( "id" ),
   constraint "email_unique_constraint" unique ( "email" ),
   constraint "cpf_unique_constraint" unique ( "cpf" )
);

create table "finances_transactions" (
   "id"         serial not null,
   "type"       char(7) not null,
   "value"      int8 not null,
   "created_at" timestamptz not null default now(),
   "user_id"    serial not null,
   primary key ( "id" ),
   constraint "financial_transactions_users_fk" foreign key ( "user_id" )
      references "users" ( "id" )
);