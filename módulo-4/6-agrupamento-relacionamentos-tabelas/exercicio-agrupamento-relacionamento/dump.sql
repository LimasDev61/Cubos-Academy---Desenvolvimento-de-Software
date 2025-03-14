-- Criando banco de dados gestao_escolar
CREATE DATABASE gestao_escolar;

-- Criando tabela Estudantes
CREATE TABLE Estudantes (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    data_nascimento DATE NOT NULL
);

-- Criando tabela Cursos
CREATE TABLE Cursos (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    creditos INT NOT NULL
);

-- Criando tabela Inscricoes
CREATE TABLE Inscricoes (
    id SERIAL PRIMARY KEY,
    estudante_id INT REFERENCES Estudantes(id),
    curso_id INT REFERENCES Cursos(id),
    data_inscricao DATE NOT NULL
);

-- Criando tabela Notas
CREATE TABLE Notas (
    id SERIAL PRIMARY KEY,
    inscricao_id INT REFERENCES Inscricoes(id),
    nota DECIMAL(5, 2) NOT NULL
);

-- Inserindo dados na tabela Estudantes
INSERT INTO Estudantes (nome, data_nascimento) VALUES
('Alice', '2000-01-15'),
('Bruno', '1999-03-22'),
('Carla', '2001-07-10'),
('Daniel', '2000-12-05');

-- Inserindo dados na tabela Cursos
INSERT INTO Cursos (nome, creditos) VALUES
('Matemática', 4),
('História', 3),
('Biologia', 4),
('Física', 5);

-- Inserindo dados na tabela Inscricoes
INSERT INTO Inscricoes (estudante_id, curso_id, data_inscricao) VALUES
(1, 1, '2024-01-10'),
(2, 2, '2024-01-11'),
(3, 3, '2024-01-12'),
(4, 4, '2024-01-13'),
(1, 2, '2024-01-14'),
(2, 3, '2024-01-15'),
(3, 4, '2024-01-16'),
(4, 1, '2024-01-17');

-- Inserindo dados na tabela Notas
INSERT INTO Notas (inscricao_id, nota) VALUES
(1, 85.5),
(2, 78.0),
(3, 92.0),
(4, 88.0),
(5, 75.5),
(6, 80.0),
(7, 90.0),
(8, 82.0);

