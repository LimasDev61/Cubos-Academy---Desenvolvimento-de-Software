// Crie um array de números aleatórios e faça um programa
// que calcule e imprime na tela a soma dos itens de um array.
// Requesito: usar o loop for;

// Passo 1: array números;
const NUMBER: number[] = [1, 10, 20, 25, 32, 11, 45, 100];

// Segundo passo, FOR para percorrer os elementos do array e somar;
let soma: number = 0;
for(let i = 0; i < NUMBER.length; i++) {
    soma += NUMBER[i];
}

// Resultado:
console.log(soma);