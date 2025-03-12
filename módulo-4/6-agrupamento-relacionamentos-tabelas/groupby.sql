-- Quantos alunos eu tenho em cada ano?
select year,
       count(*)
  from students
 group by year;

-- Quantos alunos eu tenho em cada casa?
select house_id,
       count(*)
  from students
 group by house_id
 order by house_id asc;

-- Quantos alunos são menores que 4;
select house_id,
       count(*)
  from students
 where year < 4
 group by house_id
 order by count asc;