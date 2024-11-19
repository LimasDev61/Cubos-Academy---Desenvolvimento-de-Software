// Faça um programa que conta quantas letras "a" existem
// numa determinada palavra, Imprima o resultado na tela

// Definição da variável com toLowerCase, para manter todas as letras minúsculas
const WORD: string = 'Anatomia'.toLowerCase();

// confirmar quantas letras A, existem.
let confirmar: boolean = WORD.includes('a');

// Contar o total de letras A.
let totalA: number = 0;

// Passo 1: somar e encontrar letras 'a';
for(let letras of WORD) {
    if(letras === 'a') {
        totalA++;
    }
}

// Quantidade de letras 'a';
console.log(`Total de letras 'a': ${totalA}`);

// Verificação ternária se existe ou não letras 'a' na palavra.
console.log(`Existe letras 'a' nessa palavra: ${confirmar ? 'SIM' : 'NÃO'}`)