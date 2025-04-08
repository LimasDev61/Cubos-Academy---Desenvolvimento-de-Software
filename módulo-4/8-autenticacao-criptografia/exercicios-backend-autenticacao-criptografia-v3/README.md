![](https://i.imgur.com/xG74tOh.png)

# Autenticação e Criptografia

### Instruções para abrir o projeto

1. Faça o fork deste repositório
2. Clone o repositório forkado
3. Abra-o no VS Code

### Instruções para rodar o projeto

- Troque o nome do arquivo `.exemplo.env` para `.env` e o preencha com as suas credenciais
- Rode o comando `docker compose up -d`
- Conecte-se ao banco de dados pelo Beekeeper
- Copie os comandos que se encontram dentro do arquivo `dump.sql` e rode-os no Beekeeper

## Sistema de uma biblioteca

### Contexto

Você está desenvolvendo uma API simples para um sistema de gerenciamento de filmes favoritos dos usuários. Esta API deve permitir que os usuários se registrem, façam login e adicionem filmes à sua lista de favoritos.

### Tarefas

Você deve criar uma API que permita o usuário:

- Se cadastrar
- Fazer o login
- Listar os filmes favoritos cadastrados por ele

### Rotas

### `POST /registro`

#### Requisição

Sem parâmetros de rota ou consulta

O corpo da requisição deve conter os seguintes campos:

- nome (obrigatório)
- email (obrigatório)
- senha (obrigatório)

#### Resposta

- Caso de erro: status code apropriado e mensagem apropriada
- Caso de sucesso:

  - cadastrar o usuário com a senha criptografada
  - retornar os dados do usuário sem a senha e com o id

### `POST /login`

#### Requisição

Sem parâmetros de rota ou consulta

O corpo da requisição deve conter os seguintes campos:

- email (obrigatório e único)
- senha (obrigatório)

#### Resposta

- Caso de erro: status code apropriado e mensagem apropriada
- Caso de sucesso:
  - retornar ao usuário o token

### `GET /filmes`

#### Requisição

Sem parâmetros de rota, consulta e sem corpo

#### Resposta

- Caso de erro: status code apropriado e mensagem apropriada
- Caso de sucesso:
  - retornar os filmes cadastrados pelo usuário logado (o usuário não pode ver filmes não cadastrados por ele)

`PARA QUE CONSIGA TESTAR A LISTAGEM DE FILMES, SAIBA QUE AS SENHAS DE TODOS OS USUÁRIOS PRÉ-CADASTRADOS (DENTRO DO ARQUIVO `dump.sql`) NO BANCO DE DADOS SÃO "123"`
