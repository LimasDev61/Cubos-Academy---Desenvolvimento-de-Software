# Introdução ao TypeScript

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

# Atualização da pontuação

## Problema

Você foi contratado pela Ubisoft, uma das maiores empresas de desenvolvimento de jogos eletrônicos do mundo, para desenvolver o _Cubos Game_, um novo jogo para Playstation 5.

Foi atribuida a você a tarefa de desenvolver a função responsável por atualizar a pontuação do personagem do jogo.

## Entrada

A entrada do seu programa será composta por duas variáveis:

- `pontuacao`: variável responsável por armazenar a pontuação do jogador
- `pontosConquistados`: variável que armazena quantos pontos o jogador conquistou em uma determinada fase

## Saída

Você deverá **RETORNAR** a nova pontuação do jogador.

## Exemplos

### Entrada 1

`pontuacao = 300`

`pontosConquistados = 10`

### Saída 1

310

### Explicação 1

A pontuação do jogador era 300 e ele conquistou 10 pontos. Portanto, a nova pontuação é de 300 + 10 = 310.

</details>

<details>
<summary>[Fácil] Exercício 02</summary>

# Cálculo da idade

## Problema

O jogo _Cubos Game_, para o qual foi contratado para fazer, só poderá ser jogado por maiores de 16 anos. Sendo assim, será necessário criar uma função que calcule a idade do jogador com base no seu ano de nascimento.

## Entrada

A entrada do seu programa será composta por duas variáveis:

- `anoNascimento`: variável do tipo number que armazena o ano em que o jogador nasceu
- `anoAtual`: variável do tipo number que armazena o ano corrente (atual)

## Saída

Você deve **RETORNAR** a idade do jogador.

**OBS:** Não serão levados em consideração o mês e o dia no cálculo.

## Exemplo

### Entrada 1

`anoNascimento = 1993`

`anoAtual = 2024`

### Saída 1

31

### Explicação 1

A idade será 2024 - 1993 = 31.

</details>

<details>
<summary>[Fácil] Exercício 03</summary>

# Dados do personagem

## Problema

O jogador deverá conseguir mostrar os dados do seu personagem no jogo _Cubos Game_.

## Entrada

A entrada do seu programa será composta por três variáveis:

- `nomePersonagem`: variável do tipo string que armazena o nome do personagem
- `classe`: variável do tipo string que armazena a classe do personagem
- `pontuacao`: variável do tipo number que armazena a pontuação do personagem

## Saída

Você deve **RETORNAR** os dados do personagem no seguinte formato:

`OLÁ, |FULANO|. VOCE É UM |CLASSE| COM PONTUAÇÃO ATUAL DE |PONTUACAO_ATUAL|`

Você deve substituir `|FULANO|`, `|CLASSE|` e `|PONTUACAO_ATUAL|` por, respectivamente, o nome, a classe e a pontuação do jogador.

## Exemplo

### Entrada 1

`nomePersonagem = "Shaolin Matador de Porco"`

`classe = "Mago"`

`pontuacao = 320`

### Saída 1

`OLÁ, Shaolin Matador de Porco. VOCE É UM Mago COM PONTUAÇÃO ATUAL DE 320`

### Explicação 1

Os dados do personagem foram concatenados para ficar no formato pedido.

</details>

<details>
<summary>[Fácil] Exercício 04</summary>

# Bônus por fase

## Problema

Agora vamos desenvolver a parte do jogo _Cubos Game_ responsável por bonificar o jogador que conseguir passar de fase. O bônus funciona da seguinte forma: os pontos do jogador são multiplicados pelo número da fase que ele acabou de passar. Desta forma, quanto mais longe o jogador chega, maior a bonificação. Por exemplo:

- se o jogador tiver passado da Fase 1, a pontuação será multiplicada por 1
- se o jogador tiver passado da Fase 2, a pontuação será multiplicada por 2
- se o jogador tiver passado da Fase 3, a pontuação será multiplicada por 3

e assim por diante.

## Entrada

A entrada do seu programa será composta por duas variáveis:

- `pontucao`: variável do tipo number que armazena os pontos do personagem
- `faseSeguinte`: variável do tipo number que armazena para qual fase o personagem foi

## Saída

Você deve **RETORNAR** a nova pontuação do jogador.

## Exemplo

### Entrada 1

`pontucao = 2000`

`faseSeguinte = 4`

### Saída 1

6000

### Explicação 1

O personagem foi para a Fase 4, o que implica que ele passou da Fase 3. Então, sua pontuação será 2000 x 3 = 6000.

## Dicas

Cuidado! As operações na programação seguem a mesma ordem de resolução da Matemática. Ou seja, primeiramente são feitas multiplicações e divisões, depois somas e subtrações.

</details>

<details>
<summary>[Médio] Exercício 05</summary>

# Preço do conjunto

## Problema

Você foi contratado por uma loja de roupas da sua cidade para desenvolver um sistema de vendas online.

Uma das partes do sistemas, responsável por mostrar ao usuário do site o valor total da compra, depende de um código capaz de calcular o preço gasto pelo usuário em um conjunto de três peças. Essa é a funcionalidade que está desenvolvendo agora.

## Entrada

A entrada do seu programa será composta por quatro variáveis:

- `precoPeca1`: variável do tipo number que armazena o preço de uma das peças do conjunto
- `precoPeca2`: variável do tipo number que armazena o preço de uma das peças do conjunto
- `precoPeca3`: variável do tipo number que armazena o preço de uma das peças do conjunto
- `quantidade`: variável do tipo number que armazena a quantidade de conjuntos que o usuário quer comprar

## Saída

Você deve **RETORNAR** o preço total a ser pago.

## Exemplo

### Entrada 1

`precoPeca1 = 20`

`precoPeca2 = 30`

`precoPeca3 = 50`

`quantidade = 3`

### Saída 1

300

### Explicação 1

O valor do conjuto é dado pelo preço das três peças (20 + 30 + 50 = 100). O cliente comprou 3 conjuntos, o que dá 3 x 100 = 300.

## Dicas

Cuidado! As operações na programação seguem a mesma ordem de resolução da Matemática. Ou seja, primeiramente são feitas multiplicações e divisões, depois somas e subtrações.

</details>

<details>
<summary>[Médio] Exercício 06</summary>

# Quantidade de carne

## Problema

Você está desenvolvendo um programa que calcula a quantidade de carne que deverá ser comprada para o churrasco anual da sua família.

A quantidade de carne é calculada da seguinte forma:

- 100 gramas para cada criança na festa
- 200 gramas para cada pré-adolescente
- 300 gramas para cada adulto

## Entrada

A entrada do seu programa será composta por três variáveis:

- `quantidadeCriancas`: variável do tipo number que armazena a quantidade de crianças confirmadas para a festa
- `quantidadePreAdolescentes`: variável do tipo number que armazena a quantidade de pré-adolescentes confirmados para a festa
- `quantidadeTotal`: variável do tipo number que armazena a quantidade total de pessoas confirmadas para a festa

## Saída

Você deve **RETORNAR** a quantidade de carne estimada, em gramas.

## Exemplo

### Entrada 1

`quantidadeCriancas = 20`

`quantidadePreAdolescentes = 10`

`quantidadeTotal = 100`

### Saída 1

25000

### Explicação 1

A quantidade total de carne é 20 x 100 + 10 x 200 + 70 x 300 = 25000.

</details>

<details>
<summary>[Difícil] Exercício 07</summary>

# Cálculo do IMC

## Problema

Você, como desenvolvedor de software de um grupo farmacéutico, deve implementar uma funcionalidade nova no programa da empresa: o cálculo do Índice de Massa Corporal.

O IMC é cálculado como:

$IMC = \frac{peso}{altura²}$

## Entrada

A entrada do seu programa será composta por duas variáveis:

- `peso`: variável do tipo number que armazena o peso
- `altura`: variável do tipo number que armazena a altura

## Saída

Você deve **RETORNAR** o IMC.

## Exemplo

### Entrada 1

`peso = 100`

`altura = 2`

### Saída 1

25

### Explicação 1

O IMC é:

$IMC = \frac{100}{2²}$ = $\frac{100}{2 \text{x} 2}$ = $\frac{100}{4}$ = 25.

## Dicas

Cuidado! As operações na programação seguem a mesma ordem de resolução da Matemática. Ou seja, primeiramente são feitas multiplicações e divisões, depois somas e subtrações.

</details>
