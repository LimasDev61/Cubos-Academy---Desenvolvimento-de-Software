// Programação estruturada
let nome = 'Renan';
let idade = 32;
let cnh = true;

// Programação OOP

// identação do objeto:
const USUARIO = {
    nome: 'Renan', 
    idade: 32,  // propriedades
    cnh: true,
    habilidades: ['javascript', 'php', 'java'] // array para acrescentar as habilidades.
};

// Acesso comum ao nome:
console.log(USUARIO.nome);

// Acesso com padrão template literals
console.log(`
    Bem vindo: ${USUARIO.nome}
    Idade: ${USUARIO.idade}
    CNH: ${USUARIO.cnh}
    Habilidades: ${USUARIO.habilidades[0]}
    Habilidades: ${USUARIO.habilidades}
`);

// Acesso com padrão braket notation, [] colchetes.
console.log(USUARIO['idade']);

// braket notation, para acesso => indicies array.
console.log(USUARIO['habilidades'][0])

