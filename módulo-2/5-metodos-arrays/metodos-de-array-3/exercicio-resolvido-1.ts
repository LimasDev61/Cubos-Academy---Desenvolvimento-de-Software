// Dado o array do usuário abaixo, faça a ordenação dos resultados de forma crescente,
// segundo a idade de cada usuário. Após a ordenação crescente, faça a ordenção decrescente;

const crescente = (crescente: { nome: string; idade: number }[]) => {
  return crescente.sort((a, b) => a.idade - b.idade);
};

const decrescente = (decrescente: { nome: string; idade: number }[]) => {
  return decrescente.sort((b, a) => b.idade - a.idade);
};

const usuario = [
  { nome: "Renan", idade: 32 },
  { nome: "Stephane", idade: 33 },
  { nome: "Amora", idade: 7 },
  { nome: "Francisco", idade: 1 },
];

const crescenteIdade = crescente(usuario);
const decrescenteIdade = decrescente(usuario);

console.log(crescenteIdade);
console.log(decrescenteIdade);
