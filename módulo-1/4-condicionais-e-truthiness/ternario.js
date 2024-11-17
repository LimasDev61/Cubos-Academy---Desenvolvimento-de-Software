// Programa em JS

// Variável para receber o valor a qua vai ser divido;
const DIVIDENDO = 10;

// Variável para receber o resto da divisão, com a condição térnaria if-else simplificado
let parOuImpa = (DIVIDENDO % 2 === 0) ? 'par' : 'impa';

// Resultado
console.log(parOuImpa);

// Opção 2:
const RESULTADO = DIVIDENDO % 2;
(RESULTADO === 0) ? console.log('par') : console.log('impa');