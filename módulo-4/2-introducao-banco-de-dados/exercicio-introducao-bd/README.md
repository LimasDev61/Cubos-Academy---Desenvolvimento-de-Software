# Introdução ao banco de dados

### Instruções para abrir o projeto

1. Faça o fork deste repositório
2. Clone o repositório forkado
3. Abra-o no VS Code

<details>

<summary>Exercício 01</summary>

# Questões de fixação

1. O que são SGDBs? Cite dois.

```
São sistemas de gerenciamento de banco de dados, podemos citar os mais famosos postgres e mysql.
```

2. Qual a diferença entre os bancos de dados relacionais e não relacionais?

```
A principal diferença do banco de dados relacional é que todos os dados se relacionam entre si, o que garante maior consistência das informações. Esse tipo de banco é útil para aplicações que exigem integridade nos dados. Por outro lado, no banco de dados não relacional, os dados são armazenados de forma independente, e cada conjunto de dados forma uma informação separada. Embora haja maior possibilidade de inconsistências, esse modelo de banco de dados pode ser processado de maneira mais rápida e em grande escala
```

</details>

<details>

<summary>Exercício 02</summary>

# Primeiras consultas

Cole os comandos SQL que utilizar no arquivo `comandos.sql` presente neste projeto

### Configuração do banco usando Docker

Você deve subir um banco de dados PostgreSQL usando um container Docker

### Conectar com o PostgreSQL 

Use o Beekeeper para se conectar ao PostgreSQL

### Criar um banco de dados

Crie um banco de dados chamado "primeiro_banco"

### Criar uma tabela

Crie uma tabela chamada "produtos" com os seguintes campos:

- `id`: campos do tipo serial e chave primária. Será responsável por identificar um produto
- `nome`: campo do tipo texto. Será responsável por armazenar o nome do produto
- `preco`: do tipo inteiro. Será responsável por armazenar o preço do produto em centavos

</details>

