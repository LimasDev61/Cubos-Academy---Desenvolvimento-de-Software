# Métodos de Arrays 3

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

# Ordenação por preços

## Problema

Você está desenvolvendo a funcionalidade de um site responsável por filtrar os produtos por preço.

## Entrada

A entrada será composta por duas variáveis:

- `precos`: array de number contendo os preços dos produtos anunciados pelo site
- `filtroPreco`: string que mostra o tipo de filtro que o usuário deseja. Os possíveis valores são "crescente" ou "decrescente", caso o usuário deseje, respectivamente, ordenar os preços de forma crescente ou decrescente.

## Saída

Seu programa deve **RETORNAR** a lista de preços ordenada.

## Exemplos

### Entrada 1

```ts
precos = [40, 35, 9, 402, 44.1];
filtroPreco = "decrescente";
```

### Saída 1

```ts
[402, 44.1, 40, 35, 9];
```

### Explicação 1

Os preços foram ordenados de forma decrescente.

</details>

<details>
<summary>[Fácil] Exercício 02</summary>

# Ordem alfabética

## Problema

Você foi contratado para desenvolver o site de uma escola da sua cidade. Uma das funcionalidades necessárias é a de mostrar os alunos em ordem alfabética.

## Entrada

A entrada será composta por duas variáveis:

- `listaAlunos`: array de strings que contém os nomes dos alunos da escola
- `ordemAlfabetica`: booleano que indica se o usuário deseja (true) ou não (false) mostrar os alunos em ordem alfabética

## Saída

Seu programa deve **RETORNAR** a lista de alunos em ordem alfabética, caso a variável `ordemAlfabetica` seja true; ou a lista na ordem original, caso a variável `ordemAlfabetica` seja false.

## Exemplos

### Entrada 1

```ts
listaAlunos = ["Lucas", "Camila", "Taís", "Carla", "Ana"];
ordemAlfabetica = true;
```

### Saída 1

```ts
["Ana", "Camila", "Carla", "Lucas", "Taís"];
```

### Explicação 1

O usuário deseja mostrar os alunos em ordem alfabética (`ordemAlfabetica = true`).

</details>

<details>

<summary>[Médio] Exercício 03</summary>

# Imóveis

## Problema

Você trabalha para uma empresa de aluguel de imóveis e precisa de um sistema que permita ao usuário listar os anúncios em ordem crescente de acordo com o valor do aluguel (do mais barato ao mais caro).

## Entrada

A entrada será composta por uma variável:

- `anuncios`: array de objetos. Cada objeto armazena as propriedades `titulo`, `descricao` e `preco` de um imóvel anunciado

## Saída

Seu programa deve **RETORNAR**:

- `NAO ENCONTRADO`: caso a lista de imóveis esteja vazia
- A lista de imóveis em ordem crescente de acordo com o valor do aluguel

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
```

### Saída 1

```ts
[
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
  {
    titulo: "Apartamento Reformado",
    descricao: "Apartamento confortável e seguro",
    preco: 3000,
  },
  {
    titulo: "Kitnet",
    descricao: "Kitnet aconchegante, com lareira e banheira privada",
    preco: 4325,
  },
  {
    titulo: "Apartamento com piscina",
    descricao: "Apartamento confortável, com piscina, sauna e churrasqueira",
    preco: 5600,
  },
];
```

### Explicação 1

A saída corresponde aos imóveis anunciados apresentados em ordem crescente de acordo com os valores dos aluguéis.

</details>

<details>
<summary>[Difícil] Exercício 04</summary>

# Maiores campeões

## Problema

Você trabalha como desenvolvedor de software para a FIFA, entidade que rege o futebol no mundo. Uma das funcionalidades que está desenvolvendo é a de mostrar, de forma ordenada, os times que mais ganharam títulos em seus respectivos países.

## Entrada

A entrada será composta por duas variáveis:

- `times`: array de objetos contendo informações dos times. Cada objeto armazena as seguintes propriedades: "nome", "pais" e "quantidadeTitulos", que representam, respectivamente, o nome do time, o país ao qual o time pertence e a quantidade de títulos que ele possui
- `paisFiltrado`: string que indica o país do time que o usuário deseja consultar

## Saída

Seu programa deve **RETORNAR** os times do país desejado em ordem decrescente de quantidades de títulos. Caso não seja encontrado nenhum time do país desejado, seu programa deve retornar "NAO ENCONTRADO".

## Exemplos

### Entrada 1

```ts
times = [
  {
    nome: "Time 1",
    pais: "Brasil",
    quantidadeTitulos: 5,
  },
  {
    nome: "Time 2",
    pais: "Brasil",
    quantidadeTitulos: 3,
  },
  {
    nome: "Time 3",
    pais: "França",
    quantidadeTitulos: 1,
  },
  {
    nome: "Time 4",
    pais: "Espanha",
    quantidadeTitulos: 20,
  },
  {
    nome: "Time 5",
    pais: "Espanha",
    quantidadeTitulos: 3,
  },
  {
    nome: "Time 6",
    pais: "França",
    quantidadeTitulos: 0,
  },
  {
    nome: "Time 7",
    pais: "Espanha",
    quantidadeTitulos: 20,
  },
  {
    nome: "Time 8",
    pais: "Argentina",
    quantidadeTitulos: 1,
  },
  {
    nome: "Time 9",
    pais: "França",
    quantidadeTitulos: 9,
  },
];
paisFiltrado = "França";
```

### Saída 1

```ts
[
  {
    nome: "Time 9",
    pais: "França",
    quantidadeTitulos: 9,
  },
  {
    nome: "Time 3",
    pais: "França",
    quantidadeTitulos: 1,
  },
  {
    nome: "Time 6",
    pais: "França",
    quantidadeTitulos: 0,
  },
];
```

### Explicação 1

O usuário filtrou por times da França e eles estão sendo retornados em ordem decrescente de títulos.

</details>
