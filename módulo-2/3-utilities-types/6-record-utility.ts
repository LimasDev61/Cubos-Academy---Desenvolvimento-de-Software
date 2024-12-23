// Define um tipo "Pessoa" usando o utilitário `Record` do TypeScript.
// Esse tipo é um mapeamento onde as chaves "nome", "email" e "senha" são todas do tipo `string`.
type Pessoa = Record<"nome" | "email" | "senha", string>;

// Define um tipo "TPessoa" como uma interface explícita.
// Este tipo possui três propriedades: "nome" e "email" do tipo `string`, e "idade" do tipo `number`.
type TPessoa = {
  nome: string;
  email: string;
  idade: number;
};

// Define um tipo "Dupla" usando o utilitário `Record`.
// Este tipo mapeia as chaves "jogador1" e "jogador2" para objetos do tipo "TPessoa".
type Dupla = Record<"jogador1" | "jogador2", TPessoa>;

// Cria uma constante "time1" que é do tipo "Dupla".
// Cada jogador (jogador1 e jogador2) é representado por um objeto que segue a estrutura do tipo "TPessoa".
const time1: Dupla = {
  jogador1: {
    nome: "Renan", // Nome do primeiro jogador
    email: "renan000", // Email do primeiro jogador
    idade: 32, // Idade do primeiro jogador
  },
  jogador2: {
    nome: "Stephane", // Nome do segundo jogador
    email: "stephane000", // Email do segundo jogador
    idade: 33, // Idade do segundo jogador
  },
};

// Exibe o objeto "time1" no console.
// O resultado será um objeto com os dados dos dois jogadores definidos.
console.log(time1);

