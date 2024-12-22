// Função para ordenar um array de números em ordem crescente
const organizar = (array: number[]) => {
  // O método sort ordena os elementos, com a comparação definida por (item, item2)
  // item - item2 é utilizado para definir a ordem crescente:
  // Se o resultado for negativo, item < item2 (mantém a ordem)
  // Se for positivo, item > item2 (inverte a ordem)
  // Se for 0, os elementos são iguais
  return array.sort((item, item2) => item - item2);
};

// Função para ordenar um array de strings alfabeticamente
const organizarLetters = (array: string[]) => {
  // O método sort usa localeCompare para comparar as strings alfabeticamente:
  // Ele leva em consideração o idioma e as regras de ordenação local
  return array.sort((item, item2) => item.localeCompare(item2));
};

// Array de números para ser ordenado
const numeros: number[] = [10, 35, 1, 90, 5];

// Array de letras para ser ordenado
const letras: string[] = ["a", "C", "B", "z", "x"];

// Ordena e exibe os números em ordem crescente
console.log(organizar(numeros)); // Saída: [1, 5, 10, 35, 90]

// Ordena e exibe as letras em ordem alfabética, respeitando maiúsculas/minúsculas
console.log(organizarLetters(letras)); // Saída: ["B", "C", "a", "x", "z"]
