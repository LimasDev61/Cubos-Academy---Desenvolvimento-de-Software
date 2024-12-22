# Métodos de Arrays

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

# Catálogo de Livros

## Problema

Você, como desenvolvedor contratado pela biblioteca pública da sua cidade, está desenvolvendo um sistema de catalogação de livros. Uma das funcionalidades essenciais é a capacidade de inverter a ordem dos livros em uma prateleira.

## Entrada

A entrada será composta por uma variável chamada `livros`, um array de strings contendo os nomes dos livros catalogados na ordem direta.

## Saída

Seu programa deve **RETORNAR**:

- livros na ordem inversa, caso haja algum livro catalogado
- `NENHUM LIVRO ENCONTRADO`: caso não haja nenhum livro catalogado

## Exemplos

### Entrada 1

```ts
livros = ["Harry Potter", "O Senhor dos Anéis", "Crepúsculo", "Percy Jackson"];
```

### Saída 1

```ts
["Percy Jackson", "Crepúsculo", "O Senhor dos Anéis", "Harry Potter"];
```

### Explicação 1

A ordem inversa dos livros é: Percy Jackson, Crepúsculo, O Senhor dos Anjos, Harry Potter.

</details>

<details>
<summary>[Fácil] Exercício 02</summary>

# Verificar CPF Cadastrado

## Problema

Você está implementando a funcionalidade do sistema web que está desenvolvendo que impede que dois usuários sejam cadastrados com o mesmo CPF, já que esse número é único.

## Entrada

A entrada será composta por duas variáveis:

- `cpfsCadastrados`: do tipo array de strings, contendo os CPFs cadastrados no sistema

- `cpfDigitado`: do tipo string, contendo o CPF digitado pelo usuário no momento da tentativa de cadastro no sistema

## Saída

Seu programa deve **RETORNAR**:

- `CPF JA CADASTRADO`: caso o CPF digitado já exista no sistema
- `CADASTRO REALIZADO COM SUCESSO`: caso contrário

## Exemplos

### Entrada 1

```ts
cpfsCadastrados = [
  "731.686.190-86",
  "927.990.600-30",
  "879.929.560-10",
  "221.244.270-08",
  "942.093.460-80",
  "303.445.130-09",
];
cpfDigitado = "563.398.460-92";
```

### Saída 1

"CADASTRO REALIZADO COM SUCESSO"

### Explicação 1

Não existe nenhum outro usuário cadastrado com o mesmo CPF que o digitado.

</details>

<details>
<summary>[Médio] Exercício 03</summary>

# Agendamento de pacientes

## Problema

Você trabalha como desenvolvedor de software para uma clínica médica. No momento, você está desenvolvendo a funcionalidade do sistema responsável pelo cancelamento de agendamentos de consultas.

## Entrada

A entrada será composta por duas variáveis:

- `agenda`: array de strings que armazena os nomes dos pacientes agendados
- `cancelamento`: string contendo o nome do paciente que deseja cancelar o agendamento

## Saída

Seu programa deve **RETORNAR**:

- Agenda atualizada sem o nome do paciente que solicitou o cancelamento, caso o paciente tenha sido agendado
- `PACIENTE NAO AGENDADO`: caso o paciente não tenha sido agendado

## Exemplos

### Entrada 1

```ts
agenda = ["Ana", "Beatriz", "Carol", "Daniel", "Eduardo"];
cancelamento = "Carol";
```

### Saída 1

```ts
["Ana", "Beatriz", "Daniel", "Eduardo"];
```

### Explicação 1

A Carol solicitou o cancelamento e ela estava agendada.

### Entrada 2

```ts
agenda = ["Ana", "Beatriz", "Carol", "Daniel", "Eduardo"];
cancelamento = "Roberto";
```

### Saída 2

"PACIENTE NÃO AGENDADO"

### Explicação 2

O Roberto solicitou o cancelamento, mas ele não estava agendado.

</details>

<details>
<summary>[Médio] Exercício 04</summary>

# Fila ou pilha

## Problema

Você está desenvolvendo um sistema de gerenciamento de pedidos para um restaurante movimentado. Para atender às diferentes necessidades do restaurante, esse sistema precisa suportar o armazenamento dos pedidos dos clientes tanto uma uma fila (primeiro a pedir e o primeiro a ser atendido) quanto em uma pilha (o último a pedir e o primeiro a ser atendido).

## Entrada

A entrada será composta por três variáveis:

- `pedidoSolicitado`: objeto contendo os dados do novo pedido (nome do cliente, nome do prato e quantidade)
- `pedidos`: array de objetos contendo todos pedidos cadastrados na ordem em que deve ser atendidos
- `tipoDeAtendimento`: string contendo como o pedido deve ser cadastrado (pilha ou fila)

## Saída

Seu programa deve **RETORNAR** o novo array de pedidos.

**OBS:** Observe que caso o tipo de atendimento seja `pilha`, o pedido solicitado deve ser inserido na primeira posição do array pedidos (essa pessoa terá prioridade para ser atendida); caso seja `fila`, deve ser inserido na última posição.

## Exemplos

### Entrada 1

```ts
pedidoSolicitado = {
  nomeCliente: "Thiago",
  nomePrato: "Feijoada",
  quantidade: 2,
};
pedidos = [
  {
    nomeCliente: "Amanda",
    nomePrato: "Arroz",
    quantidade: 4,
  },
  {
    nomeCliente: "Jacinto",
    nomePrato: "Macarrão",
    quantidade: 1,
  },
  {
    nomeCliente: "Guilherme",
    nomePrato: "Frango assado",
    quantidade: 2,
  },
];
tipoDeAtendimento = "pilha";
```

### Saída 1

```ts
[
  {
    nomeCliente: "Thiago",
    nomePrato: "Feijoada",
    quantidade: 2,
  },
  {
    nomeCliente: "Amanda",
    nomePrato: "Arroz",
    quantidade: 4,
  },
  {
    nomeCliente: "Jacinto",
    nomePrato: "Macarrão",
    quantidade: 1,
  },
  {
    nomeCliente: "Guilherme",
    nomePrato: "Frango assado",
    quantidade: 2,
  },
];
```

### Explicação 1

Como a forma de inserção é `pilha`, o pedido solicitado será inserido na primeira posição do array.

</details>

<details>

<summary>[Difícil] Exercício 05</summary>

# Cadastro de usuários

## Problema

Você está desenvolvendo a funcionalidade de cadastro de um novo usuário.

Uma regra de negócio a ser verificada é que dois usuários não podem ter o mesmo e-mail. Sendo assim, antes de efetuar o cadastro do usuário no sistema, você deve verificar se o e-mail digitado por ele é válido.

## Entrada

A entrada será composta por duas variáveis:

- `usuariosCadastrados`: array de objetos. Cada objeto contém as propriedades `nome`, `email` e `senha`
- `novoUsuario`: objeto contendo as propriedades `nome`, `email` e `senha`, formado pelo nome, email e senha digitados pelo usuário

## Saída

Seu programa deve **RETORNAR**:

- A nova lista de usuários cadastrados, caso o e-mail seja válido
- `E-MAIL INVALIDO`: se o número digitado já pertencer a outro usuário cadastrado no sistema

## Exemplos

### Entrada 1

```ts
usuariosCadastrados = [
  {
    nome: "Ana",
    email: "ana@gmail.com",
    senha: "123456",
  },
  {
    nome: "Paula",
    email: "p.antunies@al.com",
    senha: "121236",
  },
  {
    nome: "Pedro",
    email: "pedro@gmail.com",
    senha: "9u9rn3nf4",
  },
  {
    nome: "Lucas",
    email: "lc@hotmail.com",
    senha: "revrvretgs",
  },
  {
    nome: "João",
    email: "joao@outlook.com",
    senha: "0in8h834c0",
  },
];
novoUsuario = {
  nome: "Augusta Catarina",
  email: "ana@gmail.com",
  senha: "2251213",
};
```

### Saída 1

"E-MAIL INVALIDO"

### Explicação 1

O e-mail "ana@gmail.com" pertence a outro usuário cadastrado, a Ana.

</details>
