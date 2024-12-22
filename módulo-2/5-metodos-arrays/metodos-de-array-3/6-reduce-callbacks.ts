// Define o tipo da função que recebe um array de números e retorna um número.
type TObjectReduce = (param: number[]) => number;

// Função que utiliza o reduce para somar os valores de um array.
const testeReduce: TObjectReduce = (param) => {
  // O método reduce é usado para iterar sobre o array e acumular um resultado.
  return param.reduce((acumulador, valorAtual, index, array) => {
    // Exibe no console o número da iteração.
    console.log(`Iteração ${index}:`);

    // Exibe o valor atual que está sendo somado.
    console.log(`  Valor atual: ${valorAtual}`);

    // Exibe o valor do acumulador antes da soma.
    console.log(`  Acumulador antes da soma: ${acumulador}`);

    // Exibe o array completo em cada iteração.
    console.log(`  Array completo: [${array}]\n`);

    // O valor atual é somado ao acumulador e o resultado é retornado para a próxima iteração.
    return (acumulador += valorAtual);
  }, 0); // O valor inicial do acumulador é 0.
};

// Definindo o array de números que será passado para a função.
const array = [1, 5, 9, 10, 12];

// Chama a função passando o array e armazena o resultado.
const resultadoFinal = testeReduce(array);

// Exibe o resultado final da soma no console.
console.log(resultadoFinal);
