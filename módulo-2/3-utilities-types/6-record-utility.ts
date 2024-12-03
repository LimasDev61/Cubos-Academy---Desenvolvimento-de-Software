type Pessoa = Record<"nome" | "email" | "senha", string>;

type TPessoa = {
  nome: string;
  email: string;
  idade: number;
};

type Dupla = Record<"jogador1" | "jogador2", TPessoa>;

const time1: Dupla = {
  jogador1: {
    nome: "Renan",
    email: "renan000",
    idade: 32,
  },
  jogador2: {
    nome: "Stephane",
    email: "stephane000",
    idade: 33,
  },
};

console.log(time1);
