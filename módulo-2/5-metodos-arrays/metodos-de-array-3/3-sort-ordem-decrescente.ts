// Função chamada "organizar" que recebe um array de números como argumento
const organizar = (array: number[]) => {
  // O método sort é usado para ordenar o array. Ele recebe uma função de comparação.
  return array.sort((item1, item2) => {
    // Compara dois elementos (item1 e item2) do array:

    // Se item1 for menor que item2, retorna -1
    // Isso indica que item1 deve vir antes de item2 na ordenação
    if (item1 < item2) {
      return -1;
    }
    // Se item1 for maior que item2, retorna 1
    // Isso indica que item1 deve vir depois de item2 na ordenação
    else if (item1 > item2) {
      return 1;
    }

    // Se item1 e item2 forem iguais, retorna 0
    // Isso indica que suas posições relativas não precisam ser alteradas
    return 0;
  });
};

// Declaração de um array de números chamado "numeros"
const numeros: number[] = [10, 35, 1, 90, 5];

// Imprime no console o array "numeros" ordenado usando a função "organizar"
console.log(organizar(numeros)); // Saída esperada: [1, 5, 10, 35, 90]
