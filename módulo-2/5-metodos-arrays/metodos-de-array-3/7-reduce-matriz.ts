// Função reduceTeste recebe uma matriz de arrays de números
const reduceTeste = (matriz: number[][]) => {
    // O reduce é aplicado à matriz. A função de callback recebe 4 parâmetros:
    // - acumulador: armazena o resultado da iteração até o momento
    // - valorAtual: o valor atual sendo processado (um array da matriz)
    // - indiceAtual: o índice da iteração atual
    // - matrizOriginal: a matriz original que está sendo processada
    return matriz.reduce((acumulador, valorAtual, indiceAtual, matrizOriginal) => {

        // Log de depuração para mostrar o índice da iteração
        console.log(`Iteração ${indiceAtual}:`);
        // Log de depuração para mostrar o valor atual (array sendo processado)
        console.log(`Valor Atual:`, valorAtual);
        // Log de depuração para mostrar o estado atual do acumulador
        console.log(`Acumulador até agora:`, acumulador);
        // Log de depuração para mostrar a matriz original inteira
        console.log(`Matriz Original:`, matrizOriginal + "\n");

        // O valorAtual é um array, então concatenamos seus elementos ao acumulador usando o spread operator
        return [...acumulador, ...valorAtual];
    }, []);  // O valor inicial do acumulador é um array vazio ([])
};

// Definição da matriz de arrays que será passada para a função
const matriz: number[][] = [
    [1, 2, 3],
    [4, 5],
    [6, 7, 8],
];

// A variável resultado recebe o retorno da função reduceTeste
const resultado = reduceTeste(matriz);

// Exibimos o resultado final após a execução do reduce
console.log(resultado);
