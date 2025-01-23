export type TInstrutor = {
  id: number;
  nome: string;
  idade: number;
  email: string;
  espec: any[];
};

const instrutoresS: TInstrutor[] = [
  {
    id: 1,
    nome: "Renan Lima",
    idade: 32,
    email: "renanalves000@gmail.com",
    espec: [],
  },
  {
    id: 2,
    nome: "Stephane Rêgo",
    idade: 33,
    email: "stephanerego@gmail.com",
    espec: [],
  },
  {
    id: 3,
    nome: "Francisco Martins",
    idade: 20,
    email: "franciscomatador@gmail.com",
    espec: [],
  },
  {
    id: 4,
    nome: "Amora Maria",
    idade: 25,
    email: "amoramuchiba@gmail.com",
    espec: [],
  },
];

export default instrutoresS;
