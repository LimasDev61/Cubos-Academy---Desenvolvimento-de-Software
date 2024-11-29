// Criar variável da tupla
let informacoes: [string, number, boolean];

// Tupla tem tamanho fixo comparado ao array
informacoes = ["Renan", 123, true];

// Tipando usuário com literals type.
let usuario: [string, number, string, "ativo" | "inativo"];

usuario = ["Renan", 33, "renanalves000@gmail.com", "ativo"];

// Tuplas são muito úteis no front-end, exemplo
const useState: [string, () => any] = [
  "javascript",
  function () {
    console.log("Olá, pessoal");
  },
];

// Desestruturar useState
let [state, funcao] = useState;

console.log(state);

funcao();