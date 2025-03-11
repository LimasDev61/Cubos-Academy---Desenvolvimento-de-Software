create database hogwarts;

drop table if exists houses;
create table houses (
   id   serial primary key,
   name varchar(50) not null
);

drop table if exists parents;
create table parents (
   id   serial primary key,
   name varchar(50)
);

drop table if exists students;
create table students (
   id       serial primary key,
   name     varchar(50) not null,
   year     integer not null,
   house_id integer
      references houses ( id )
);

drop table if exists teachers;
create table teachers (
   id       serial primary key,
   name     varchar(50) not null,
   house_id integer
      references houses ( id )
);

drop table if exists classes;
create table classes (
   id          serial primary key,
   name        varchar(50) not null,
   teachers_id integer
      references teachers ( id )
);

drop table if exists par_child_rels;
create table par_child_rels (
   id         serial primary key,
   student_id integer
      references students ( id ),
   parent1_id integer
      references parents ( id ),
   parent2_id integer
      references parents ( id )
);

drop table if exists class_rosters;
create table class_rosters (
   class_id   integer
      references classes ( id ),
   student_id integer
      references students ( id )
);