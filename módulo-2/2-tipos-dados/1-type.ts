// Com o bloco de tipagem
type TNome = string;

// Variável tipada de forma explicita
const nome: TNome = "Renan Alves";

console.log(nome);

// Bloco para tipar dados de uma pessoa em um objeto
type TPessoa = {
  nome: string;
  email: string;
  idade: number;
};

// Como boas práticas sempre abstraia os dados de um objeto em um bloco type.

// Chamada para o type:
const usuario: TPessoa = {
  nome: "Renan",
  email: "renanalves000@gmail.com",
  idade: 32,
};

console.log(usuario);

// Também podemos fazer um array de tipos
const usuarios: TPessoa[] = [
  {
    nome: "Renan",
    email: "renanalves000@gmail.com",
    idade: 32,
  },
  {
    nome: "Stephane",
    email: "franciscoxD@gmail.com",
    idade: 6,
  },
];

console.log(usuarios)
