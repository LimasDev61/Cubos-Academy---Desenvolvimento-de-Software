# Métodos de String

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

# E-mail válido

## Problema

Você está desenvolvendo a funcionalidade que verificará se o e-mail digitado pelo usuário no cadastro dos seus dados pessoais é válido.

Para ser um e-mail válido, ele deve conter um caracter "@".

## Entrada

A entrada será composta por uma variável chamada `email`, do tipo string, contendo o e-mail do usuário.

## Saída

Seu programa deve **RETORNAR**:

- `VALIDO`: se o e-mail digitado for válido
- `INVALIDO`: se o e-mail digitado for não válido

## Exemplos

### Entrada 1

```ts
email = "shaolin@cubos";
```

### Saída 1

"VALIDO"

### Explicação 1

O e-mail digitado contém o caracter "@".

</details>

<details>
<summary>[Fácil] Exercício 02</summary>

# Filtro de comentários

## Problema

Assim como o YouTube bloqueia vídeos que citam as palavras "pandemia" ou "covid", uma rede social precisa bloquear qualquer comentário que também possua uma dessas duas palavras.

Você está responsável por desenvolver essa lógica.

**DICA:** para não precisar se preocupar com letras maiúsculas e minúsculas, faça uma transformação na entrada para que ela fique ou toda em maiúscula ou toda em minúscula.

## Entrada

A entrada será composta por uma variável chamada `comentario`, do tipo string, contendo o comentário a ser analisado.

## Saída

Seu programa deve **RETORNAR**:

- `true`: caso o comentário não possua nenhuma dessas palavras
- `false`: caso o comentário possua alguma dessas palavras

## Exemplos

### Entrada 1

```ts
comentario = "Esse COVID é muito perigoso!";
```

### Saída 1

`false`

### Explicação 1

O comentário possui a palavra "COVID".

</details>

<details>
<summary>[Médio] Exercício 03</summary>

# Recuperar a senha

## Problema

Você está desenvolvendo a funcionalidade de recuperação de senha de um sistemas.

Quando o usuário quiser solicitar uma nova senha, ele deve informar se o número do celular cadastrado no sistema ainda corresponde ao número que ele usa. Por motivos de segurança, mostra-se apenas os dois primeiros e os dois últimos dígitos do número cadastrado precedidos de "\*". Por exemplo ao invés de mostrar

```
31012345678
```

será mostrado

```
31*******78
```

## Entrada

A entrada será composta por uma variável chamada `numeroCadastrado`, do tipo string, contendo o número do usuário cadastrado no sistema.

## Saída

Seu programa deve **RETORNAR** o número formadado com os caracteres "\*".

## Exemplos

### Entrada 1

```ts
numeroCadastrado = "32012345678";
```

### Saída 1

"32\*\*\*\*\*\*\*78"

### Explicação 1

A string mostrada ao usuário deve conter apenas os dois primeiros e os dois últimos dígitos do número cadastrado. O restante dos números devem ser substituídos por "\*".

</details>

<details>
<summary>[Médio] Exercício 04</summary>

# Número válido

## Problema

Você está desenvolvendo a funcionalidade que verificará se o número digitado pelo usuário no cadastro do seu endereço é válido.

## Entrada

A entrada será composta por uma variável chamada `endereco`, do tipo string, contendo o endereço do usuário. Essa variável tem a seguinte forma:

```
NOME_DA_RUA, NUMERO_DA_CASA, CIDADE, ESTADO
```

## Saída

Seu programa deve **RETORNAR**:

- `true`: se o número digitado for válido
- `false`: se o número digitado for não válido

## Exemplos

### Entrada 1

```ts
endereco = "Rua Cidade de Alma, 24a, Cidade de Almeirim, AL";
```

### Saída 1

`false`

### Explicação 1

O número digitado, que foi 24a, contém letras. Ou seja, ele não é formado apenas de caracteres numéricos.

</details>

<details>
<summary>[Difícil] Exercício 05</summary>

# CPF válido

## Problema

Você está desenvolvendo a funcionalidade que verificará se o CPF digitado pelo usuário no cadastro dos seus dados pessoais é válido.

Para ser um CPF válido, ele deve:

- conter 11 digítos
- possuir um traço
- depois do traço, deve ter apenas dois digitos.

Ou seja, ele deve ter o seguinte formato

```
XXXXXXXXXX-XX
```

Veja que tem-se 11 dígitos desconsiderando o traço.

## Entrada

A entrada será composta por uma variável chamada `cpf`, do tipo string, contendo o CPF do usuário.

## Saída

Seu programa deve **RETORNAR**:

- `CPF VALIDO`: se o CPF digitado for válido
- `CPF INVALIDO`: se o CPF digitado for não válido

## Exemplos

### Entrada 1

```ts
cpf = "000000000-00";
```

### Saída 1

"CPF VALIDO"

### Explicação 1

O CPF digitado contém 11 dígitos (com exceção do traço), um traço e após o traço tem-se dois números.

### Entrada 2

```ts
cpf = "00000000-000";
```

### Saída 2

"CPF INVALIDO"

### Explicação 2

O CPF digitado contém 11 dígitos (com exceção do traço) e um traço. Porém, após o traço, tem-se três dígitos, tornando-o inválido.

</details>
