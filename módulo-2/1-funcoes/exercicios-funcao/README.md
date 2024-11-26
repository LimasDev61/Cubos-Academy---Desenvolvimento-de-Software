# Funções

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

# Novo Saldo

## Problema

Você está desenvolvendo uma aplicação que ajuda o usuário a ter o controle dos seus gastos.

## Tarefa

Você deve criar uma função chamada `calcularNovoSaldo` que recebe dois parâmetros:

- `saldoAtual`: do tipo number que contém o saldo atual do usuário
- `valor`: do tipo number que contém o valor do saque, caso seja negativo, ou do depósito, caso seja positivo

Sua função deve **RETORNAR** o novo saldo do usuário.

Para evitar erros de implementação, você deve tipar as entradas e o retorno da função.

## Detalhes

A função deve ser implementada dentro do arquivo chamado `novoSaldo.ts`, que se encontra dentro da pasta `src/exercicio-01`, e acima da linha

```ts
export default calcularNovoSaldo;
```

Essa linha não deve ser deletada.

</details>

<details>
<summary>[Fácil] Exercício 02</summary>

# Boas-vindas

## Problema

Você está desenvolvendo a funcionalidade, em uma aplicação que está trabalhando, que mostra uma mensagem de boas-vindas aos novos usuários cadastrados.

## Tarefa

Você deve criar uma função chamada `mostrarBoasVindas` que recebe um parâmetros:

- `nome`: do tipo string, que contém o nome do usuário recém cadastrado

Sua função **NÃO DEVE RETORNAR NADA**, ela deve apenas **MOSTRAR NA TELA** a mensagem

```
BEM-VINDO, NOME_DO_NOVO_USUARIO
```

Para evitar erros de implementação, você deve tipar as entradas e o retorno da função.

## Detalhes

A função deve ser implementada dentro do arquivo chamado `mostrarBoasVindas.ts`, que se encontra dentro da pasta `src/exercicio-02`, e acima da linha

```ts
export default mostrarBoasVindas;
```

Essa linha não deve ser deletada.

</details>

<details>
<summary>[Médio] Exercício 03</summary>

# Moeda inválida

## Problema

Você foi contratado para desenvolver um programa que verifica se uma moeda inserida em uma máquina de lanches é válida ou não.

Essa máquina possui uma câmera que tira uma foto da moeda inserida, passa essa foto por um algoritmo de visão computacional (programa que imita a capacidade humana de enxergar) e esse algoritmo te entrega qual o valor da moeda inserida.

## Tarefa

Você deve criar uma função chamada `verificarValidade` que recebe dois parâmetros:

- `valorLido`: do tipo number, que contém o valor identificado pelo algoritmo de visão computacional
- `valoresValidos`: um array numérico que contém os valores de moedas válidas

Sua função deve **RETORNAR**

- `true`: se o valor identificado for um dos valores de moedas válidas
- `false`: caso contrário

Para evitar erros de implementação, você deve tipar as entradas e o retorno da função.

## Detalhes

A função deve ser implementada dentro do arquivo chamado `verificarValidade.ts`, que se encontra dentro da pasta `src/exercicio-03`, e acima da linha

```ts
export default verificarValidade;
```

Essa linha não deve ser deletada.

</details>

<details>
<summary>[Difícil] Exercício 04</summary>

# Sorteio

## Problema

Você está desenvolvendo um programa que irá premiar com um carro a pessoa que tiver comprado a cartela com o número sorteado.

## Tarefa

Você deve criar uma função chamada `verificarPremiado`, que recebe como parâmetro duas variáveis

- `numeroSorteado`: do tipo number, que contém o número sorteado
- `pessoasConcorrendo`: um array de objetos, que contém os dados das pessoas que estão concorrendo ao sorteio. Cada objeto deste array possui duas propriedades:
  - `nome`: do tipo string, que contém o nome da pessoa
  - `numeroCartela`: do tipo number, que contém o número da cartela comprada

Sua função deve **RETORNAR**:

- o nome da pessoa, caso alguém tenha ganhado
- `undefined`, caso ninguém tenha ganhado (o número sorteado não foi encontrado em nenhuma das cartelas)

Para evitar erros de implementação, você deve tipar as entradas e o retorno da função.

**DICA:** crie um tipo "pessoa".

## Detalhes

A função deve ser implementada dentro do arquivo chamado `verificarPremiado.ts`, que se encontra dentro da pasta `src/exercicio-04`, e acima da linha

```ts
export default verificarPremiado;
```

Essa linha não deve ser deletada.

## Exemplos

### Entrada 1

```ts
numeroSorteado = 3;
pessoasConcorrendo = [
  { nome: "Ana", numeroCartela: 4 },
  { nome: "João", numeroCartela: 1 },
  { nome: "Pedro", numeroCartela: 3 },
  { nome: "Maria", numeroCartela: 2 },
  { nome: "Lucas", numeroCartela: 5 },
];
```

### Saída 1

"Pedro"

### Explicação 1

Pedro comprou a cartela de número 3, que for a sorteada.

### Entrada 2

```ts
numeroSorteado = 7;
pessoasConcorrendo = [
  { nome: "Ana", numeroCartela: 4 },
  { nome: "João", numeroCartela: 1 },
  { nome: "Pedro", numeroCartela: 3 },
  { nome: "Maria", numeroCartela: 2 },
  { nome: "Lucas", numeroCartela: 5 },
];
```

### Saída 1

`undefined`

### Explicação 1

O número sorteado foi o 7, e ninguém comprou a cartela com esse número.

</details>
