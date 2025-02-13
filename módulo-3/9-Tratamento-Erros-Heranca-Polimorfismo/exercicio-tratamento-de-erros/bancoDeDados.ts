import TTarefa from "./src/tipos/TTarefa";

type TBancoDeDados = {
  tarefas: TTarefa[];
};

const bancoDeDados: TBancoDeDados = {
  tarefas: [
    {
      id: "4b1e5ed6-28c1-48a5-901b-a763f5896161",
      nome: "Estudar Matemática",
      descricao: "Estudar equações de primeiro grau",
    },
    {
      id: "82d8750c-1826-4be5-bed1-428b6f476295",
      nome: "Estudar Português",
      descricao: "Estudar morfologia e sintaxe",
    },
  ],
};

export default bancoDeDados;
