# Testes Automatizados

### Instruções para abrir o projeto

1. Faça o fork deste repositório
2. Clone o repositório forkado
3. Abra-o no VS Code

### Instruções para rodar o projeto

Use o comando `npm install` no seu terminal para instalar as dependências necessárias para rodar o projeto

### Dicas

- Faça commits regulares. Dica: faça, pelo menos, um commit ao término de cada uma das questão
- Quando terminar, lembre-se de atualizar seu repositório remoto (`git push`). Lembre-se que seu GitHub será seu portifólio. É sempre bom mantê-lo atualizado e ativo.

---

---

<details>
<summary>[Fácil] Exercício 01</summary>

# resultado de uma venda

## Problema

Você está desenvolvendo uma função que calcula o lucro/prejuízo na venda de um determinado produto com base no preço de compra e no preço de venda dele.

O lucro/prejuízo é calculado da seguinte forma:

$resultadoVenda = precoVenda - precoCompra$

Se o resultado da venda for positivo, a empresa teve lucro; se não, teve prejuízo. Um resultado igual a zero significa que o produto foi vendido a preço de venda.

Você deve implementar a função e os testes unitários que julgar necessários. O nome da função e onde criá-la é uma escolha sua, assim como no caso do teste. Sugere-se que crie uma pasta para isolar suas implementações dos arquivos de configuração do projeto (geralmente chamamos essa pasta de "src").

## Entrada

A entrada será composta por duas variáveis:

- `compra`: variável do tipo number que armazena o preço que a empresa pagou para comprar o produto
- `venda`: variável do tipo number que armazena o preço que a empresa conseguiu vender o produto

## Saída

Seu programa deve **RETORNAR**:

- `O valor do lucro é: VALOR_DO_LUCRO`: caso a empresa tenha tido lucro
- `O valor do prejuízo é: VALOR_DO_PREJUIZO`: caso a empresa tenha tido prejuízo
- `Venda a preço de custo`: caso não tenha dado nem lucro nem prejuízo

## Exemplos

### Entrada 1

```ts
compra = 340.0;
venda = 300.0;
```

### Saída 1

"O valor do prejuízo é: 40"

### Explicação 1

O resultado ao final da venda foi de 300 - 340 = -40. Ou seja, a empresa teve um prejuízo de 40 reais.

**OBS: veja que o valor do prejuízo não é igual ao resultado da venda, pois não colocamos o sinal de negativo**

</details>

<details>
<summary>[Fácil] Exercício 02</summary>

# Checagem de senha

## Problema

Você está desenvolvendo uma função que irá checar se a senha que o usuário está tentando cadastrar no momento da criação de sua conta está dentro do padrão exigido pela empresa. A senha exigida pela empresa deve:

- ter no mínimo 4 caracteres
- só pode conter caracteres numéricos

Você deve implementar a função e os testes unitários que julgar necessários. O nome da função e onde criá-la é uma escolha sua, assim como no caso do teste. Sugere-se que crie uma pasta para isolar suas implementações dos arquivos de configuração do projeto (geralmente chamamos essa pasta de "src").

## Entrada

A entrada será composta por uma variável:

- `senha`: variável do tipo string que armazena a senha digitada pelo usuário

## Saída

Seu programa deve **RETORNAR**:

- `SENHA VALIDA`: se a senha do usuário corresponder ao padrão exigido
- `SENHA INVÁLIDA`: se a senha não corresponder ao padrão exigido

## Exemplos

### Entrada 1

```ts
senha = "123a";
```

### Saída 1

"SENHA INVÁLIDA"

### Explicação 1

Apesar de ter o mínimo de 4 caracteres, a senha não contem apenas caracteres númericos (ela possui um "a")

**Dica: se uma string contiver apenas caracteres númericos, ela pode ser convertida para o tipo number**

</details>

<details>

<summary>[Médio] Exercício 03</summary>

# Validar envio dos dados de cadastro

## Problema

Você está desenvolvendo uma função que verifique se o usuário está passando todos os dados exigidos no cadastro. Quando o usuário tentar se cadastrar no seu sistema, será enviado um objeto, chamado "dados", contendo as propriedades nome, email e senha contendo, respectivamente, o nome digitado, o e-mail digitado e a senha digitada pelo usuário.

Todos os dados são obrigatórios, e sua função deve validar se algum deles não foi passado.

Você deve implementar a função e os testes unitários que julgar necessários. O nome da função e onde criá-la é uma escolha sua, assim como no caso do teste. Sugere-se que crie uma pasta para isolar suas implementações dos arquivos de configuração do projeto (geralmente chamamos essa pasta de "src").

## Entrada

A entrada será composta uma variável:

- `dados`: objeto que armazena nome digitado, o e-mail digitado e a senha digitada

## Saída

Seu programa deve **RETORNAR**:

- `Todos os campos são obrigatórios`: uma mensagem de erro para caso algum campo não tenha sido passado
- `true`: caso todos os campos tiverem sido passados

## Exemplos

### Entrada 1

```ts
dados = {
  nome: "Shaolin",
  email: "monge@gmail.com",
  senha: "1234",
};
```

### Saída 1

true

### Explicação 1

Todos os campos foram passados

### Entrada 2

```ts
dados = {
  nome: "Shaolin",
  senha: "1234",
};
```

### Saída 2

"Todos os campos são obrigatórios"

### Explicação 1

O e-mail não foi passado

</details>
