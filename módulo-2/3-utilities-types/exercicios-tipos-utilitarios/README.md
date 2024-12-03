# Tipos Utilitários

### Instruções para abrir o projeto

1. Faça o fork deste repositório
2. Clone o repositório forkado
3. Abra-o no VS Code

---

---

<details>
<summary>[Fácil] Exercício 01</summary>

## Reaproveitamento de tipos

### Problema

A implementação da função `cadastrarUsuário` utiliza o tipo `Usuario` para definir a estrutura necessária para cadastrar um usuário. Em uma outra função, que será implementada futuramente, haverá a necessidade de receber os dados do usuário da mesma forma que foi passada no cadastro, exceto a propriedade `rg`, com todos os demais campos obrigatórios.

Para que o tipo atual não seja modificado, visto que o tipo `Usuario` já esta sendo utilizado, utilize os tipos utilitários para criar um outro tipo de acordo com essa nova regra.

Não é necessário transpilar o código.

</details>

<details>
<summary>[Fácil] Exercício 02</summary>

## Tipo para carrinho de compra

### Problema

No arquivo `tipoCarrinhoCompra.ts`, dentro da pasta referente à essa questão, foi implementado um tipo para ser usado nas funções que fazem a gestão do carrinho de compras de um site. Porém, a estrutura do tipo não tinha o endereço de entrega, e a propriedade `tipoTransacao`, que tem um tipo literal, precisa ser padronizada para que aceite apenas caracteres minúsculos.

Como precisamos manter a integridade do projeto e o tipo já foi usado em outras funções no projeto, implemente um novo tipo, partindo do atual, e adicione uma propriedade `endereco`, que receberá um objeto com o formato abaixo. Manipule o tipo da propriedade `tipoTransacao` para aceitar apenas caracteres minúsculos.

- cep
- rua
- bairro
- cidade
- estado

Não é necessário transpilar o código.

</details>

<details>

<summary>[Fácil] Exercício 03</summary>

## Restringindo retorno de função

### Problema

A função `conexao` do arquivo `conexao.ts`, presente na pasta referente a este exercício, monta o objeto para conexão com o banco de dados Postgres e retorna o objeto formatado. O problema é que do jeito que foi implementada, quando a função é chamada e atribuída a uma variável, o objeto pode ser modificado.

Modifique a função para que ela não permita modificar o objeto criado após a chamada da função.

Não é necessário transpilar o código.

</details>
