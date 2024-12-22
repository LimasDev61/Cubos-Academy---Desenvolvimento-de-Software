// Define o tipo `TAarray`, que é um objeto que contém dois arrays: `add` (array principal) e `valuesAdd` (valores a serem adicionados).
type TAarray = {
  add: number[];
  valuesAdd: number[];
};

// Define o tipo `TAdd`, que é uma função que recebe um parâmetro do tipo `TAarray` e retorna um array de números.
type TAdd = (param: TAarray) => number[];

// Função `addUnshift` que adiciona os valores de `valuesAdd` no início do array `add` e retorna o array atualizado.
const addUnshift: TAdd = ({ add, valuesAdd }) => {
  // Adiciona os elementos de `valuesAdd` ao início do array `add` usando o método `unshift()`.
  add.unshift(...valuesAdd);

  // Retorna o array `add` após a modificação.
  return add;
};

// Array original de exemplo.
const originalArray: number[] = [4, 5, 6, 7];

// Cria uma cópia do array `originalArray` para que `addUnshift` possa manipulá-lo sem alterar o array original.
const add: number[] = [...originalArray];

// Array de valores a serem adicionados no início de `add`.
const valuesAdd: number[] = [0, 1, 2, 3];

// Chama a função `addUnshift` com o objeto que contém os arrays `add` e `valuesAdd` e armazena o resultado em `novaAdd`.
const novaAdd = addUnshift({
  add,
  valuesAdd,
});

// Imprime o array original. Como a função `addUnshift` modifica a cópia do array, `originalArray` não será alterado.
console.log("Original list: " + originalArray);

// Imprime os itens que foram adicionados ao array `add`.
console.log("Itens adicionados: " + valuesAdd);

// Imprime a lista atualizada após a adição dos elementos.
console.log("Lista atualizada: " + novaAdd);
