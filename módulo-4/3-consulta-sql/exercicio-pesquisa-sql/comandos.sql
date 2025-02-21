-- 1- Query quantidade de medicamentos na tabela farmacia.
select count(*) as total_medicamento from farmacia;

-- 2- Query, localizar idade do usuário mais novo cadastrado da tabela usuários.
select idade, nome
from usuarios
order by idade asc
limit 1;

-- 3- Query, localizar idade do usuário mais velho cadastrado da tabela usuários.
select idade, nome
from usuarios
order by idade desc limit 1;

-- 4- Query, para encontrar a idade média entre usuários maiores ou igual a 18;
select idade, nome
from usuarios
where idade >= 18 order by idade;

-- 5- Query, soma total do estoque de todos os medicamentos das categorias 
-- blue e black na tabela farmacia.
select sum(estoque) as total_produtos
from farmacia where categoria in ('blue', 'black');

-- 6- Query, retornar todas as categorias não nulas e a soma do estoque de todos os
-- medicamentos de caga categoria na tabela farmacia.
select categoria, sum(estoque) as "total_produtos"
from farmacia
where categoria is not null;

-- 7- Query, soma do estoque de medicamentos sem categoria na tabela farmacia.
select categoria, sum(estoque) as "total_produtos"
from farmacia
where categoria is null;

-- 8- Query, soma dos produtos sem categoria da tabela farmacia.
select count(*) from farmacia where categoria is null;

-- 9- Query, que retorna uma unica coluna com a junção dos nomes e categorias entre
-- parenteses, não pode ser nulo;
select medicamento || '(' || categoria || ')'
from farmacia where categoria is not null order by categoria asc;

-- 10- Query, retorna uma única coluna com a junção do identificador e o nome
-- do medicamento separado por hífen e a categoria entre parenteses de todos os registros
-- da tabela farmacia. Quando for nula substituir por (sem categoria). 
select concat(id, ' - ', medicamento, '(', coalesce(categoria, 'sem categoria'), ')')
from farmacia order by categoria asc;