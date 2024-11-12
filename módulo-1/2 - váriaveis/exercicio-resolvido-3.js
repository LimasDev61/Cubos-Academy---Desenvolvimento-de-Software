// 1. Declare uma variável nome e uma idade
// 2. Imprima a frase: Meu nome é xxxx e tenho xxx anos.

// 1º passo
let nome = 'Renan', idade = 32;

// 2º passo:

// Solução.1, padrão +
console.log('Meu nome é ' + nome + ' e tenho ' + idade + ' anos');

// Solução.2, padrão concat
console.log('Meu nome é '.concat(nome, ' e tenho ', idade, ' anos'));


// 1. Dado ao código abaixo, refatore usando template string(template literals)
// 2. Imprima a frase: Meu nome é xxxx e tenho xxx anos.

// Solução.3, padrão template literals(Template String)
console.log(`Meu nome é ${nome} e tenho ${idade} anos`);