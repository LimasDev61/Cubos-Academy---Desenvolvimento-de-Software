-- CREATE

-- 1º
create table "produtos" (
   "id"         serial not null,
   "nome"       varchar(255) not null,
   "descricao"  text,
   "quantidade" numeric not null,
   "preco"      numeric not null,
   primary key ( "id" )
);

-- 2º
insert into produtos (
   nome,
   descricao,
   quantidade,
   preco
) values ( 'Teclado Mecânico' ),( 'Teclado com switches mecânicos' ),( 50 ),( 200.0 );

-- 3º
insert into produtos (
   nome,
   descricao,
   quantidade,
   preco
) values ( 'Notebook' ),( 'Notebook última geração' ),( 10 ),( 3500.0 );

-- SELECT / SELECT VIEWS
-- 4º
select *
  from produtos;

-- 5º
create view produtos_maiores_que_1000 as
   select *
     from produtos
    where preco > 1000
    order by price asc;

-- UPDATE

-- 6º
update produtos
   set
   quantidade = 15
 where nome = 'Notebook';

update produtos
   set
   quantidade = 15
 where id = 2;

-- 7º
update produtos
   set
   preco = 180.0
 where nome = 'Teclado Mecânico';

update produtos
   set
   preco = 180.0
 where id = 1;

-- DELETE 

-- 8º
delete from produtos
 where id = 1;
delete from produtos
 where nome = 'Teclado Mecânico';

delete from produtos
 where preco < 150.00;

-- ORDER 

--10º
select *
  from produtos
 order by nome asc;