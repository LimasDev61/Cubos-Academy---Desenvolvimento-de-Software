create table users (
   id       uuid primary key,
   name     text not null,
   email    text not null,
   password text not null
)