// Declare uma variável que armazena um objeto contendo as seguintes propriedades:
// nome, idade, altura, temCNH e habilidade.

// Depois, faça um programa que imprime na tela o belo texto abaixo
// Substituindo os dados pessoais pelos dados do objeto:

// Guido tem 33 anos, 1.87 de altura, possui CNH e as seguintes habilidades:
// - JavaScript
// - PHP
// - Python
// - Java

// TIPOS DO OBJETO
type TUsuario = {
    nome: string
    idade: number
    altura: number
    temCNH: boolean
    habilidade: string[]
};

// Passo 1: variável declarada
const USUARIO: TUsuario = {
    nome: 'Renan',
    idade: 32,
    altura: 1.68,
    temCNH: true,
    habilidade: ['JAVA', 'JS', 'TYPESCRIPT']
};

// Passo 2: texto:
// Desestruturação:
// Utilizando rest
const {nome, idade, ...resto} = USUARIO;

// Ternário para verificação da CNH
const POSSUI_CNH: string = resto.temCNH ? 'possui CNH' : 'não possui CNH';

console.log(`${nome} tem ${idade}, ${resto.altura}, ${POSSUI_CNH}, e as seguintes habilidades:`);

// LOOP para pegar as habilidades:
for(let hab of resto.habilidade) {
    console.log(`- ${hab}`);
};


