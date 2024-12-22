// Definindo um tipo para a função que verifica se um nome existe na lista de strings
type TAarray = (list: string[], name: string) => boolean;
// Aqui, estamos criando um tipo `TAarray`, que define a assinatura de uma função que recebe dois parâmetros:
// uma lista de strings (`list: string[]`) e um nome específico (`name: string`), e retorna um valor booleano (`boolean`).
// Essa função irá verificar se o nome existe na lista.

// Definindo um tipo para os objetos que representam uma pessoa, contendo nome e email
type TObject = { nome: string; email: string };
// Definimos o tipo `TObject`, que é a estrutura de um objeto que contém duas propriedades: `nome` e `email`.
// Ambos são do tipo `string`.

// Definindo um tipo para a função que verifica se uma pessoa com nome e email especificados existe no array de objetos
type TObjectParam = (param: TObject[], pessoa: TObject) => boolean;
// Aqui, estamos criando um tipo `TObjectParam`, que define a assinatura de uma função que recebe dois parâmetros:
// 1. `param: TObject[]` - um array de objetos do tipo `TObject` (ou seja, um array de pessoas, onde cada pessoa tem nome e email);
// 2. `pessoa: TObject` - um objeto que representa uma pessoa com nome e email, que será utilizado para realizar a comparação.
// A função deve retornar um valor booleano (`boolean`), indicando se a pessoa especificada está no array de pessoas.

// Função para verificar se um nome existe em uma lista de strings
const indexIncludes: TAarray = (list, name) => {
  // A função `indexIncludes` recebe um array de nomes (`list`) e um nome específico (`name`).
  // Ela utiliza o método `includes` do JavaScript para verificar se o nome fornecido existe no array.
  return list.includes(name);
  // Se o nome for encontrado no array, a função retorna `true`, caso contrário, retorna `false`.
};

// Função para verificar se existe uma pessoa com o nome e email específicos no array de objetos
const existsNameAndEmail: TObjectParam = (param, pessoa) => {
  // A função `existsNameAndEmail` recebe dois parâmetros:
  // 1. `param: TObject[]` - um array de objetos do tipo `TObject` (pessoas com nome e email);
  // 2. `pessoa: TObject` - um objeto com o nome e email que queremos verificar se existe no array.
  let caso = false;
  // Loop para percorrer todos os objetos no array 'param'
  param.forEach((i) => {
    const { nome, email } = i;

    if (nome === pessoa.nome && email === pessoa.email) {
      caso = true;
    }
  });
  // Se o loop terminar sem encontrar uma pessoa correspondente, retorna false
  return caso;
};

// Lista de strings contendo alguns nomes
const list: string[] = ["Renan", "Amora", "Francisco", "Stephane"];
// Aqui, temos uma lista simples de strings (nomes) que será usada para verificar se um nome específico existe nela.

// Array de objetos representando pessoas, cada uma com nome e email
const arrayPessoas: TObject[] = [
  {
    nome: "Renan",
    email: "renanalves000",
  },
  {
    nome: "Stephane",
    email: "ste000",
  },
];
// Aqui, temos um array de objetos `arrayPessoas`, onde cada objeto representa uma pessoa com o nome e email.
// Cada pessoa segue a estrutura definida pelo tipo `TObject` (que contém `nome` e `email`).

// Verificando se o nome "Renan" está na lista de nomes
const includes1 = indexIncludes(list, "Renan");
// Aqui, chamamos a função `indexIncludes` para verificar se o nome "Renan" existe na lista `list`.
// O resultado será `true` porque "Renan" está presente na lista.

// Criando um objeto `pessoa` para verificar se existe uma pessoa com nome "Renan" e email "renanalves000"
const pessoa = { nome: "Renan", email: "renanalves000" };
// Aqui, estamos criando um objeto `pessoa`, que é do tipo `TObject` e contém os valores de nome e email.
// O objetivo é verificar se esse objeto existe no array `arrayPessoas`.

// Chamando a função `existsNameAndEmail` para verificar se existe a pessoa com o nome e email fornecidos no array de pessoas
const includes2 = existsNameAndEmail(arrayPessoas, pessoa);
// A função `existsNameAndEmail` percorre o array `arrayPessoas` e compara cada objeto com o objeto `pessoa`.
// Se encontrar uma correspondência (mesmo nome e mesmo email), retorna `true`. Caso contrário, retorna `false`.

console.log(includes1); // Saída: true (porque "Renan" está na lista)
console.log(includes2); // Saída: true (porque existe uma pessoa com nome "Renan" e email "renanalves000" no array)
