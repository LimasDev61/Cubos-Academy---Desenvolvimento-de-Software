// Objeto como valor de uma propriedade
console.log('USUARIO: ');
const USUARIO = {
    nome: 'Renan', 
    idade: 32,  // propriedades
    cnh: true,
    habilidades: ['javascript', 'php', 'java'], // array para acrescentar as habilidades.

    // Objeto como valor da propriedade 'Endereço';
    endereco: {
        rua: 16,
        casa: 80,
        bairro: 'Setor Oeste'
    }
};

console.log(USUARIO);
console.log(USUARIO.endereco); // Acesso a propriedade endereco


// Shorthand - ABREVIAÇÃO DE OBJETOS
let nome = 'Renan';
let idade = 32;
let CNH = true;
let habilidades = ['JS, PHP', 'JAVA'];

console.log('\nUSUARIO-2: ');
const USUARIO2 = {
    nome, // Propriedade busca o nome da variável 'nome'.
    idade,  // propriedades
    CNH,
    habilidades
};

console.log(USUARIO2);

// Mescalando dois;

const ENDERECO = {
    rua: 16,
        casa: 80,
        bairro: 'Setor Oeste'
};
console.log('\nUSUARIO-3: ');
const USUARIO3 = {
    nome: 'Renan', 
    idade: 32,  // propriedades
    cnh: true,
    endereco: ENDERECO
};

console.log(USUARIO3);