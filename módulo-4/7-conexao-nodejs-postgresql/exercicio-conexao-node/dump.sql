CREATE DATABASE biblioteca;

CREATE TABLE autores (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(255) NOT NULL
);

CREATE TABLE livros (
    id SERIAL PRIMARY KEY,
    titulo VARCHAR(255) NOT NULL,
    autor_id INT REFERENCES autores(id)
);

INSERT INTO autores (nome) VALUES
('J.K. Rowling'),
('J.R.R. Tolkien'),
('George R.R. Martin'),
('Agatha Christie'),
('Stephen King'),
('Jane Austen'),
('Mark Twain'),
('Charles Dickens'),
('F. Scott Fitzgerald'),
('Ernest Hemingway');

INSERT INTO livros (titulo, autor_id) VALUES
('Harry Potter e a Pedra Filosofal', 1),
('Harry Potter e a Câmara Secreta', 1),
('Harry Potter e o Prisioneiro de Azkaban', 1),
('Harry Potter e o Cálice de Fogo', 1),
('Harry Potter e a Ordem da Fênix', 1),
('Harry Potter e o Enigma do Príncipe', 1),
('Harry Potter e as Relíquias da Morte', 1),
('O Hobbit', 2),
('O Senhor dos Anéis: A Sociedade do Anel', 2),
('O Senhor dos Anéis: As Duas Torres', 2),
('O Senhor dos Anéis: O Retorno do Rei', 2),
('A Guerra dos Tronos', 3),
('A Fúria dos Reis', 3),
('A Tormenta de Espadas', 3),
('O Festim dos Corvos', 3),
('A Dança dos Dragões', 3),
('O Assassinato no Expresso Oriente', 4),
('Morte no Nilo', 4),
('O Caso dos Dez Negrinhos', 4),
('Assassinato no Beco', 4),
('It: A Coisa', 5),
('O Iluminado', 5),
('Carrie, a Estranha', 5),
('A Torre Negra: O Pistoleiro', 5),
('A Torre Negra: A Escolha dos Três', 5),
('Orgulho e Preconceito', 6),
('Razão e Sensibilidade', 6),
('Emma', 6),
('Persuasão', 6),
('Mansfield Park', 6),
('As Aventuras de Tom Sawyer', 7),
('As Aventuras de Huckleberry Finn', 7),
('O Príncipe e o Mendigo', 7),
('Um Conto de Natal', 8),
('Oliver Twist', 8),
('David Copperfield', 8),
('Grandes Esperanças', 8),
('O Grande Gatsby', 9),
('Este Lado do Paraíso', 9),
('O Sol é Para Todos', 9),
('O Velho e o Mar', 10),
('Por Quem os Sinos Dobram', 10),
('Adeus às Armas', 10),
('O Sol Também se Levanta', 10),
('As Neves do Kilimanjaro', 10),
('Paris é uma Festa', 10),
('Harry Potter e a Pedra Filosofal (Edição Comemorativa)', 1);

