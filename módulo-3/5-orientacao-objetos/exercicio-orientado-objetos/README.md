# Orientação a Objetos

### Instruções para abrir o projeto

1. Faça o fork deste repositório
2. Clone o repositório forkado
3. Abra-o no VS Code

### Configuração do projeto

Para configurar o projeto, siga os passos abaixo:

- Instale as dependências (`npm install`)
- Se desejar, use o arquivo index.ts para testar seu código (instanciar os objetos, testar os métodos...) e o comando `npm run start` para executar o código dele

<details>
<summary>[Fácil] Exercício 01</summary>

# Loja

Implemente uma classe chamada "Loja" que possua:

- atributos para armazenar o nome e o endereço de uma loja
- método para exibir os dados da loja (sem parâmetros e sem retorno)

#### ⚠️ Importante: tente usar o conceito de encapsulamento, criando todos os atributos privados. Para que seja possível obter e modificar seus valores, caso precise, crie métodos

</details>

<details>
<summary>[Fácil] Exercício 02</summary>

# Conta Bancária

Implemente uma classe chamada “ContaBancária” que possua:

- atributos para armazenar o número da conta (string), nome do titular (string) e saldo (number)
- métodos para realizar depósitos (recebe o valor do depósito e atualiza o saldo) e saques (recebe o valor do saque e atualiza o saldo)

#### ⚠️ Importante: uma pessoa não pode sacar mais do que tem em conta

#### ⚠️ Importante: tente usar o conceito de encapsulamento, criando todos os atributos privados. Para que seja possível obter e modificar seus valores, caso precise, crie métodos

</details>

<details>
<summary>[Médio] Exercício 03</summary>

# Produtos

Implemente uma classe chamada “Produto” que possua:

- atributos para armazenar o nome, o preço e a quantidade em estoque
- métodos para calcular o valor total em estoque (sem parâmetros e rotorna um number) e verificar se o produto está disponível (sem parâmetros e rotorna um boolean)

#### ⚠️ Importante: tente usar o conceito de encapsulamento, criando todos os atributos privados. Para que seja possível obter e modificar seus valores, caso precise, crie métodos

</details>

<details>
<summary>[Difícil] Exercício 04</summary>

# Modificação da Loja

Modifique a classe loja adicionando um atributo para armazenar os produtos presentes nessa loja (lista de produtos). Adicione um método para adicionar um produto à lista (que inicia vazia) e para calcular o valor total em estoque da loja

#### ⚠️ Importante: tente usar o conceito de encapsulamento, criando todos os atributos privados. Para que seja possível obter e modificar seus valores, caso precise, crie métodos

</details>
