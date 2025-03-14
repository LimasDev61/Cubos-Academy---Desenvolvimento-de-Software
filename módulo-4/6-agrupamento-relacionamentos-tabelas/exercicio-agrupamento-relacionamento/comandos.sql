-- 1.Quantos estudantes estão registrados no sistema?
SELECT COUNT(*) FROM estudantes;

-- 2.Encontre a média de notas de todos os estudantes
SELECT AVG(nota) FROM notas;

-- 3.Liste os nomes dos cursos e a quantidade de estudantes inscritos em cada um
SELECT c.nome AS curso, COUNT(i.estudante_id) AS quantidade_estudantes
FROM cursos c
JOIN inscricoes i ON i.curso_id = c.id
GROUP BY c.nome
ORDER BY quantidade_estudantes DESC;

-- 4.Quantos estudantes estão inscritos em cada curso?
SELECT c.nome AS curso, COUNT(i.estudante_id) AS quantidade_estudantes
FROM cursos c
JOIN inscricoes i ON i.curso_id = c.id
GROUP BY c.nome
ORDER BY quantidade_estudantes DESC;

-- 5.Quantos cursos têm mais de 4 créditos?
SELECT COUNT(*)
FROM cursos
where creditos > 4;

-- 6.Qual é a nota mais alta obtida em cada curso?
SELECT c.nome AS curso, MAX(n.nota) AS maiores_notas
FROM cursos c
JOIN inscricoes i ON c.id = i.curso_id
JOIN notas n ON i.id = n.inscricao_id
GROUP BY c.nome
ORDER BY maiores_notas DESC;

