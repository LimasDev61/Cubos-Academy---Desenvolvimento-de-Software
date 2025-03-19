![](https://i.imgur.com/xG74tOh.png)

# Conexão Node.JS com Postgres

### Instruções para abrir o projeto

1. Faça o fork deste repositório
2. Clone o repositório forkado
3. Abra-o no VS Code

### Instruções para rodar o projeto

- Rode o comando `docker compose up -d`
- Conecte-se ao banco de dados pelo Beekeeper
- Copie os comandos que se encontram dentro do arquivo `dump.sql` e rode-os no Beekeeper

## Sistema de uma biblioteca

### Contexto

Você está desenvolvendo um sistema para a biblioteca pública de sua cidade. Nesse sistema, em um primeiro momento, temos duas entidades

autores: que contém informações sobre os autores dos livros
livros: que contém informações sobre os livros e que se relaciona com autores. Um livro só pode petencer somente a um autor e um autor pode ter mais de um livro escrito

### Tarefas

Você deve criar uma API que permite ao usuário:

- Criar um livro
- Listar os livros cadastrados
- Editar um livro cadastrado
- Deletar um livro cadastrado
