# Desafio de Lógica Módulo 02

Nome completo: Renan Alves da Silva Lima DDST-20

### Instruções para entrega

1. Faça o fork deste repositório
2. Clone o repositório forkado
3. Abra-o no VS Code
4. Resolva o desafio
5. Atualize o repositório remoto com o código (`git push`)
6. Abra um pull request
7. Cole o link do seu pull request na plataforma

### Instruções para rodar o projeto

1. Use o comando `npm install` no seu terminal para instalar as dependências necessárias para rodar o projeto
2. Caso deseje, use o arquivo `index.ts`, que se encontra dentro da pasta _src_, para testar os códigos usados para resolver os exercícios
3. Use o comando `npm run start` no terminal para rodar o código do arquivo `index.ts`
4. Quando estiver satisfeito com o código, passe-o para o arquivo _.ts_ que se encontra dentro da pasta com o número da questão que está resolvendo. Todas as resoluções devem ser colocadas dentro da função `solucao`
5. Caso ainda não tenha feito, baixe a extensão _Code Runner_
6. Com o arquivo _.ts_ da questão aberto, clique em "Run Code" para submeter a questão

### Como saber sua nota

Rode o comando `npm run test` para saber qual a sua NOTA FINAL, em porcentagem, no desafio.

**CUIDADO! A nota mostrada é referente a todas as questões do desafio. Ou seja, se o desafio estiver sendo liberado por partes, a nota mostrada não reflete a sua nota parcial.**

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
<summary>[Variáveis] Exercício 01</summary>

# Conversão de temperatura

## Problema

O Calor é a energia transferida de um corpo para o outro quando existe diferença de temperatura. Já temperatura é a medida de agitação das moléculas (pequenas partes que compõe um corpo).

Quando dois ou mais corpos atingem a mesma temperatura dizemos que eles estão em equilíbrio térmico. Podemos então comparar estes objetos para fazer medidas. É assim que funciona o termômetro.

Existem diversas escalas de temperatura. As mais conhecidas são Celsius, Fahrenheit e Kelvin.

William Tomson, conhecido como Lord Kelvin, estudando o comportamento do gases, descobriu a menor temperatura que um corpo poderia atingir, que seria equivalente a -273°C. A partir daí determinou o ponto zero de sua escala. Criou assim o que chamamos de escala absoluta.

A conversão de graus Celsius para Kelvin é dada pela fórmula

$kelvin = celsius + 273$

## Entrada

A entrada será composta por uma variável:

- `celsius`: variável do tipo number que armazena uma temperatura medida em graus Celsius

## Saída

Seu programa deve **RETORNAR** a temperatura convertida para Kelvin.

## Exemplos

### Entrada 1

```ts
celsius = 10;
```

### Saída 1

283

### Explicação 1

10 graus celsius corresponde à 273 + 10 = 283 kelvins.

</details>

<details>
<summary>[Variáveis] Exercício 02</summary>

# Mercado de Câmbio

## Problema

O mercado de câmbio, também conhecido como mercado Forex (Foreign Exchange), é onde as moedas são negociadas. Funciona de forma descentralizada, o que significa que não há uma única bolsa central onde todas as transações ocorrem. Em vez disso, o mercado de câmbio é composto por uma rede global de bancos, instituições financeiras, corretoras e traders que compram e vendem moedas.

Os participantes do mercado compram uma moeda e vendem outra simultaneamente, esperando que o valor da moeda comprada aumente em relação à moeda vendida.

O resultado (lucro ou prejuízo) de uma operação pode ser calculado como

$resultado = (preco ~ na ~ venda - preco ~ na ~ compra) \cdot valor ~ investido$

Se o valor for positivo, o investidor teve lucro; se negativo, prejuízo.

Você está desenvolvendo um programa para calcular o resultado de uma operação realizada nesse mercado.

## Entrada

A entrada será composta por três variáveis:

- `precoVenda`: variável do tipo _number_ que armazena qual o valor pago na venda
- `precoCompra`: variável do tipo _number_ que armazena qual o valor pago na compra
- `valorInvestido`: valor que foi investido

## Saída

Seu programa deve **RETORNAR** o resultado da operação realizada.

## Exemplos

### Entrada 1

```ts
precoVenda = 6.5;
precoCompra = 6.4;
valorInvestido = 1000;
```

### Saída 1

100

### Explicação 1

O lucro foi de

lucro = $(6.5 - 6.4) \cdot 1000 = 0.1 \cdot 1000 = 100$

### Entrada 2

```ts
precoVenda = 3;
precoCompra = 3.5;
valorInvestido = 1000;
```

### Saída 1

-500

### Explicação 1

O prejuízo foi de

prejuízo = $(3 - 3.5) \cdot 1000 = 0.5 \cdot 1000 = -500$

</details>

<details>

<summary>[Condicionais] Exercício 03</summary>

# Criptografia

## Problema

Quando um usuário faz cadastro em um sistema ou quando ele decide atualizar sua senha, é realizada uma criptografia, que é a conversão de texto simples legível por humanos em texto incompreensível. Essa prática protege as senhas dos usuários contra acesso não autorizado por parte de invasores. Mesmo que o banco de dados (local onde a senha criptografada fica armazenada) seja comprometido, as senhas não podem ser facilmente decifradas.

Você está desenvolvendo a parte do programa responsável pelo login do usuário. Essa funcionalidade é responsável por comparar a senha digitada pelo usuário com a senha criptografada que vem do banco de dados.

A criptografia usada no projeto é simples. Para criptografar a senha é adicionado ao início e ao fim a palavra "cubos". Por exemplo, se a senha escolhida pelo usuário for "1234", a senha criptografada é "cubos1234cubos".

## Entrada

A entrada será composta por duas variáveis:

- `senhaDigitada`: string que armazena a senha digitada pelo usuário no momento da tentativa de login
- `senhaCriptografada`: string que armazena a senha criptografada que vem do banco de dados

## Saída

Seu programa deve **RETORNAR**:

- `LOGIN NAO AUTORIZADO`: caso a senha não esteja correta
- `LOGIN AUTORIZADO`: caso a senha esteja correta

## Exemplos

### Entrada 1

```ts
senhaDigitada = "cruzeiro";
senhaCriptografada = "cuboscruzeirocubos";
```

### Saída 1

"LOGIN AUTORIZADO"

### Explicação 1

Veja que a senha criptografada é composta por:

"cubos" + `SENHA` + "cubos"

Comparando essa estrutura com a senha criptografada que veio no banco de dados, temos:

"cubos" + "cruzeiro" + "cubos"

Portanto, a senha digitada é igual à senha cadastrada no banco de dados sem a criptografia (descriptografada).

</details>

<details>
<summary>[Condicionais] Exercício 04</summary>

# Programa fidelidade

## Problema

Um programa de fidelidade em um supermercado oferece descontos aos clientes com base na quantidade total de pontos acumulados. A política de descontos é a seguinte:

- Se um cliente acumular menos de 100 pontos, não receberá nenhum desconto.
- Se um cliente acumular de 100 a 500 pontos, receberá um desconto de 10% em suas compras.
- Se um cliente acumular mais de 500 pontos, receberá um desconto de 20% em suas compras.

Escreva um programa que calcule o valor total da compra com base na política de desconto do programa de fidelidade.

O valor total da compra é calculado como

$valor ~ total = valor ~ compra - desconto \cdot valor ~ compra$

## Entrada

A entrada será composta por duas variáveis:

- `pontosAcumulados`: number que armazena quantos pontos o cliente acumulou no programa de fidelidade
- `valorCompra`: valor da compra sem o desconto

**OBS: 10% corresponde a 0.1, e 20% corresponde a 0.2. Esses são os valores que você deve usar no cálculo**

## Saída

Seu programa deve **RETORNAR** o valor total da compra (valor com o desconto aplicado).

## Exemplos

### Entrada 1

```ts
pontosAcumulados = 600;
valorCompra = 500;
```

### Saída 1

400

### Explicação 1

O cliente acumulou 600 pontos, o que corresponde a um desconto de 20% (0.2). Sendo assim, ele pagará

$valor ~ total = 500 - 0.2 \cdot 500 = 500 - 100 = 400$

### Entrada 2

```ts
pontosAcumulados = 150;
valorCompra = 100;
```

### Saída 2

90

### Explicação 2

O cliente acumulou 150 pontos, o que corresponde a um desconto de 10% (0.1). Sendo assim, ele pagará

$valor ~ total = 100 - 0.1 \cdot 100 = 100 - 10 = 90$

</details>

<details>
<summary>[Arrays] Exercício 05</summary>

# Vendas semanais

## Problema

Você trabalha como desenvolvedor para uma rede de lojas e está desenvolvendo uma funcionalidade para calcular o valor total das vendas realizadas durante uma semana.

## Entrada

A entrada será composta por uma variável:

- `vendasDiarias`: array de number em que cada posição armazena o total de vendas realizadas em um dia da semana

## Saída

Seu programa deve **RETORNAR** o valor total das vendas na semana.

## Exemplos

### Entrada 1

```ts
vendasDiarias = [150.5, 200.25, 180.75, 220, 190.8, 210.3, 250.6];
```

### Saída 1

1403.20

### Explicação 1

O total de vendas na semana é de

$total = 150.5 + 200.25 + 180.75 + 220 + 190.8 + 210.3 + 250.6 = 1403.20$

</details>

<details>
<summary>[Arrays] Exercício 06</summary>

# Desempenho de investimento

## Problema

Um analista financeiro está analisando o desempenho de uma carteira de investimentos ao longo do tempo. Ele tem uma lista de retornos diários sobre o investimento armazenados em um array. Ele deseja determinar se a carteira obteve um desempenho positivo ou negativo durante o período de análise. Escreva um programa que o ajude a determinar isso.

## Entrada

A entrada será composta por uma variável:

- `resultados`: array de number em que cada posição armazena o lucro (número positivo), prejuízo (número negativo) ou neutro (zero) de uma determinada carteira ao longo do tempo

## Saída

Seu programa deve **RETORNAR**:

- `POSITIVO`: se a quantidade de lucros for maior que a quantidade de prejuízos
- `NEGATIVO`: se a quantidade de prejuízos for maior que a quantidade de lucros
- `NEUTRO`: se a quantidade de lucros for igual à quantidade de prejuízos

## Exemplos

### Entrada 1

```ts
resultados = [0.02, -0.01, 0.03, -0.005, 0.01, -0.02];
```

### Saída 1

"NEUTRO"

### Explicação 1

A carteira analisada teve 3 lucros e 3 prejuízos.

### Entrada 2

```ts
resultados = [0.01, 0.005, -0.003, 0.002, -0.001, 0.004, 0.8, 0];
```

### Saída 1

"POSITIVO"

### Explicação 1

A carteira analisada teve 5 lucros, 2 prejuízos e 1 valor neutro.

</details>

<details>
<summary>[Objetos] Exercício 07</summary>

# Entrega em atraso

## Problema

Você, como desenvolvedor de uma empresa que possui um aplicativo de entregas, está desenvolvendo a funcionalidade que mostra ao usuário se a entrega dele está ou não em atraso.

## Entrada

A entrada será composta por duas variáveis:

- `dadosEntrega`: objeto que possui as propriedades `pedido`, `quantidade` e `estimativaEntrega`, que armazenam, respectivamente, o produto que foi pedido, a quantidade e a estimativa do dia em que a entrega será realizada
- `diaAtual`: variável do tipo number que armazena qual o dia atual

## Saída

Seu programa deve **RETORNAR**:

- `ENTREGA ATRASADA`: caso o dia atual seja posterior ao dia estimado para a entrega
- `ENTREGA NAO ATRASADA`: caso o dia atual seja anterior ou igual ao dia estimado para a entrega

## Exemplos

### Entrada 1

```ts
dadosEntrega = {
  pedido: "TV LED 24 polegadas",
  quantidade: 2,
  estimativaEntrega: 10,
};
diaAtual = 11;
```

### Saída 1

"ENTREGA ATRASADA"

### Explicação 1

A entrega estava prevista para o dia 10, e o dia atual é 11. Ou seja, a entrega está com um dia em atraso.

</details>

<details>
<summary>[Objetos] Exercício 08</summary>

# Despacho de mala

## Problema

Você, como desenvolvedor de software do aeroporto de Guarulhos, deve desenvolver um programa que mostrará a lista de passageiros que terão que pagar uma taxa imposta sobre malas que pesam mais de 23kg.

## Entrada

A entrada será composta uma variável:

- `dadosPassageiros`: array de objetos. Cada objeto contém o nome e quanto pesa a mala de um determinado passageiro

## Saída

Seu programa deve **RETORNAR**:

- os nomes, separados pelo símbolo `" - "`, ou seja, por um espaço em branco, um traço e outro espaço em branco (veja o exemplo), dos passageiros que terão que pagar a taxa
- `SEM PASSAGEIROS`: caso nenhum dos passageiros tenha que pagar a taxa

## Exemplos

### Entrada 1

```ts
dadosPassageiros = [
  {
    nome: "Passageiro A",
    pesoMala: 25,
  },
  {
    nome: "Passageiro B",
    pesoMala: 10,
  },
  {
    nome: "Passageiro C",
    pesoMala: 24,
  },
  {
    nome: "Passageiro D",
    pesoMala: 22,
  },
  {
    nome: "Passageiro E",
    pesoMala: 40,
  },
];
```

### Saída 1

"Passageiro A - Passageiro C - Passageiro E"

### Explicação 1

Os passageiros A, C e E possuem malas que pesam mais que 23kg.

</details>
