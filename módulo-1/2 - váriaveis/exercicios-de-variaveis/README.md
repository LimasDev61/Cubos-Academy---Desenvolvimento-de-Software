# Variáveis

### Instruções para abrir o projeto

1. Faça o fork deste repositório
2. Clone o repositório forkado
3. Abra-o no VS Code

### Instruções para rodar o projeto

1. Use o comando `npm install` no seu terminal para instalar as dependências necessárias para rodar o projeto
2. Caso deseje, use o arquivo `index.js`, que se encontra dentro da pasta _src_, para testar os códigos usados para resolver os exercícios
3. Use o comando `npm run start` no terminal para rodar o código do arquivo `index.ts`
4. Quando estiver satisfeito com o código, passe-o para o arquivo _.js_, que se encontra dentro da pasta com o número da questão que está resolvendo. Todas as resoluções devem ser colocadas dentro das funções `solucao`
5. Caso ainda não tenha feito, baixe a extensão _Code Runner_
6. Com o arquivo _.js_ da questão aberto, clique em "Run Code" para submeter a questão

### Principais erros

1. Você não deve atribuir valores às entradas da função `solucao`. É comum criarmos essas variáveis para testar o código, mas não se esqueça de deletá-las ao passar o código para a função `solucao`
2. Você deve usar o `return` em todos os exercícios que pedem para RETORNAR algo
3. Atente-se ao retorno. Você deve retornar exatamente o que é pedido. Por exemplo:
   - caso esteja pedindo para retornar uma soma, você deve retornar APENAS a soma, e não "A soma é: VALOR_DA_SOMA"
   - caso esteja pedindo para retornar "OLA, MUNDO", você NÃO deve retornar "Olá, mundo", ou " Olá, mundo", ou "Olá, mundo ". Atente-se coma a quantidade de espaços, com o tipo da letra (maíusculas ou minúsculas) e com a acentuação.

### Dicas

- Faça commits regulares. Uma dica é fazer um, pelo menos, ao término de uma questão.
- Ao terminar, lembre-se de atualizar seu repositório remoto (`git push`). Lembre-se que seu GitHub será seu portifólio. É sempre bom mantê-lo atualizado e ativo.

---

---

<details>
<summary>[Fácil] Exercício 01</summary>

# Pontuação no ENEM

## Problema

Você foi contratado pelo MEC para trabalhar no SiSU (Sistema de Seleção Unificada), sistema do governo usado para que os alunos que fizeram o ENEM possam submeter suas candidaturas para vagas em universidades pelo Brasil.

Você está responsável por desenvolver a funcionalidade do sistema que calcula a soma das notas do candidato.

## Entrada

A entrada do seu programa será composto por quatro variáveis:

- `linguagens`: variável do tipo number que armazena a nota que o candidato tirou na área de linguagens, códigos e suas tecnologias
- `humanas`: variável do tipo number que armazena a nota que o candidato tirou na área ciências humanas e suas tecnologias
- `natureza`: variável do tipo number que armazena a nota que o candidato tirou na área de ciências da natureza e suas tecnologias
- `matematica`: variável do tipo number que armazena a nota que o candidato tirou na área de matemática e suas tecnologias

## Saída

Você deverá **RETORNAR** a soma das notas do candidato.

## Exemplos

### Entrada 1

`linguagens = 500`

`humanas = 500`

`natureza = 800`

`matematica = 400`

### Saída 1

2200

### Explicação 1

A nota do candidato é 500 + 500 + 800 + 400 = 2200.

</details>

<details>
<summary>[Fácil] Exercício 02</summary>

# Balança desbalanceada

## Problema

Você está desenvolvendo o programa que será colocado em uma balança eletrônica. Essa balança funciona da seguinte maneira:

- Ela possui dois pratos. Em um deles você coloca o que está querendo pesar e no outro a balança vai adicionando pesos até que entre em equilíbro (os pratos estejam na mesma altura), conforme a imagem abaixo.

<img src="./assets/esquemaBalanca.png" style="width: 300px">

Sabe-se que por um erro na fabricação o prato onde a balança coloca os pesos de forma controlada pesa 0,15 kg a mais que o outro.

Seu programa deve retornar o peso do objeto com base na quantidade de peso colocado pela balança até que o equilíbrio seja atingido.

## Entrada

A entrada do seu programa será composta por uma variável chamada `pesoAdicionado`, variável do tipo number que armazena quantos quilos a balança adicionou em um dos pratos para que o equilíbrio fosse atingido.

## Saída

Você deve **RETORNAR** o peso, em quilograma, do objeto pesado.

## Exemplo

### Entrada 1

`pesoAdicionado = 15`

### Saída 1

15.15

### Explicação 1

Como o prato onde a balança adiciona pesos tem 0,15kg a mais, esse valor deve ser levado em consideração.

</details>

<details>
<summary>[Fácil] Exercício 03</summary>

# Quantidade de cerca

## Problema

Você foi contratado para desenvolver um programa que calcule a quantidade de arrame necessária para cercar um terreno.

Os terrenos possuem forma retangular. A quantidade de arrame necessária é dada por

$Quantidade = comprimento * 2 + largura * 2$

## Entrada

A entrada do seu programa será composta por duas variáveis:

- `comprimento`: variável do tipo number que armazena o comprimento do terreno
- `largura`: variável do tipo number que armazena a largura do terreno

## Saída

Você deve **RETORNAR** a quantidade de arrame necessária para cercar o terreno.

## Exemplo

### Entrada 1

`comprimento = 20`

`largura = 15`

### Saída 1

70

### Explicação 1

A quantidade total de arrame para cercar em relação ao comprimento é de 20 x 2 = 40; em relação à largura é de 15 x 2 = 30. Portanto, a quantidade total é de 40 + 30 = 70.

</details>

<details>
<summary>[Médio] Exercício 04</summary>

# Desconto de uma compra

## Problema

Você foi contratado por uma loja de roupas da sua cidade para desenvolver um sistema de vendas online.

Uma das partes do sistemas, de sua responsabilidade o desenvolvimento, é o cálculo do desconto.

O preço de um produto com o desconto é dado por

$precoFinal = precoSemDesconto - precoSemDesconto * valorDesconto$

## Entrada

A entrada do seu programa será composta por duas variáveis:

- `preco`: variável do tipo number que armazena o preço da compra de um cliente sem o desconto
- `valorDesconto`: variável do tipo number que armazena o desconto, **em porcentagem**, que será dado ao cliente

## Saída

Você deve **RETORNAR** o preço a ser pago com o desconto.

## Exemplo

### Entrada 1

`preco = 10`

`desconto = 30`

### Saída 1

7

### Explicação 1

O valor do deconto é de 10 x 0,3 = 3. Portanto, o preço com o desconto é de 10 - 3 = 7.

## Dicas

Para transformar um valor de porcentagem para um valor decimal, basta dividir o valor em porcentagem por 100.

</details>

<details>
<summary>[Médio] Exercício 05</summary>

# Gerenciamento de estoque

## Problema

Você, como desenvolvedor de uma loja de açaí, deve desenvolver uma funcionalidade para o sistema de gerenciamento de estoque que retorne verdadeiro (true) caso a loja esteja precisando comprar mais produto ou falso (false), caso contrário.

A loja faz o pedido de mais produtos quando a quantidade de litros de açaí está abaixo de 40.

## Entrada

A entrada do seu programa será composta por uma variável chamada `quantidadeAcai`, do tipo number e que armazena a quantidade de açaí em estoque.

## Saída

Você deve **RETORNAR** _true_, caso a empresa deva fazer compras, ou \*false, caso contrário.

## Exemplo

### Entrada 1

`quantidadeAcai = 50`

### Saída 1

false

### Explicação 1

A quantidade de açaí está acima do mínimo aceitável, que é 40.

### Entrada 2

`quantidadeAcai = 30`

### Saída 2

true

### Explicação 2

A quantidade de açaí está abaixo do mínimo aceitável, que é 40.

</details>

<details>
<summary>[Difícil] Exercício 06</summary>

# Quantidade de times completos

## Problema

Você está desenvolvendo um programa para auxiliar no cálculo da quantidade de times que poderão ser formados em uma "pelada" (futebol) de final de semana que você participa com base no número de pessoas e na quantidade de jogadores que deverão entrar em campo em cada time.

Seu programa deve ser capaz de dizer quantas pessoas ficarão sem time.

## Entrada

A entrada do seu programa será composta por duas variáveis:

- `quantidadePessoas`: variável do tipo number que armazena a quantidade de pessoas que vão participar da pelada
-
- `quantidadeDeJogadoresEmCadaTime`: variável do tipo number que armazena a quantidade de jogadores que cada time vai ter

## Saída

Você deve **RETORNAR** a quantidade de pessoas que ficarão sem time.

## Exemplo

### Entrada 1

`quantidadePessoas = 23`

`quantidadeDeJogadoresEmCadaTime = 5`

### Saída 1

3

### Explicação 1

Como 23 pessoas participarão da pelada que terá 5 jogadores em cada time, teremos 20/5 = 4 times completos e sobram 3 pessoas sem time.

### Entrada 2

`quantidadePessoas = 40`

`quantidadeDeJogadoresEmCadaTime = 4`

### Saída 2

0

### Explicação 2

Como 40 pessoas participarão da pelada que terá 4 jogadores em cada time, teremos 40/4 = 10 times completos e sobram 0 pessoas sem time. Ou seja, não ficará ninguém sem time.

</details>

<details>
<summary>[Difícil] Exercício 07</summary>

# Quantidade de tinta

## Problema

Você está desenvolvendo um programa para auxíliar pintores a estimarem a quantidade de tinta que deve ser comprada para pintar uma parede retangular.

A área (A) de um retângulo é dada por

$A = comprimento * largura$

E a quantidade de tinta é dada por

$quantidadeTinta = A * rendimento$

## Entrada

A entrada do seu programa será composta por duas variáveis:

- `comprimento`: variável do tipo number que armazena o comprimento da parede
- `largura`: variável do tipo number que armazena a altura da parede
- `redimento`: variável do tipo number que armazena o rendimento da tinta a ser usada na pintura. Esse rendimento é dado em $\frac{litros}{metros²}$. Ou seja, quantos litros são necessários para pintar 1m².

## Saída

Você deve **RETORNAR** a quantidade de tinta necessária para pintar a parede analisada.

## Exemplo

### Entrada 1

`comprimento = 10`

`largura = 20`

`redimento = 40`

### Saída 1

8000

### Explicação 1

A área da parede é de 10 x 20 = 200. A quantidade de tinta necessária é igual a área x rendimento, ou seja, 200 x 40 = 8000

</details>
