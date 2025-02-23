![](https://i.imgur.com/xG74tOh.png)

# Modelagem de Dados

### Instruções para abrir o projeto

1. Faça o fork deste repositório
2. Clone o repositório forkado
3. Abra-o no VS Code

### Instruções para rodar o projeto

- Rode o comando `docker compose up -d`
- Conecte-se ao banco de dados pelo Beekeeper

<details>

<summary>Exercício 01</summary>

# Criação do banco

Crie um banco de dados chamado "gestao_biblioteca"

# Modelagem de dados

Faça a modelagem de dados do seguinte sistema

Dica: use o Navicat para te ajudar

## Contexto

Você foi contratado para criar um sistema simples de gerenciamento de uma rede de bibliotecas. O sistema deve armazenar informações sobre livros e as bibliotecas que compõe essa rede

## Requisitos

- Livros
  - Cada livro deve ter um título e uma data de publicação
  - Cada livro deve ter um identificador único (ISBN). O ISBN (International Standard Book Number) é um identificador único, composto de 13 dígitos, atribuído a cada edição e variação de um livro publicado. Ele serve para facilitar a identificação e a comercialização de livros em nível internacional
  - Cada livro deve estar associado a uma biblioteca
- Bibliotecas
  - Cada biblioteca tem um nome e um endereço
  - Cada biblioteca tem zero ou mais livros
  - Cada biblioteca deve ter um identificador único (ID)

</details>

<details>

<summary>Exercício 02</summary>

# Adição dos autores ao modelo

## Contexto

O sistema de gerenciamento que está desenvolvendo precisa ser modificado para adicionar a informação dos autores de cada livro

## Requisitos

- Autores
  - Cada autor deve ter um nome e uma nacionalidade
  - Cada autor pode ter escrito vários livros
- Livro
  - Cada livro deve ter um autor

</details>
