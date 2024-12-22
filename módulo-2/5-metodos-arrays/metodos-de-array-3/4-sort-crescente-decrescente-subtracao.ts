// Função chamada "crescenteFunction" que organiza um array de números em ordem crescente
const crescenteFunction = (crescente: number[]) =>
  // O método sort é usado para ordenar o array. A função de comparação retorna a diferença entre dois elementos (a - b).
  crescente.sort((a, b) => a - b);

// Função chamada "decrescenteFunction" que organiza um array de números em ordem decrescente
const decrescenteFunction = (decrescente: number[]) =>
  // O método sort é usado para ordenar o array. A função de comparação retorna a diferença inversa (b - a).
  decrescente.sort((a, b) => b - a);

// Declaração de um array de números chamado "numeros"
const numeros: number[] = [10, 35, 1, 90, 5];

// Imprime no console o array "numeros" ordenado em ordem crescente
console.log(crescenteFunction(numeros)); // Saída esperada: [1, 5, 10, 35, 90]

// Imprime no console o array "numeros" ordenado em ordem decrescente
console.log(decrescenteFunction(numeros)); // Saída esperada: [90, 35, 10, 5, 1]
