# Assincronismo e Leitura e Escrita de Arquivos

### Instruções para abrir o projeto

1. Faça o fork deste repositório
2. Clone o repositório forkado
3. Abra-o no VS Code

### Configuração do projeto

Para configurar o projeto, siga os passos abaixo:

- Inicialize um projeto node (`npm init -y`)
- Instale o Express e o dotenv como dependências de produção (`npm install NOME_PACOTE`)
- Instale o TypeScript, o ts-node, a tipagem do Express ("@types/express"), a tipagem do node ("@types/node") e o nodemon como dependência de desenvolvimento (`npm install NOME_PACOTE -D`)
- Crie o arquivo de configuração do TypeScript (`tsc --init`) com o "target" igual a "ES2020" e o diretório de saída ("outDir") igual a "./dist"
- Crie uma pasta src para separarmos nosso código dos arquivos de configurações
- Crie um arquivo chamado index.ts, que será onde vamos inicializar nosso servidor, dentro da pasta src
- Configure o dotenv
- Crie um arquivo chamado .env com uma variável chamada PORT. Use-a para definir a porta que será usada pela sua API

### Especificações

Você deve criar uma API de Lendas Urbanas que permita aos usuários listar e cadastrar lendas urbanas de diversas partes do mundo. Esse sistema será ideal para pesquisadores, escritores e entusiastas do sobrenatural que desejam explorar e documentar histórias misteriosas e folclóricas. Sua API deve oferecer endpoints para recuperar a lista de todas as lendas e para adicionar novas lendas à base de dados

Você deve retornar os dados cadastrados no banco de dados (arquivo "bancoDeDados.json") usando a leitura de arquivos e persisti-los usando a escrita (sobrescrevendo o arquivo "bancoDeDados.json")

#### ⚠️ Importante: o arquivo "bancoDeDados.json" está exportando o objeto que simulará nosso banco de dados. Nele tem algumas lendas já cadastradas, para facilitar o teste, e um campo chamado "proximoId", que armazena qual será o próximo id a ser gerado (os ids adotados são autoincremento, ou seja, a primeira lenda tem id = 1; a segunda, igual a 2; a terceira, igual a 3, e assim por diante...)

#### ⚠️ Importante: separe fisicamente, usando diferentes arquivos, seu código entre a inicialização do servidor, rotas, controladores e intermediários. Caso julgue necessário, sinta-se à vontade para criar uma estrutura de pastas e arquivos que deseje

#### ⚠️ Dica: analise os objetos que já estão no banco de dados para entender quais serão os campos que irão compor a "entidade" lenda

#### ⚠️ Dica: para facilitar, crie um script chamado, por exemplo, dev dentro do package.json, e faça-o chamar o nodemon juntamente com ts-node para rodar o projeto

---

#### `GET /lendas`

Recupera uma lista de todas as lendas urbanas cadastradas no sistema

- #### Requisição

Sem parâmetros de rota, consulta ou corpo

- #### Resposta

Deve retornar as lendas urbanas cadastradas

```json
// exemplo de resposta
[
  {
    "id": 1,
    "titulo": "A Loira do Banheiro",
    "origem": "Brasil",
    "tipo": "Fantasma",
    "descricao": "Uma lenda sobre o espírito de uma mulher loira que assombra banheiros de escolas."
  },
  {
    "id": 2,
    "titulo": "O Homem do Saco",
    "origem": "Vários Países",
    "tipo": "Monstro",
    "descricao": "Uma lenda sobre um homem que captura crianças desobedientes em um saco."
  }
]
```

#### `POST /lendas`

Adiciona uma nova lenda urbana ao acervo

- #### Requisição

Sem parâmetros de rota ou de consulta

O corpo (body) deverá possuir um objeto com as seguintes propriedades:

- titulo (campo obrigatório): string que armazena o título da lenda
- origem (campo obrigatório): string que armazena o país de origem da lenda
- tipo (campo obrigatório): string que armazena o tipo (fantasma, monstro, vampiros) da lenda
- descricao (campo obrigatório): string que armazena a descrição da lenda

```json
// exemplo de requisição
{
  "titulo": "A Mulher de Branco",
  "origem": "México",
  "tipo": "Fantasma",
  "descricao": "Uma lenda sobre o espírito de uma mulher que aparece nas estradas à noite, pedindo carona."
}
```

- #### Resposta

Em caso de sucesso, deve retornar a nova lenda cadastrada, incluíndo o id gerado

Em caso de erro, deve retornar um JSON com uma propriedade "mensagem" descrevendo o erro

- #### REQUISITOS OBRIGATÓRIOS

```
- verificar se todos os campos obrigatórios foram enviados

```

#### ⚠️ Dica: tente colocar as validações em intermediários
