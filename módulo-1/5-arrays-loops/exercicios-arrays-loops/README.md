# Arrays e Loops

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

# Pódio

## Problema

Você, como desenvolvedor de software do UFC (entidade que organiza torneios de artes maciais mistas), está implementando a funcionalidade do site que será responsável por mostrar ao usuário os três lutadores mais bem rankeados do mundo, ou seja, os três melhores lutadores do mundo.

## Entrada

A entrada será uma variável chamada `rank`, um array de strings que contém os nomes dos lutadores. Esse array está ordenado do melhor ao pior lutador.

## Saída

Seu programa deve **RETORNAR** os três melhores lutadores no seguinte formato

```
"MELHOR_LUTADOR, SEGUNDO_MELHOR, TERCEIRO_MELHOR"
```

ou seja, os nomes devem estar **SEPARADOS POR VÍGULA E UM ESPAÇO EM BRANCO (APENAS UM ESPAÇO) DEPOIS DA VÍRGULA**.

**OBS: Cuidado com a quantidade de espaços em branco entre os nomes, no começo e no final da string**

**DICA: faça a questão por passos. Primeiro, tente pegar o nome do melhor lutador, depois do segundo, depois do terceiro, e só então tente fazer o que é pedido.**

## Exemplos

### Entrada 1

`rank = ["Ana", "Beatriz", "Camila", "Jorgiane", "Maria", "Carla"]`

### Saída 1

"Ana, Beatriz, Camila"

### Explicação 1

Essas são as três melhores lutadoras do mundo, segundo o rank adotado.

</details>

<details>
<summary>[Fácil] Exercicio 02</summary>

# Pior lutador

## Problema

Em outra parte do programa, você, como desenvolvedor de software do UFC (entidade que organiza torneios de artes maciais mistas), deve implementandar a funcionalidade do site que mostrará o pior lutador do mundo segundo o ranking.

## Entrada

A entrada será uma variável chamada `rank`, um array de strings que contém os nomes dos lutadores. Esse array está ordenado do melhor ao pior lutador.

## Saída

Seu programa deve **RETORNAR** o nome do pior lutador.

## Exemplos

### Entrada 1

`rank = ["Ana", "Beatriz", "Camila", "Jorgiane", "Maria", "Carla"]`

### Saída 1

"Carla"

### Explicação 1

A Carla é a última colocada do ranking.

</details>

<details>
<summary>[Fácil] Exercicio 03</summary>

# Número de promotores

## Problema

O NPS (Net Promoter Score) é um índice que mede a satisfação dos clientes com um determinado produto ou serviço. Ele é calculado com base nas respostas a uma única pergunta: Qual é a probabilidade de que você recomendar a nossa empresa / produto / serviço a um amigo ou colega? A pontuação para esta resposta é um número entre 0 a 10.

Aqueles que respondem com uma pontuação de 9 ou 10 são chamados de Promotores, e são considerados propensos a fazer mais referências positivas para outros potenciais clientes.

Aqueles que respondem com uma pontuação de 0 a 6 são rotulados Detratores, e acredita-se ser menos propensos a apresentar comportamentos de criação de valor.

Respostas de 7 ou 8 são rotuladas Passivas ou Neutras e seu comportamento cai no meio de promotores e detratores.

Seu objetivo é fazer um programa que calcule a quantidade de clientes promotores, a partir de um array de números, em que cada item é resposta dada por um cliente para a pergunta citada acima.

## Entrada

A entrada será sempre um array de números chamado `notas` em que cada item é a resposta dada por um cliente à pergunta "Qual é a probabilidade de que você recomendar a nossa empresa / produto / serviço a um amigo ou colega"?

## Saída

Seu programa deve **RETORNAR** a quantidade de clientes que são PROMOTORES.

## Exemplos

### Entrada 1

`notas = [9, 5, 6, 2, 0, 1]`

### Saída 1

1

### Explicação 1

Apenas a pessoa que deu nota 9 é promotora.

</details>

<details>
<summary>[Fácil] Exercicio 04</summary>

# Robô separador de frutas

## Problema

Um robô precisa coletar frutas de uma esteira e colocar numa caixa. Ele usa um sistema de câmeras para identificar quais frutas estão passando.

Você foi contratado pela empresa para realizar a programação deste robô e criar um sistema que mostre aos operadores a quantidade de frutas que o robô coletou. A esteira de frutas é representada por um array em que cada posição armazena uma fruta diferente que passou pela esteira. O robô recebe como parâmetro qual fruta ele deve coletar.

## Entrada

Sua entrada será composta de duas variáveis:

- `frutaColetada`: variável do tipo string que armazena a fruta a ser coletada pelo robô
- `esteira`: array de strings em que cada posição armazena uma fruta que passou pela esteira

## Saída

Você deve **RETORNAR** a quantidade de frutas que o robô coletou.

## Exemplos

### Entrada 1

`frutaColetada = "BANANA"`

`esteira = ["UVA", "ACEROLA", "MANGA", "PERA", "CAJU", "CAJU", "BANANA", "UVA", "LARANJA", "MARACUJA", "MELANCIA"]`

### Saída 1

1

### Explicação 1

A fruta que o robô deveria coletar é a banana. Somente uma banana passou pela esteira.

</details>

<details>
<summary>[Médio] Exercicio 05</summary>

# Sinuca brasileira

## Problema

Sinuca é um esporte de mesa, taco e bolas praticado no Brasil. Popularmente, joga-se com bolas menores e coloridas numeradas de 1 a 15 e o chamado bolão, uma bola branca e maior que as demais.

O jogador deve acertar o bolão com o taco para que ele colida com as demais bolas de forma que elas caiam em um dos 6 buracos localizados nos cantos da mesa, denominados caçapas. Quando isso acontece, diz-se que a bola foi encaçapada, ou seja, caiu na caçapa.

Em uma, das várias maneiras de se jogar, soma-se os números correspondentes às bolas encaçapadas por cada um dos dois competidores. Nessa modalidade, ganha quem tiver a maior soma ao final do jogo.

Sabendo que a soma total das bolinhas na mesa é 120, você deve criar um programa que receba um array de números em que cada item representa o número de uma bola encaçapada pelo jogador A e retorne se o jogador A ganhou, se o jogador B ganhou ou se houve empate.

## Entrada

A entrada será sempre um array de números, denominado `jogadorA`, em que cada item é o número de uma bolinha encaçapada pelo jogador A.

## Saída

Você deverá **RETORNAR** na tela:

- `JOGADOR A GANHOU`: se o jogador A tiver ganhado;
- `JOGADOR B GANHOU`: se o jogador B tiver ganhado;
- `EMPATE`: se tiver ocorrido empate.

## Exemplos

### Entrada 1

`jogadorA = [1, 4, 5, 8, 15, 14]`

### Saída 1

"JOGADOR B GANHOU"

### Explicação 1

Somando-se o número das bolinhas encaçapadas pelo jogador A temos um total de 47. Isso significa que somando-se as bolinhas encaçapadas pelo jogador B teremos um total de 73.

</details>

<details>
<summary>[Médio] Exercício 06</summary>

# Fluxo de um elevador

## Problema

Um engenheiro teve uma ideia para estudar o perfil do público majoritário (que é a maioria) de um determinado shopping. Ele observou que o shopping era dividido em dois departamentos:

- Departamento de jogos;
- Departamento de esportes.

As lojas do primeiro departamento ficavam no primeiro andar; as do segundo departamento, no segundo andar. Para estimar qual departamento é mais visitado, ele decidiu analisar a quantidade de vezes que os botões do elevador eram apertados. Esse elevador possuia 3 botões:

- A1: que vai para o primeiro andar (andar 1);
- A2: que vai para o segundo andar (andar 2);
- E: que vai para o estacionamento.

Você deve implementar a lógica que, a partir de um array que salva os botões apertados, diga se o público daquele shopping é majoritariamente composto por atletas, por pessoas que gostam de vídeo game ou é um público diversificado.

## Entrada

A entrada do problema será sempre composta por um array do tipo string (texto), denominado `botoesApertados`, em que cada posição diz qual botão foi apertado, sendo:

- "A1" que foi apertado o botão que vai para o primeiro andar
- "A2" que foi apertado o botão que vai para o segundo andar
- "E" que foi apertado o botão que vai para o estacionamento

## Saída

Você deve **RETORNAR**:

- `NERD`: caso tenha sido apertado mais vezes o botão de ir para o primeiro andar (andar de jogos);
- `ATLETA`: caso tenha sido apertado mais vezes o botão de ir para o segundo andar (andar de esportes);
- `DIVERSIFICADO`: caso ambos os botões tenham sidos apertados na mesma quantidade.

## Exemplo

### Entrada 1

`botoesApertados = ["A1", "A2", "E", "A1", "A2", "A2", "A1", "A1"]`

### Saída 1

"NERD"

### Explicação 1

O botão que vai para o primeiro andar (A1), o andar de jogos, foi apertado 4 vezes. O botão que vai para o segundo andar (A2), o andar de esportes, foi apertado 3 vezes. Portanto, o público é considerado como NERD.

</details>

<details>
<summary>[Médio] Exercício 07</summary>

# Contador de vogais

## Problema

Você está desenvolvendo a funcionalidade de um programa responsável por detectar um possível erro na escrita de uma palavra. Para isso, sabe-se que TODA palavra da língua portuguesa precisa de pelo menos uma vogal.

## Entrada

A entrada do problema será sempre composta uma string chamada `palavra`. Essa variável corresponde à palavra a ser analisada pela sua funcionalidade.

## Saída

Você deve **RETORNAR**:

- `true`: caso a palavra tenha pelo menos uma vogal
- `false`: caso a palavra não tenha nenhuma vogal (possível erro)

**OBS: as palavras analisadas passam por uma funcionalidade que transforma todas as suas letras em minúsculas. Ou seja, você não precisa se preocupar em verificar vogais maiúsculas.**

## Exemplo

### Entrada 1

`palavra = "jkknmmnlpppwew"`

### Saída 1

true

### Explicação 1

A palavra analisada contém uma vogal (letra "e").

</details>

<details>

<summary>[Difícil] Exercício 08</summary>

# Cálculo de NPS

## Problema

O NPS (Net Promoter Score) é um índice que mede a satisfação dos clientes com um determinado produto ou serviço. Ele é calculado com base nas respostas a uma única pergunta: Qual é a probabilidade de que você recomendar a nossa empresa / produto / serviço a um amigo ou colega? A pontuação para esta resposta é um número entre 0 a 10.

Aqueles que respondem com uma pontuação de 9 ou 10 são chamados de Promotores, e são considerados propensos a fazer mais referências positivas para outros potenciais clientes.

Aqueles que respondem com uma pontuação de 0 a 6 são rotulados Detratores, e acredita-se ser menos propensos a apresentar comportamentos de criação de valor.

Respostas de 7 ou 8 são rotuladas Passivas ou Neutras e seu comportamento cai no meio de promotores e detratores.

O Net Promoter Score (NPS) é calculado subtraindo a porcentagem de clientes Detratores da porcentagem de clientes Promotores. Clientes Passivos ou Neutros contam para o número total de entrevistados, mas não afetam diretamente o resultado líquido global.

Cálculo do NPS:

$NPS = \frac{promotores - detratores}{total} * 100$

Seu papel é fazer um programa que calcule o NPS a partir de um array de números em que cada item é a resposta dada por um cliente para a pergunta citada acima.

## Entrada

A entrada será sempre um array de números chamado `notas`, em que cada item é a resposta dada por um cliente para a pergunta "Qual é a probabilidade de que você recomendar a nossa empresa / produto / serviço a um amigo ou colega?".

## Saída

Você deve **RETORNAR** o NPS calculado para esse conjunto de dados específico.

## Exemplo

### Entrada 1

`notas = [9, 5, 6, 2, 0]`

### Saída 1

-60

### Explicação 1

Como há apenas 1 pessoa promotora, 4 pessoas detratoras, de um total de 5, o NPS = (1 - 4) / 5 que dá o equivalente a -60%.

</details>
