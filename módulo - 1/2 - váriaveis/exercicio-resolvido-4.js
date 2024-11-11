// Váriaveis
let nome = 'Renan', idade = 32;

// 1. Dado ao código abaixo, refatore usando template string(template literals)
// 2. Imprima a frase: Meu nome é xxxx e tenho xxx anos.

// Código para ser refatorado 
let frase = 'Meu nome é ' + nome + ' e tenho ' + idade + ' anos';
console.log(frase);

// Passo 1 e Passo 2 - Refatorado
console.log(`Meu nome é ${nome} e tenho ${idade} anos`);
