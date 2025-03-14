-- Comando simples do join 1:1.
select *
  from teachers
  join classes
on teachers.id = classes.teacher_id;

select *
  from teachers
  join classes
on teachers.id = classes.teacher_id
  join houses
on teachers.house_id = houses.id;

select teachers.id,
       teachers.name,
       teachers.house_id,
       houses.name,
       classes.id as class_id,
       classes.subject
  from teachers
  join classes
on teachers.id = classes.teacher_id
  join houses
on teachers.house_id = houses.id;

-- Comandos simples Join 1:N;
select *
  from houses
  join students
on houses.id = student.house_id;

select s.house_id,
       h.name,
       s.id as student_id,
       s.name,
       s.year
  from houses h
  join students s
on h.id = s.house_id;

select h.name as houses_name,
       count(s.id) as studentscount
  from houses h
  join students s
on s.house_id = h.id
 group by houses_name;

-- Comandos simples de join N:N
select *
  from classes c
  join class_rosters cr
on cr.class_id = c.id
  join students s
on cr.student_id = s.id;

select c.subject,
       count(cr.student_id) as student_count
  from classes c
  join class_rosters cr
on cr.class_id = c.id
 group by c.subject;

select c.subject,
       s.name
  from classes c
  join class_rosters cr
on cr.class_id = c.id
  join students s
on cr.student_id = s.id
 group by c.subject,
          s.name;

select c.id,
       c.subject,
       count(s.id)
  from classes c
  join class_rosters cr
on cr.class_id = c.id
  join students s
on cr.student_id = s.id
 group by c.id,
          c.subject;

-- INNER JOIN
select *
  from teachers;
select *
  from houses;

select *
  from teachers t
 inner join houses
on t.house_id = houses.id;

-- LEFT JOIN 
select * from teachers t left join houses on t.house_id = houses.id;

-- RIGHT JOIN
select * from teachers t right join houses on t.house_id = houses.id;