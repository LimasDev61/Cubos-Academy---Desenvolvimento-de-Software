// Exercício resolvido em TS
// O sistema de uma instituição financeira arepsentou um problema ao
// imprimir a mesangem do saldo de um cliente. O saldo era de 1 Real e o sistema estava
// imprimindo a mensagem "Seu saldo é R$ 1 reais" com o nome da moeda no plural, mas sabemos
// que o correto seria "1 real" e seria no pural apenas se o saldo fosse maior que 1.
// Crie um programa que receba o saldo e imprima a mensagem do saldo de acordo com o seu valor.

const SALDO: number = 1;

let saldoBancario = (SALDO === 1) ? 'real' : 'reais';
console.log(`Seu saldo é de R$ ${SALDO} ${saldoBancario}`);