# Introdução ao Docker e Docker Compose

### Instruções para abrir o projeto

1. Faça o fork deste repositório
2. Clone o repositório forkado
3. Abra-o no VS Code

<details>

<summary>Exercício 01</summary>

# Criando e Executando um Contêiner Docker Simples

### Descrição

Você deve criar e executar um contêiner Docker a partir de uma imagem existente do Docker Hub

Para isso, siga os passos abaixo:

- Certifique-se de que o Docker está instalado em seu sistema
- Abra o terminal ou prompt de comando
- Execute o comando para baixar a imagem nginx do Docker Hub
- Crie e execute um contêiner a partir da imagem nginx
- Verifique se o contêiner está em execução

### Perguntas

Tente responder às seguintes perguntas de fixação

1. Qual comando você usou para baixar a imagem nginx?

```
Utilizei o docker pull nginx-alpine
```

2. Qual comando você usou para criar e executar o contêiner nginx?

```
docker run --name imagem-1 -d -p 8080:80 nginx:alpine
```

3. Como você verificou se o contêiner nginx está em execução?

```
docker ps
```

</details>

<details>

<summary>Exercício 02</summary>

# Criando e Executando um Projeto com Docker Compose

### Descrição

Você deve criar um arquivo Docker Compose para definir e executar múltiplos contêineres

Para isso, siga os passos abaixo:

- Crie um diretório para seu projeto Docker Compose
- Dentro desse diretório, crie um arquivo docker-compose.yml
- No arquivo docker-compose.yml, defina dois serviço web usando a imagem nginx
- Execute os serviços definidos no docker-compose.yml
- Verifique se os serviços estão em execução
- Pare os serviços em execução

### Perguntas

Tente responder às seguintes perguntas de fixação

1. Qual comando você usou para executar os serviços definidos no docker-compose.yml?

```
docker compose up -d
```

2. Como você verificou se os serviços estão em execução?

```
docker compose ps
```

3. Qual comando você usou para parar os serviços definidos no docker-compose.yml?

```
docker compose down
```

</details>

