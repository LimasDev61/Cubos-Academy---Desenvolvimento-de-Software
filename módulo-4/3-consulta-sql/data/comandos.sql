-- Table query users - basic
select * from users;
select id, name from users;
select id, name, date from users;

-- Table query comparison operators

select * from orders;

select * from orders where price < 10000;
select * from orders where price <= 10000;
select * from orders where price > 10000;
select * from orders where email != 'nunc@outlook.couk';
select * from orders where email <>'nunc@outlook.couk'; -- mesma coisa do !=

-- Table query logical operators
select * from orders where email <>'nunc@outlook.couk' and price < 10000;
select * from orders where email <>'nunc@outlook.couk' or price < 10000;
select * from orders where price < 10000 or price > 20000;
select * from orders where not price < 10000;

-- Table query predicates operators
select * from orders where price between 10000 and 20000;
select * from orders where price not between 10000 and 20000;
select * from orders where price between 10000 and 20000 or price between 80000 and 90000;
select * from users where country is null; 
select * from users where country is not null;

-- Like = Case-Sensitive;
-- ILike = Case-Insensitive
select * from users where name like 'Kameko%'; 
select * from users where name like 'Ab%'; 
select * from users where name like '%as';
select * from users where name like 'Laur_ G__dman'
select * from users where name ilike '%L____ G__%'

select * from users where name ilike 'as%'; 
select * from users where name ilike '%As';
select * from users where name ilike '%As%';

-- Order by clause
select * from users order by id asc;
select * from users order by name asc;
select * from users where name ilike 'ab%' order by name asc;
select * from users where name ilike 'ab%' order by date desc;
select id, name, date from users order by date asc;
select * from orders where price > 10000 order by date asc;

-- Limit and OFFSET by clause
select * from orders order by date desc limit 10;
select * from orders order by id asc limit 10 offset 10;
select * from orders limit 10;
select * from orders limit 10 offset 3;

-- Select Distinct by clause
select distinct country from users;
select distinct country from users where country is not null;

-- Math Operation
select * from orders where price - (price * 0.1) < 10000;
select * from orders where price + 5000 < 10000; -- soma


-- Math Function
select *, sqrt(price) from orders;
select *, ceil(sqrt(price)) from orders;
select *, round(sqrt(price)::NUMERIC, 2) as sqrt_price from orders; -- com esse eu consigo pegar quantidade de casas decimais, os :: funcionam como um cast(ROUND(CAST(SQRT(price) AS NUMERIC), 2));
select *, floor(sqrt(price)) from orders;


-- Strings Function
select upper(name), name from users;
select upper(name) as "Name Formmat", name from users; -- aplicando um novo nome a tabela "" de pesquisa;
select lower(name) as "Name Formmat", name from users;
select lower(name) as "Name Formmat", name, char_length(name) from users;
select name || ' ' || email as "Names/Email" from users; -- operador •	Concatenar ||
select concat(name,' ', email) from users; -- operador concat;
select concat(name,' Renan ', email) from users; -- Também posso aplicar um nome dentro dos espaços.

-- Types Conversion
select price::text from orders;
select cast(price as text) from orders;
select price::text, char_length(price::text) from orders;

-- Date Function
select now();
select now() at time zone 'America/Sao_Paulo';
select *, extract(year from date::timestamp) from orders;
select *, extract(month from date::timestamp) from orders;
select *, extract(day from date::timestamp) from orders;
select date, date::timestamp at time zone 'America/Sao_Paulo' from orders;