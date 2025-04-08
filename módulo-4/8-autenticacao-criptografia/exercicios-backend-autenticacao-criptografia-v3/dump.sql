CREATE DATABASE filmes_favoritos;

CREATE TABLE usuarios (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    senha TEXT NOT NULL
);

CREATE TABLE filmes (
    id SERIAL PRIMARY KEY,
    titulo VARCHAR(255) NOT NULL,
    usuario_id INT REFERENCES usuarios(id)
);

INSERT INTO usuarios (nome, email, senha) VALUES
('Mercedes Madden','sit.amet.consectetuer@icloud.edu', '$2a$10$2TjhCWG20wg8oDMViVHh.uubZ8mPwJhhA0UoxjiqFJwzaXDx8mtWW'),
('Ali Hendricks','laoreet.libero@google.edu', '$2a$10$XMLvB.3ce9R4vEsESfbi.ewEw3wRs.sOeg0nt5LETpvqMQ./MOvrq'),
('Janna Merrill','dictum.placerat@google.net', '$2a$10$8fnW2VBXJBBRmvrw6XtfjebA8xmKFW/255hdzcCQ5WKooOhUN3kIW'),
('Clark Stanley','duis@icloud.ca', '$2a$10$6dR52W1hJDvMN0moGr6Kt.pX/PNFYuKCxqOFEHahdycInFFWOuIAG'),
('Dai Maxwell','tellus.phasellus@aol.couk', '$2a$10$Jy55E4TgE62wCrvA04nS5ul4ZB/94m336c7RTRIzjig2s3eNpmMAK');

INSERT INTO filmes (titulo, usuario_id) VALUES
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
('A Torre Negra: A Escolha dos Três', 5);

