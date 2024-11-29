// Pode ser número ou string, a qual é unido por uma | (barra)
// Com tipo literals
const indentificador: number | string | boolean | '123' = 123;

// Tipo com objeto

type TPessoa = {
    nome: string
    email: string
}

type TPessoa2 = {
    nome: TPessoa
    email: TPessoa
    idade?: number | string; // Essa propriedade agora é um number / string / undefined(?)
} // Passe o mouse sobre a TPessoa2

// Com esse tipo objeto, pode escolher entre os types TPessoa ou TPessa dois
// Vamos ter duas possibilidades
const usuario: (TPessoa | TPessoa2)[] = [];

usuario[usuario.length] = {
    nome: 'Renan',
    email: 'renanalves@.com',
};
usuario[usuario.length] = {
    nome: 'Renan',
    email: 'renanalves@.com',
    idade: 32
};
console.log(usuario[0]);
console.log(usuario[1]);