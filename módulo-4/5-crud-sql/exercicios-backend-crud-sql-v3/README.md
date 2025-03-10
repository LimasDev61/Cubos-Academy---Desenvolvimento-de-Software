![](https://i.imgur.com/xG74tOh.png)

# CRUD SQL

### Instruções para abrir o projeto

1. Faça o fork deste repositório
2. Clone o repositório forkado
3. Abra-o no VS Code

### Instruções para rodar o projeto

- Rode o comando `docker compose up -d`
- Conecte-se ao banco de dados pelo Beekeeper

## Sistema de Gerenciamento de Produtos

### Contexto

Você foi contratado para desenvolver um sistema de gerenciamento de produtos para uma loja. O sistema deve ser capaz de armazenar informações sobre os produtos e permitir operações básicas de CRUD (Create, Read, Update, Delete) em uma tabela chamada Produtos. A tabela Produtos deve armazenar informações sobre o identificador único do produto, nome, descrição, quantidade em estoque e preço

### Tarefas

1. Escreva uma instrução SQL para criar a tabela "produtos" com as seguintes colunas:

- id (inteiro, chave primária, auto incremento)
- nome (texto e obrigatório)
- descricao (texto)
- quantidade (numérico e obrigatório)
- preco (numérico e obrigatório)

2. Escreva uma instrução SQL para inserir um novo produto na tabela "produtos" com os seguintes detalhes:

- nome: 'Teclado Mecânico'
- descricao: 'Teclado com switches mecânicos'
- quantidade: 50
- preco: 200.00

3. Escreva uma instrução SQL para inserir um novo produto na tabela "produtos" com os seguintes detalhes:

- nome: 'Notebook'
- descricao: 'Notebook de última geração'
- quantidade: 10
- preco: 3500.00


4. Escreva uma instrução SQL para selecionar todos os produtos na tabela "produtos"

5. Escreva uma instrução SQL para selecionar os produtos cujo preço seja maior que 1000.00

6. Escreva uma instrução SQL para atualizar a quantidade do produto 'Notebook' para 15

7. Escreva uma instrução SQL para atualizar o preço do produto 'Teclado Mecânico' para 180.00

8. Escreva uma instrução SQL para excluir o produto cujo id seja 1

9. Escreva uma instrução SQL para excluir todos os produtos cujo preço seja menor que 150.00

10. Escreva uma instrução SQL para selecionar todos os produtos e ordená-los pelo nome em ordem crescente


