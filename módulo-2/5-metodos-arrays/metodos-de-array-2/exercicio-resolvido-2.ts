type TArray = {
  nome: string;
  stack: string;
};

type TConvert = (param: TArray[], pessoas: { stack: string }) => TArray[];

const lista: TConvert = (param, pessoas) => {
  return param.filter((p) => p.stack === pessoas.stack);
};

const pessoas: TArray[] = [
  {
    nome: "Guido",
    stack: "backend",
  },
  {
    nome: "Renan",
    stack: "backend",
  },
  {
    nome: "Stephane",
    stack: "frontend",
  },
  {
    nome: "Amora",
    stack: "frontend",
  },
  {
    nome: "Francisco",
    stack: "backend",
  },
];

const backend = lista(pessoas, {
  stack: "frontend",
});

const frontend = lista(pessoas, {
  stack: "backend",
});

console.log(backend, frontend);
