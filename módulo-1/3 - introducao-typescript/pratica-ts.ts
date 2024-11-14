/* 
/
/ Vamos utilizar o mesmo exemplo do arquivo pratica.js, vamos fazer a soma de
/ dois valores 
/
/ Vamos deixar os dados explicitos
/
*/

// Variável do tipo numérico
let numero1: number = 20;

// Variável do tipo String, podemos ver que nessa linha de comando o typescrip ja acusou 
// Erro
// let numero2: number = '12';

// Correção da linha 15.
let numero2: number = 12;

// Concatenação entre as variáveis, ja que uma string, não se soma uma numero
let resultado = numero1 + numero2;

// Resultado da soma
console.log(resultado);

/* Podemos perceber que no TS, os dados são estáticos e explícitos */ 