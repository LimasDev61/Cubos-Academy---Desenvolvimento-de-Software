# Rotas, intermediários e controladores

### Instruções para abrir o projeto

1. Faça o fork deste repositório
2. Clone o repositório forkado
3. Abra-o no VS Code

### Configuração do projeto

Para configurar o projeto, siga os passos abaixo:

- Inicialize um projeto node (`npm init -y`)
- Instale o Express como dependências de produção (`npm install NOME_PACOTE`)
- Instale o TypeScript, o ts-node, a tipagem do Express ("@types/express"), a tipagem do node ("@types/node") e o nodemon como dependência de desenvolvimento (`npm install NOME_PACOTE -D`)
- Crie o arquivo de configuração do TypeScript (`tsc --init`) com o "target" igual a "ES2020" e o diretório de saída ("outDir") igual a "./dist"
- Crie uma pasta src para separarmos nosso código dos arquivos de configurações
- Crie um arquivo chamado index.ts, que será onde vamos inicializar nosso servidor, dentro da pasta src

### Especificações

Você deve criar uma API que permita ao usuário:

- Obter a lista de convidados de uma festa
- Detalhar um convidado
- Filtrar os convidados por idade

#### ⚠️ Importante: o arquivo "bancoDeDados.ts" está exportando o objeto que simulará nosso banco de dados

Além disso, você deve organizar seu código em, no mínimo, três arquivos:

- `src/index.ts`: arquivo que vai inicializar seu servidor
- `src/controladores.ts`: arquivo que contém os controladores do projeto
- `src/intermediarios.ts`: arquivo que contém os intermediários do projeto

#### ⚠️ Importante: veja que a única restrição é que os controladores, intermediários e a inicialização do servidor estejam separados em arquivos diferente. Sinta-se à vontade para criar, por exemplo, uma pasta para colocar os controladores ou alguma outra estrutura que separe essas funcionalidades de outra forma

#### ⚠️ Dica: para facilitar, crie um script chamado, por exemplo, dev dentro do package.json e faça-o chamar o nodemon juntamente com ts-node para rodar o projeto

#### `GET /`

Essa rota deve retornar a mensagem "API de lista de convidados"

#### `GET /convidados`

Essa rota deve retornar todos os convidados cadastrados no banco de dados (retonar o objeto exportado no arquivo bancoDeDados.ts)

#### `GET /convidados/:id`

Essa rota deve retornar:

- O convidado cujo id é o mesmo do parâmetro de rota "id"
- `Convidado não encontrado`: se o convidado não for encontrado

#### ⚠️ Importante: CUIDADO! Lembre-se que os parâmetros de consulta e de rota são SEMPRE recuperados como strings. Sendo assim, quando será necessário uma conversão, já que o id dos convidados são do tipo number

#### `GET /convidados?idadeMaxima=20`

Você deve modificar o controlador da rota `/convidados`, que retorna todos os convidados, para que ele aceite um filtro passado como parâmetro de consulta (query). Com essa modificação, a rota `/convidados` deve retornar:

- Todos os convidados, caso o filtro não seja passado
- Os convidados com idade de no máximo igual ao parâmetro `idadeMaxima`, caso o filtro seja passado

#### ⚠️ Importante: parâmetros de consulta (query) são optativos. Sendo assim, você NÃO deve criar outra rota para retornar os convidados filtrados

#### Intermediário de validação do filtro

Crie um intermediário, que será usado antes do controlador que retorna os convidados, que valide se o filtro enviado é válido. Para ele ser válido, ele deve conter apenas caracteres numéricos. Esse intermediário deve:

- Retornar "Idade máxima inválida", se o filtro for passado e ele não for válido (contiver caracteres não numéricos)
- Passar a requisição para o controlador, caso o filtro não seja passado ou caso ele esteja correto
