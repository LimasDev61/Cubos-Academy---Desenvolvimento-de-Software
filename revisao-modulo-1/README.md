# Revisão M01 DDS T20

## Pequeno Príncipe

### Contexto

O livro O Pequeno Príncipe é conhecido por apresentar ao leitor frases bonitas e marcantes. Uma delas é:

Se tu vens, por exemplo, às quatro da tarde, desde às três eu começarei a ser feliz.

Essa frase pode ser interpretada de várias maneiras. Um matemático, por exemplo, poderia interpretar, de uma forma absurdamente racional e exata, que a pessoa começa a ser feliz a exatamente uma hora antes da outra que ela está aguardando chegar.

Seguindo essa lógica, crie um programa que, ao receber a hora (sempre inteira) em que uma pessoa chegará, mostre a hora que a pessoa que está aguardando começará a ser feliz.

### Entrada

A entrada do problema será sempre composta por uma variável:

- `horaChegada` do tipo inteiro. Essa é a hora que a pessoa chegará.

### Saída

Você deve retornar a hora em que a pessoa que está aguardando começa a ser feliz.

### Exemplos

#### Entrada 01

13

#### Saída 01

12

#### Explicação 01

Como a pessoa chegará às 13h, a pessoa que está aguardando começará a ser feliz a partir de 12h.

## Períodos Históricos

### Contexto

Como forma de facilitar o estudo, podemos dividir a história da humanidade em quatro grandes períodos, também chamados de "Idades". São eles:

- Idade antiga: vai de 4000 anos a.C., até a queda do Império Romano do Ocidente, em 476 da era cristã;
- Idade média: tem início depois de 476 e vai até a tomada de Constantinopla, pelos turcos otomanos, em 1453;
- Idade moderna: tem início depois de 1453 e vai até o ano de 1789, data da Revolução Francesa;
- Idade contemporânea: tem início após 1789 até os dias atuais.

Crie um programa que ao receber um ano retorne qual o período da história aquele ano se refere.

### Entrada

A entrada do problema será sempre composta por um variável:

- `ano` do tipo inteiro. Essa variável armazena o valor do ano que está sendo analisado.

### Saída

Você deve retornar qual o período da história o ano está inserido:

- ANTIGA se o ano está entre -4000 (4000 a.C.) e 476;
- MEDIA se o ano está entre 477 e 1453;
- MODERNA se o ano está entre 1454 e 1789;
- CONTEMPORANEA se o ano está após 1789.

### Exemplos

#### Entrada 01

-3000

#### Saída 01

ANTIGA

#### Explicação

O ano analisado está entre -4000 e 476.

## Aprovação rigorosa

### Contexto

Uma escola resolveu implementar um sistema de aprovação mais rigoroso. Para que um aluno seja aprovado e passe de ano ele deve:

- Ter uma média mínima de 60 pontos, frequência mínima de 75% e não ter zerado o projeto final ou
- Apesar de não ter obtido média mínima de 60, o aluno deve ter uma frequência mínima de 75% e ter obtido uma nota no projeto final de no mínimo 85 pontos.

Você deve criar um programa que verifique se um aluno está ou não aprovado de acordo com sua média, sua frequência e a nota que ele obteve no projeto final.

### Entrada

A entrada do problema será sempre composta por três variáveis:

- `media` do tipo number. Essa variável armazena o valor da média do aluno analisado;
- `frequencia` do tipo number. Essa variável armazena a frequência, em porcentagem, do aluno analisado;
- `projetoFinal` do tipo number. Essa variável armazena o valor da nota obtida no projeto final do aluno analisado.

### Saída

Você deve retornar:

- APROVADO caso o aluno tenha sido aprovado;
- REPROVADO caso o aluno tenha sido reprovado.

### Exemplos

#### Entrada 01

80 74 78

#### Saída 01

REPROVADO

#### Explicação 01

Apesar do aluno ter obtido uma média igual a 80 e uma nota no projeto final igual a 78, ele não obteve 75% de frequencia.

#### Entrada 02

55 90 98

#### Saída 02

APROVADO

#### Explicação 02

Apesar do aluno não ter obtido uma média mínima de 60 pontos, ele alcançou a frequência mínima e tirou a nota mínima exigida no projeto final.

## Saúde Pública

### Contexto

O Índice de Massa Corporal, conhecido como IMC, é um importante indicador utilizado por médicos e nutricionistas para analisar o estado de pacientes.

Segundos pesquisadores da USP, em um artigo chamado Importância relativa do Índice de Massa Corporal e da circunferência abdominal na predição da hipertensão arterial, o IMC pode ajudar a identificar pacientes com hipertensão arterial, doença popularmente conhecida como "pressão alta". Eles mostram que:

- Aproximadamente 16% dos pacientes com IMC menor que 25 têm pressão alta;
- Aproximadamente 31% dos pacientes com IMC entre 25 e 29 têm pressão alta;
- Aproximadamente 59% dos pacientes com IMC maior que 29 têm pressão alta.

Para facilitar o estudo, esses pacientes podem ser divididos em classe:

- Classe A: pacientes com aproximadamente 16% de chance de ter pressão alta;
- Classe B: pacientes com aproximadamente 31% de chance de ter pressão alta;
- Classe C: pacientes com aproximadamente 59% de chance de ter pressão alta.

Um consultório médico deseja saber a quantidade aproximada de pacientes que possuem pressão alta seguindo o estudo acima. A seguinte fórmula é usada para isso:

$quantidade = (quantidade ~ de ~ classe ~ A) . 0,16 + (quantidade ~ de ~ classe ~ B) . 0,31 + (quantidade ~ de ~ classe ~ C) . 0,59$

Você foi contratado para que, dado valores de IMCs, retorne a quantidade provavel de pacientes que têm pressão alta. Você não precisa se preocupar com números não inteiros, ou seja, pode ser que o cálculo dê, por exemplo, 18.5 pacientes.

### Entrada

A entrada do seu programa será sempre um array numérico chamado de `imcs` em que cada um de seus elementos é um IMC coletado de um paciente.

### Saída

Seu programa deve retornar a provavel quantidade de pacientes, dentre os analisados, que têm pressão alta.

### Exemplos

#### Entrada 01

12 35 23 10 21 27 28

#### Saída 01

1.85

#### Explicação 01

Temos 4 pacientes da classe A, 2 da classe B e 1 da classe C. Portanto, a quantidade de pacientes que provavelmente têm pressão alta é 4 x 0.16 + 2 x 0.31 + 1 x 0.59 = 1.85.
