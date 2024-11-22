// Array criado pessoas, sem propriedades - não é um objeto.
const PESSOAS: string[] = ["Renan", "Amora", "Stephane", "Francisco"];

// Nova nomenclatura para os indicies do PESSOAS, com a desestruturação.
const[a, b, c, d] = PESSOAS;

console.log(a, b, c, d);