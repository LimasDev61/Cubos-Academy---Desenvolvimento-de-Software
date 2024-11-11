// {
    // Com a palavra reservada let, será impossivel imprimir fora do escopo
   // let nome = 'João';

    // Com a palavra reservada var, ja que ela funciona como global, conseguimos imprimir fora do escopo
    // var idade = 32;

    // Constantes também só funcionam para o escopo a quais foram definidas
    // const COLOR = 'Vermelho';
// }
// A saída não vai da erro, pois esta com uma variável global
// console.log(idade);

// Vai da erro, pois está dentro de um escopo
// console.log(nome);

// Vai da erro, pois está dentro de um escopo
// console.log(COLOR);

// Variáveis globais
const NOME = 'Renan';
let idade = 32;

{
    // variável de escopo, local
    const NOME = 'Mario';

    // impressão priorizando o escopo
    console.log(NOME, idade);
}

// Impressão global
console.log(NOME);