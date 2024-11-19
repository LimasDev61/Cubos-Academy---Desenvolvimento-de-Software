// Array unidimensional
let frutas = ['banana', 'abacaxi', 'maçã', 'pera', 'uva'];

// Acesso dinamico ao tamanho do array
console.log(frutas.length);

// Acrescentando um novo item
frutas[5] = 'melão'

// Acesso dinamico atualizado
console.log(frutas.length);

// Lista completa
console.log(frutas);
// Descobrindo o ultimo elemento do array com -1;
console.log(frutas[frutas.length - 1]);

// O próximo indice a ser adicionado é sempre o tamanho do array;
frutas[frutas.length] = 'abacate';

// Lista Atualizada
console.log(frutas);