-- Quantos alunos estudam em hogwarts?
select count(*)
  from students;
select count(*) as countstudents
  from students;

-- Quantos alunos são menores de 5 anos?
select count(*)
  from students
 where year <= 5;

-- Qual a média de idade entre eles?
select avg(year)
  from students;

-- Qual é a menor idade?
select min(year)
  from students;

-- Qual a maior idade?
select max(year)
  from students;