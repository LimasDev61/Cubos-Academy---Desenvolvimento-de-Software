# Condicionais

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

# Presa ou predador

## Problema

Em uma reportagem de 2016, a revista Veja cita as principais características que indicam se um animal é presa ou predador. Uma delas, segundo a revista, é que as presas costumam ter os olhos nos lados da cabeça, o que oferece um amplo ângulo de visão.

Martin Banks, professor de óptica da Universidade de Berkeley, diz o seguinte:

“A primeira necessidade desses animais (presas) é detectar predadores. Por isso, desenvolveram uma visão panorâmica com poucos pontos cegos”.

Você foi contratado pelo grupo de pesquisadores que desenvolveram essa pesquisa para criar um programa que diga se um animal é presa ou predador.

## Entrada

A entrada do seu programa é composta de uma variável do tipo booleana chamada `olhosNasLaterais`, que indica se o animal analisado tem ou não olhos nas laterais da cabeça. O valor de true significa que o animal tem olhos nas laterais; false, que não tem.

## Saída

Seu programa deve **RETORNAR**:

- `PRESA`: se o animal tiver olhos nas laterais da cabeça

- `PREDADOR`: se não tiver olhos nas laterais da cabeça

## Exemplos

### Entrada 1

`olhosNasLaterais = true`

### Saída 1

"PRESA"

### Explicação 1

O animal possui olhos nas laterais da cabeça e, portanto, é uma presa.

</details>

<details>
<summary>[Fácil] Exercicio 02</summary>

# Jogo de carta de batalha da Cubos

## Problema

A Cubos Academy criou um simples jogo de batalha de cartas que funciona da seguinte forma:

1. Cada jogador possui uma carta monstro na mão, que mostra a força que aquele monstro possui;
2. Vence o jogo o jogador que possui o monstro mais forte;
3. Caso as forças sejam iguais, há um empate.

Você deve criar um programa que implemente a lógica acima.

## Entrada

A entrada do problema será sempre composta por 2 variaveis:

- `monstro1` do tipo number. Essa é a força do monstro do jogador 1
- `monstro2` do tipo number. Essa é a força do monstro do jogador 2

## Saída

Você deve **RETORNAR**:

- `JOGADOR 1 GANHOU`: caso o jogador 1 tenha ganhado;
- `JOGADOR 2 GANHOU`: caso o jogador 2 tenha ganhado;
- `EMPATE`: caso o jogo tenha terminado empatado.

## Exemplos

### Entrada 1

`monstro1 = 34`

`monstro1 = 55`

### Saída 1

"JOGADOR 2 GANHOU"

### Explicação 1

A força do monstro do jogador 2, que é de 55, é maior que a do monstro do jogador 1, que é de 34.

</details>

<details>
<summary>[Fácil] Exercicio 03</summary>

# Períodos históricos

## Problema

Como forma de facilitar o estudo, podemos dividir a história da humanidade em quatro grandes períodos, também chamados de "Idades". São eles:

- Idade antiga: vai de 4000 anos a.C., até a queda do Império Romano do Ocidente, em 476 da era cristã;
- Idade média: tem início depois de 476 e vai até a tomada de Constantinopla, pelos turcos otomanos, em 1453;
- Idade moderna: tem início depois de 1453 e vai até o ano de 1789, data da Revolução Francesa;
- Idade contemporânea: tem início após 1789 até os dias atuais.

Crie um programa que ao receber um ano retorne qual o período da história aquele ano se refere.

## Entrada

A entrada do problema será sempre composta por um variável no do tipo inteiro chamada `ano`. Essa variável armazena o valor do ano que está sendo analisado.

## Saída

Você deve **RETORNAR** na tela qual o período da história o ano está inserido:

- `ANTIGA`: se o ano estiver no período da idade antiga
- `MEDIA`: se o ano estiver no período da idade média
- `MODERNA`: se o ano estiver no período da idade moderna
- `CONTEMPORANEA`: se o ano estiver no período da idade comtemporânea

## Exemplos

### Entrada 1

`ano = -3000`

### Saída 1

"ANTIGA"

### Explicação 1

O ano analisado está entre -4000 e 476, período que corresponde à idade antiga.

</details>

<details>
<summary>[Fácil] Exercício 04</summary>

# Dupla de prova

## Problema

Uma escola resolveu implementar um sistema de provas no qual a última prova de cada matéria é feita em dupla. A escola espera que isso ajude os alunos que estão indo mal a não desistirem.

Para não prejudicar os bons alunos, a escola decidiu que a diferença entre as notas dos dois alunos da dupla deveria ser menor que 1.5 pontos, pois, desta forma, a dupla estaria equilibrada com estudantes que estão com rendimentos próximo. Isso evitaria que algum aluno que estivesse com nota alta tivesse que fazer dupla com algum com nota muito baixa.

Você foi contratado pela escola para implementar o programa que indique aos professores se a dupla que eles estão formando é ou não válida de acordo com critério estabelecido acima.

## Entrada

A entrada do seu programa será composta por duas variáveis:

- `nota1`: variável do tipo number que armazena a nota de um aluno da dupla
- `nota2`: variável do tipo number que armazena a nota do outro aluno da dupla

## Saída

Você deve **RETORNAR**:

- `DUPLA VALIDA`: se a diferença entre as notas for menor que 1.5
- `DUPLA INVALIDA`: caso contrário

## Exemplo

### Entrada 1

`nota1 = 10`

`nota2 = 8`

### Saída 1

"DUPLA INVALIDA"

### Explicação 1

A diferença entre as notas é de 10 - 8 = 2. Ou seja, a dupla é inválida.

</details>

<details>

<summary>[Fácil] Exercício 05</summary>

# Temperatura ideal da cerveja

## Problema

Você foi contratado pela Cubos Beer Bar, um bar da Cubos destinado a pessoas que gostam de consumir cervejas.

Em uma reportagem de 2018, a Super Abril destaca que, por causa diversos fatores, dentre eles a diferença entre as cervejas, "não existe uma única temperatura ideal" para elas. Nessa reportagem, ela também destaca alguns tipos de cervejas e as respectivas temperaturas ideais de o consumo:

- Cerveja pilsen: de 0 a 4 ºC;

- Cerveja de trigo: 4 a 6 ºC;

- Cerveja IPA: de 7 a 10 ºC.

Você deve criar um programa que identifique se uma determinada cerveja que será servida a um cliente está na temperatura ideal para consumo.

## Entrada

A entrada do seu programa será comporta por duas variáveis:

- `cerveja`: variável do tipo string que armazena o tipo da cerveja que será servida ao cliente. Essa variável pode assumir os seguintes valores: `pilsen`, `trigo` ou `ipa`

- `temperatura`: variável do tipo number que armazena a temperatura da cerveja que será servida ao cliente

## Saída

Você deve **RETORNAR** na tela:

`TEMPERATURA IDEAL`: caso a cerveja a ser servida esteja na temperatura ideal;

`TEMPERATURA NAO IDEAL`: caso a cerveja a ser servida NÃO esteja na temperatura ideal.

## Exemplo

### Entrada 1

`cerveja = ipa`

`temperatura = 7`

### Saída 1

"TEMPERATURA IDEAL"

### Explicação 1

A cerveja a ser servida é do tipo IPA e, portanto, a temperatura ideal está entre 7 e 10 ºC. A temperatura da cerveja é de 8 ºC e, portanto, é ideal.

</details>

<details>
<summary>[Médio] Exercício 06</summary>

# Controle de caixa de um ônibus

## Problema

Você foi contratado pela empresa de ônibus da sua cidade para desenvolver um programa para automatizar o processo de controle de caixa diário dos ônibus.

Todos os dias, um responsável deve entrar em cada ônibus e:

1. Ver quantas pessoas passaram pela roleta, número registrado por um sistema presente no próprio dispositivo;

2. Contar a quantidade de dinheiro no caixa;

3. Calcular, com base nesses valores e no preço da passagem, se está tudo certo com o caixa.

O valor esperado em caixa é obtido por:

$valorEsperado = (númeroPessoasPassaramPelaRoleta) x (valorPassagem)$.

## Entrada

A entrada do seu programa será composta por 3 variáveis:

- `marcacaoRoleta`: variável do tipo number que armazena a quantidade de pessoas que passaram pela roleta
- `quantidadeCaixa`: variável do tipo number que armazena a quantidade de dinheiro no caixa
- `precoPassagem`: variável do tipo number que armazena o preço da passagem de ônibus

## Saída

Você deve **RETONRAR**:

- `TUDO CERTO`: caso o dinheiro em caixa seja igual ao dinheiro esperado
- `DINHEIRO SOBRANDO`: caso o dinheiro em caixa seja maior que o esperado
- `DINHEIRO FALTANDO`: caso o dinheiro em caixa seja menor que o esperado

## Exemplo

### Entrada 1

`marcacaoRoleta = 45`

`quantidadeCaixa = 257`

`precoPassagem = 5.70`

### Saída 1

"DINHEIRO SOBRANDO"

### Explicação 1

A quantidade de dinheiro esperada, de acordo com a quantidade de passageiros que passaram pela roleta e pelo preço da passagem, é de 45 x 5,70 = 256,50. Como a quantidade de dinheiro em caixa é de 257, temos R$ 0,50 a mais.

</details>

<details>
<summary>[Médio] Exercício 07</summary>

# Aprovação rigorosa

## Problema

Uma escola resolveu implementar um sistema de aprovação mais rigoroso. Para que um aluno seja aprovado e passe de ano ele deve:

Ter uma média mínima de 60 pontos, frequência mínima de 75% e não ter zerado o projeto final ou
Apesar de não ter obtido média mínima de 60, o aluno deve ter uma frequência mínima de 75% e ter obtido uma nota no projeto final de no mínimo 85 pontos.

Você deve criar um programa que verifique se um aluno está ou não aprovado de acordo com sua média, sua frequência e a nota que ele obteve no projeto final.

## Entrada

A entrada do problema será sempre composta por três variáveis:

- `media`: variável do tipo number. Essa variável armazena o valor da média do aluno analisado;
- `frequencia`: variável do tipo number. Essa variável armazena a frequência, em porcentagem, do aluno analisado;
- `projetoFinal`: variável do tipo number. Essa variável armazena o valor da nota obtida no projeto final do aluno analisado.

## Saída

Você deve **RETONRAR**:

- `APROVADO`: caso o aluno tenha sido aprovado
- `REPROVADO`: caso o aluno tenha sido reprovado

## Exemplo

### Entrada 1

`media = 80`

`frequencia = 74`

`projetoFinal = 78`

### Saída 1

"REPROVADO"

### Explicação 1

Apesar do aluno ter obtido uma média igual a 80 e uma nota no projeto final igual a 78, ele não obteve 75% de frequencia.

### Entrada 2

`media = 55`

`frequencia = 90`

`projetoFinal = 98`

### Saída 2

"APROVADO"

### Explicação 2

Apesar do aluno não ter obtido uma média mínima de 60 pontos, ele alcançou a frequência mínima e tirou a nota mínima exigida no projeto final.

</details>

<details>

<summary>[Difícil] Exercício 08</summary>

# Placar de vôlei

## Problema

Você ficou responsavel por fazer uma atualização no software que controla um placar de um ginásio de vôlei. No vôlei de quadra, um set se encerra quando um dos times atinge pelo menos 25 pontos e tem pelo menos 2 pontos de vantagem sobre o adversário. Seu papel é, a partir do placar de um set do jogo, informar se:

- e o time A venceu o set
- Se o time B venceu o set
- Se o time A está vencendo o set (mas ainda não venceu)
- Se o time B está vencendo o set (mas ainda não venceu)
- Se o jogo está empatado

## Entrada

A entrada será sempre composta por duas variáveis:

- `pontosA`: variável numérica que armazena a quantidade de pontos o time A fez no set até o momento
- `pontosB`: variável numérica que armazena a quantidade de pontos o time B fez no set até o momento

## Saída

Você deverá **RETONRAR** apenas um dos quatro status possíveis:

- `TIME A VENCEU O SET`: caso o time A tenha vencido o set
- `TIME B VENCEU O SET`: caso o time B tenha vencido o set
- `TIME A VENCENDO`: caso o time A esteja vencendo o set, mas ainda não tenha vencido
- `TIME B VENCENDO`: caso o time B esteja vencendo o set, mas ainda não tenha vencido
- `JOGO EMPATADO`: caso o jogo esteja empatado

## Exemplo

### Entrada 1

`pontosA = 3`

`pontosB = 0`

### Saída 1

"TIME A VENCENDO"

### Explicação 1

O time A já venceu pois atingiu pelo menos 25 pontos e pelo menos dois de vantagem.

### Entrada 2

`pontosA = 25`

`pontosB = 23`

### Saída 2

"TIME A VENCEU O SET"

### Explicação 2

O time A está vencendo. Ainda não venceu pois, apesar de ter feito mais de 25 pontos, ainda não atingiu pelo menos 2 de vantagem.

</details>
