// Define um tipo chamado TArray que representa uma função.
// Essa função recebe um array de strings como argumento e retorna outro array de strings.
type TArray = (list: string[]) => string[];

// Define uma função chamada `revert` que implementa o tipo `TArray`.
// A função recebe um array de strings chamado `list` e retorna esse array invertido.
const revert: TArray = (list) => {
  // A função utiliza o método `.reverse()` que inverte a ordem dos elementos do array.
  return list.reverse();
};

// Declara um array de strings chamado `list` com quatro elementos.
const list: string[] = ["Renan", "Amora", "Francisco", "Stephane"];

// Exibe no console o resultado da chamada da função `revert` com o array `list`.
// O array será invertido e exibido como ["Stephane", "Francisco", "Amora", "Renan"].
console.log(revert(list));
