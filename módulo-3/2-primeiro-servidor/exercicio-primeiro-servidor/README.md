# Primeiro Servidor

### Instruções para abrir o projeto

1. Faça o fork deste repositório
2. Clone o repositório forkado
3. Abra-o no VS Code

### Configuração do projeto

Neste exercício, vamos criar nosso primeiro servidor do zero!

Usaremos o Express para criá-lo e o dotenv para conseguirmos usar variáveis de ambiente.

Para isso, vamos configurar nosso projeto seguindo as instruções abaixo:

- Inicialize um projeto node (`npm init -y`)
- Instale o Express e o dotenv como dependências de produção (`npm install NOME_PACOTE`)
- Instale o Typescript, o ts-node e a tipagem do Express como dependência de desenvolvimento (`npm install NOME_PACOTE -D`)
- Crie o arquivo de configuração do TypeScript (`tsc --init`) com o "target" igual a "ES2020" e o diretório de saída ("outDir") igual a "./dist"
- Crie uma pasta src para separarmos nosso código dos arquivos de configurações
- Crie um arquivo chamado index.ts, que será onde vamos inicializar nosso servidor, dentro da pasta src
- Configure o dotenv no arquivo index.ts

### Problema

Você deve criar 4 rotas, cada um representando uma das 4 operações básicas de uma cálculadora:

#### `GET /somar`

Essa rota deve pegar "NUM_1" e "NUM_2" do arquivo .env, somá-los e retornar como resposta o valor da soma

#### `GET /subtrair`

Essa rota deve pegar "NUM_1" e "NUM_2" do arquivo .env, subtraí-los e retornar como resposta o valor da subtração

#### `GET /multiplicar`

Essa rota deve pegar "NUM_1" e "NUM_2" do arquivo .env, multiplicá-los e retornar como resposta o valor da multiplicação

#### `GET /dividir`

Essa rota deve pegar "NUM_1" e "NUM_2" do arquivo .env, dividí-los e retornar como resposta o valor da divisão

#### ⚠️ Importante: caso você não tenha configurado o dotenv anteriormente, o Express não conseguirá reconhecer às variáveis de ambiente

#### ⚠️ Importante: as variáveis de ambiente são lidas como string. É necessário uma conversão para number para realizar as operações aritméticas. Porém, quando for usar o método "send" para enviar uma resposta, é necessário que o envio seja uma string, então o resultado da operação deve ser convertido para string em seguida

#### ⚠️ Dica: para facilitar, crie um script chamado, por exemplo, dev dentro do package.json e faça-o chamar o ts-node para rodar o projeto. CUIDADO! O arquivo index.ts, se você seguiu as orientações acima, está dentro da pasta src
