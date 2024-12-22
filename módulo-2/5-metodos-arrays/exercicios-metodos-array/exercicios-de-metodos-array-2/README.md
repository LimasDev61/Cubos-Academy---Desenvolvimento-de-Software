# Métodos de Arrays 2

### Instruções para abrir o projeto

1. Faça o fork deste repositório
2. Clone o repositório forkado
3. Abra-o no VS Code

### Instruções para rodar o projeto

1. Use o comando `npm install` no seu terminal para instalar as dependências necessárias para rodar o projeto
2. Caso deseje, use o arquivo `index.ts`, que se encontra dentro da pasta _src_, para testar os códigos usados para resolver os exercícios
3. Use o comando `npm run start` no terminal para rodar o código do arquivo `index.ts`
4. Quando estiver satisfeito com o código, passe-o para o arquivo _.ts_ que se encontra dentro da pasta com o número da questão que está resolvendo. Todas as resoluções devem ser colocadas dentro da função `solucao`
5. Caso ainda não tenha feito, baixe a extensão _Code Runner_
6. Com o arquivo _.ts_ da questão aberto, clique em "Run Code" para submeter a questão

### Principais erros

1. Você não deve atribuir valores às entradas da função `solucao`. É comum criarmos essas variáveis para testar o código, mas não se esqueça de deletá-las ao passar o código para a função `solucao`
2. Você deve usar o `return` em todos os exercícios que pedem para RETORNAR algo
3. Atente-se ao retorno. Você deve retornar exatamente o que é pedido. Por exemplo:
   - caso esteja pedindo para retornar uma soma, você deve retornar APENAS a soma, e não "A soma é: VALOR_DA_SOMA"
   - caso esteja pedindo para retornar "OLA, MUNDO", você NÃO deve retornar "Olá, mundo", ou " Olá, mundo", ou "Olá, mundo ". Atente-se para a quantidade de espaços em branco, para o tipo de letra (maíusculas ou minúsculas) e para as acentuações.

### Dicas

- Faça commits regulares. Dica: faça, pelo menos, um commit ao término de cada um das questão
- Quando terminar, lembre-se de atualizar seu repositório remoto (`git push`). Lembre-se que seu GitHub será seu portifólio. É sempre bom mantê-lo atualizado e ativo.

---

---

<details>
<summary>[Fácil] Exercício 01</summary>

# Sistema para biblioteca

## Problema

Você está desenvolvendo um sistema para auxiliar funcionários de uma biblioteca a localizarem em que posição da estante da biblioteca está um determinado livro.

## Entrada

A entrada será composta por duas variáveis:

- `livros`: array de strings contendo os nomes dos livros da estante
- `livroProcurado`: string contendo o nome do livro que deseja localizar

## Saída

Seu programa deve **RETORNAR**:

- `O LIVRO ESTA NA POSICAO N`, onde `N` é a posição do livro
- `NENHUM LIVRO ENCONTRADO`: caso não haja na lista de livros o livro procurado

## Exemplos

### Entrada 1

```ts
livros = ["Harry Potter", "O Senhor dos Anéis", "Crepúsculo", "Percy Jackson"];
nomeDoLivro = "Crepúsculo";
```

### Saída 1

"O LIVRO ESTA NA POSICAO 3"

### Explicação 1

A posição do livro na estante é 3.

</details>

<details>
<summary>[Fácil] Exercício 02</summary>

# Verificando inconsistências

## Problema

Você foi encarregado de indicar se existe algum CPF inválido em uma planilha do Excel.

Para poupar tempo, você resolveu implementar um programa que faça isso automaticamente.

## Entrada

A entrada será composta por uma variável:

- `cpfsCadastrados`: do tipo array de strings, contendo os CPFs cadastrados na planilha

## Saída

Seu programa deve **RETORNAR**:

- `PLANILHA VALIDA`: caso todos os CPFs tenham 11 caracteres
- `PLANILHA INVALIDA`: caso contrário

## Exemplos

### Entrada 1

```ts
cpfsCadastrados = [
  "73168619086",
  "92799060030",
  "87992956010",
  "2212442700",
  "94209346080",
  "30344513009",
];
```

### Saída 1

"PLANILHA INVALIDA"

### Explicação 1

O CPF de index 3 do array é inválido.

</details>

<details>
<summary>[Médio] Exercício 03</summary>

# Agendamento de pacientes

## Problema

Você trabalha como desenvolvedor de software para um supermercado da sua cidade. Uma das funcionalidades do sistema, que está trabalhando no momento, é a de previnir que menores de 18 anos não comprem bebidas alcoólicas.

## Entrada

A entrada será composta por duas variáveis:

- `tipoItensCarrinho`: array de strings que contém os tipos dos itens que estão no carrinho de compras do cliente. Os tipos são "comida", "bebida sem alcool", "bebida com alcool", "produtos gerais"
- `idadeCliente`: number que armazena a idade do cliente que deseja efetuar a compra

## Saída

Seu programa deve **RETORNAR**:

- `COMPRA BLOQUEADA`: caso o cliente sejam menor de 18 anos e contenha bebida alcoólica na sua compra
- `COMPRA EFETUADA`: caso contrário

## Exemplos

### Entrada 1

```ts
tipoItensCarrinho = [
  "comida",
  "comida",
  "produtos gerais",
  "bebida com alcool",
  "bebida sem alcool",
  "bebida sem alcool",
  "produtos gerais",
];
idadeCliente = 16;
```

### Saída 1

"COMPRA BLOQUEADA"

### Explicação 1

O cliente tem 16 anos e está tentando comprar bebidas alcoólicas.

</details>

<details>
<summary>[Médio] Exercício 04</summary>

# Evolução dos monstros

## Problema

Você está desenvolvendo a funcionalidade de um jogo responsável por adicionar pontos aos monstros de um personagem quando ele passa de fase.

Quando o jogador passa de fase, cada mostro que ele possui ganha 10 pontos de experiência.

## Entrada

A entrada será composta por uma variável:

- `monstros`: arrays de objetos. Cada objeto armazena os dados de monstro que pertencente ao personagem

## Saída

Seu programa deve **RETORNAR** o array de monstros atualizado.

## Exemplos

### Entrada 1

```ts
monstros = [
  {
    nome: "Gárgula",
    forca: 40,
    agilidade: 15,
    experiencia: 1,
  },
  {
    nome: "Kratos",
    forca: 50,
    agilidade: 5,
    experiencia: 11,
  },
  {
    nome: "Saci",
    forca: 2,
    agilidade: 170,
    experiencia: 70,
  },
];
```

### Saída 1

```ts
monstros = [
  {
    nome: "Gárgula",
    forca: 40,
    agilidade: 15,
    experiencia: 11,
  },
  {
    nome: "Kratos",
    forca: 50,
    agilidade: 5,
    experiencia: 21,
  },
  {
    nome: "Saci",
    forca: 2,
    agilidade: 170,
    experiencia: 80,
  },
];
```

### Explicação 1

Como monstro ganhou 10 pontos de experiência.

</details>

<details>

<summary>[Difícil] Exercício 05</summary>

# Aluguel de imóveis

## Problema

Você trabalha para uma empresa de aluguel de imóveis e precisa de um sistema que permita ao usuário filtrar os anúncios de acordo com um limite de preço.

## Entrada

A entrada será composta por duas variáveis:

- `anuncios`: array de objetos. Cada objeto armazena as propriedades `titulo`, `descricao` e `preco` de um imóvel anunciado
- `precoMaximo`: number que armazena o valor máximo de aluguel que o usuário está disposto a pagar

## Saída

Seu programa deve **RETORNAR**:

- A lista de imóveis cujo valor do aluguel é no máximo o valor informado pelo usuário
- `NAO ENCONTRADO`: caso nenhum imóvel possua o valor de aluguel dentro do limite informado pelo usuário

## Exemplos

### Entrada 1

```ts
anuncios = [
  {
    titulo: "Apartamento Reformado",
    descricao: "Apartamento confortável e seguro",
    preco: 3000,
  },
  {
    titulo: "Casa Branca",
    descricao: "Casa com 3 quartos e 2 banheiros",
    preco: 1500.67,
  },
  {
    titulo: "Apartamento com piscina",
    descricao: "Apartamento confortável, com piscina, sauna e churrasqueira",
    preco: 5600,
  },
  {
    titulo: "Casa com 4 quartos",
    descricao: "A casa possui 4 quartos, 2 banheiros e uma sala de estar",
    preco: 2900,
  },
  {
    titulo: "Kitnet",
    descricao: "Kitnet aconchegante, com lareira e banheira privada",
    preco: 4325,
  },
];
precoMaximo = 3500;
```

### Saída 1

```ts
[
  {
    titulo: "Apartamento Reformado",
    descricao: "Apartamento confortável e seguro",
    preco: 3000,
  },
  {
    titulo: "Casa Branca",
    descricao: "Casa com 3 quartos e 2 banheiros",
    preco: 1500.67,
  },
  {
    titulo: "Casa com 4 quartos",
    descricao: "A casa possui 4 quartos, 2 banheiros e uma sala de estar",
    preco: 2900,
  },
];
```

### Explicação 1

A saída corresponde aos imóveis anunciados com valor do aluguel de no máximo 3500 reais.

</details>
