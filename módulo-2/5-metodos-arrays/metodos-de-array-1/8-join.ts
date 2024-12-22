// Define um tipo chamado TArray que representa uma função.
// Essa função recebe uma string como argumento e retorna outra string.
type TArray = (list: string) => string;

// Define uma função chamada `reverterStrings` que implementa o tipo `TArray`.
// A função recebe uma string e retorna a mesma string com os caracteres invertidos.
const reverterStrings: TArray = (list) => {
  // O método `.split("")` divide a string em um array de caracteres.
  // O método `.reverse()` inverte a ordem dos elementos no array.
  // O método `.join("")` junta os caracteres de volta em uma string.
  return list.split("").reverse().join("");
};

// Declara uma variável chamada `nome` com uma string representando uma frase.
const nome: string = "Eu amo minha familia";

// Exibe no console o resultado da chamada da função `reverterStrings` com a string `nome`.
// A string original "Eu amo minha familia" será exibida invertida: "ailimaf ahnim oma uE".
console.log(reverterStrings(nome));
