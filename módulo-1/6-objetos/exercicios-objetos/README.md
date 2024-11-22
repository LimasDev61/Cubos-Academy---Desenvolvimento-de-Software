# Objetos

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
<summary>[Fácil] Exercicio 01</summary>

# Aluno

## Problema

Você foi contratado por uma escola da sua cidade para desenvolver um sistema para armazenar informações dos alunos de uma turma. Esse programa deve receber os dados de um aluno (matrícula, nome e idade) e os armazenar em um objeto.

## Entrada

A entrada será uma variável será composta por três variáveis:

- `matricula`: do tipo string que contém o número da matricula do aluno
- `nome`: do tipo string que contém o nome do aluno
- `idade`: do tipo number que contém a idade do aluno

## Saída

Seu programa deve **RETORNAR** um objeto no seguinte formato:

```js
{
  matricula: "MATRICULA_DO_ALUNO",
  nome: "NOME_DO_ALUNO",
  idade: IDADE_DO_ALUNO
}
```

## Exemplos

### Entrada 1

`matricula = "2014A"`

`nome = "Ana"`

`idade = 20`

### Saída 1

```js
{
  matricula: "2014A",
  nome: "Ana",
  idade: 20
}
```

### Explicação 1

O objeto `{ matricula: "2014A", nome: "Ana", idade: 20 }` contém as informações do aluno.

</details>

<details>
<summary>[Fácil] Exercicio 02</summary>

# Cardápio

## Problema

Você foi contratado por um restaurante para desenvolver um sistema que mostre ao cliente o valor de um prato.

## Entrada

A entrada será formada uma variável chamada `informacoesPrato`, que contém duas propriedades:

- `nome`: do tipo string que contém o nome do prato
- `valor`: do tipo number que contém o valor do prato
- `quantidade`: quantidade daquele prato disponível em estoque

## Saída

Seu programa deve **RETORNAR**:

- o valor do prato: caso tenha algum disponível no estoque
- `PRATO INDISPONIVEL` caso não tenha nenhum prato disponível no estoque

## Exemplos

### Entrada 1

```js
informacoesPrato = {
  nome: "Arroz",
  valor: 15,
  quantidade: 1,
};
```

### Saída 1

15

### Explicação 1

O valor do prato é 15 reais e existe um prato disponível em estoque.

</details>

<details>
<summary>[Fácil] Exercicio 03</summary>

# Aprovação

## Problema

Você está desenvolvendo um programa de avaliação de alunos. O programa deve, a partir dos dados de um aluno consultado (matrícula, nome, média) pelo professor, dizer se ele foi aprovado ou reprovado. Alunos aprovados são aqueles que possuem média de, no mínimo, 6.

## Entrada

A entrada será uma variável será composta por uma variável do tipo objeto, chamada `aluno`, que possue três propriedades:

- `matricula`: do tipo string que contém o número da matricula do aluno
- `nome`: do tipo string que contém o nome do aluno
- `media`: do tipo number que contém a média do aluno

## Saída

Seu programa deve **RETORNAR**:

- `APROVADO`: caso o aluno tenha sido aprovado
- `REPROVADO`: caso o aluno tenha sido reprovado

## Exemplos

### Entrada 1

```js
{
  matricula: "20191IMIM0433",
  nome: "Marcos",
  media: 5.5
}
```

### Saída 1

"REPROVADO"

### Explicação 1

O aluno possui média de 5.5, ou seja, não obteve média mínima para ser aprovado.

</details>

<details>
<summary>[Médio] Exercicio 04</summary>

# Melhor Filme

## Problema

Você está desenvolvendo um sistema em que o usuário seleciona dois filmes que ele deseja assistir e o programa retorna o melhor deles baseado na média das notas que ambos têm no IMDb e Rotten Tomatoes, dois sites especializados em filmes e séries.

O cálculo da média é feito da seguinte forma:

$media = \frac{notaImdb + notaRottenTomatoes}{2}$

## Entrada

Sua entrada será composta de duas variáveis:

- `filme1`: objeto que contém as informações do primeiro filme selecionado pelo usuário
- `filme2`: objeto que contém as informações do segundo filme selecionado pelo usuário

Cada objeto possui duas propriedades:

- `nome`: do tipo string que contém o nome do filme
- `notas`: do tipo array de number que contém, em cada uma de suas posicões, as notas do filme no IMDb e no Rotten Tomatoes

## Saída

Você deve **RETORNAR**:

- o nome do filme com a média das notas mais alta
- `EMPATE`: caso as médias sejam iguais

## Exemplos

### Entrada 1

```js
filme1 = {
  nome: "Batman",
  notas: [9, 10],
};
filme2 = {
  nome: "Harry Potter",
  notas: [8, 8],
};
```

### Saída 1

"Batman"

### Explicação 1

O filme "Batman" possui nota 9 no IMDb e nota 10 no Rotten Tomatoes, enquanto o filme "Harry Potter" possui nota 8 no IMDb e nota 8 no Rotten Tomatoes.

A média das notas do filme Batman é de

$mediaBatman = \frac{9 + 10}{2} = 9.5$

Amédia das notas do filme Harry Potter é de

$mediaHarryPotter = \frac{8 + 8}{2} = 8$

Ou seja, o filme Batman tem a maior média.

</details>

<details>
<summary>[Médio] Exercicio 05</summary>

# Probabilidade de Vitória de um Time

## Problema

Você está desenvolvendo um programa para auxiliá-lo a estimar a probabilidade de vítoria de um determinado time, que pode ser aplicado para qualquer esporte.

Para isso, seu programa recebe um objeto com dados de probabilidades de vitória coletados de vários locais na internet (veículos especializados, casas de apostas, etc).

Para estimar a chance de vitória, você decidiu usar a média das probabilidades encontradas.

O cálculo da média é:

$media = \frac{soma ~ das ~ probabilidades}{total~ de~ dados}$

## Entrada

A entrada será sempre um objeto, denominado `dados`, contendo as seguintes propriedades:

- `time`: do tipo string, que contém o nome do time procurado
- `probabilidades`: do tipo array, que contém as probabilidades coletadas, em porcentagem, da internet

## Saída

Você deverá **RETORNAR**:

- a probabilidade de vítoria do time informado, caso tenha conseguido coletar algum dado
- `DADOS INSUFICIENTES`: caso não tenha conseguido coletar nenhum dado

## Exemplos

### Entrada 1

```js
dados = {
  nome: "Cruzeiro",
  probabilidades: [70, 80, 65, 75, 85],
};
```

### Saída 1

75

### Explicação 1

A probabilidade de vitória do time Cruzeiro é de:

$probabilidade = \frac{70 + 80 + 65 + 75 + 85}{5} = 75$.

### Entrada 2

```js
dados = {
  nome: "Furia",
  probabilidades: [],
};
```

### Saída 1

"DADOS INSUFICIENTES"

### Explicação 1

Nenhum dado foi coletado.

</details>

<details>
<summary>[Difícil] Exercício 06</summary>

# Menor Preço

## Problema

Na tentativa de comprar produtos mais baratos, você está desenvolvendo um programa que coleta dados de um determinado produto na internet e retorna a loja que oferece o menor preço de venda.

## Entrada

A sua entrada é um array de objetos chamado `produtosEncontrados`, em que cada posição do array representa um objeto com as seguintes propriedades:

- `loja`: do tipo string que contém o nome da loja que está oferecendo o produto
- `preco`: do tipo number que contém o preço do produto

## Saída

Você deve imprimir a loja que oferece o produto ao menor preço.

## Exemplo

### Entrada 1

```js
produtosEncontrados = [
  {
    loja: "Loja 1",
    preco: 40.99,
  },
  {
    loja: "Loja 2",
    preco: 20,
  },
  {
    loja: "Loja 3",
    preco: 30,
  },
];
```

### Saída 1

"Loja 2"

### Explicação 1

A Loja 2 oferece o produto a 20 reais, o preço mais barato dentre os encontrados.

</details>
