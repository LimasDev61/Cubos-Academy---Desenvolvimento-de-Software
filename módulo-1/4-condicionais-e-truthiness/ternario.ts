// Programa em TS

// Variável para receber o valor a qual vai ser divido, utilizando any, para desativar
// a verificação de tipos;
const DIVIDENDO: number = 10;

// Variável para receber o resto da divisão, com a condição térnaria if-else simplificado
let parOuImpa: string = (DIVIDENDO % 2 === 0) ? 'par' : 'impa';

// Resultado
console.log(parOuImpa);

// Opção 2:
const RESULTADO: number = DIVIDENDO % 2;
(RESULTADO === 0) ? console.log('par') : console.log('impa');
