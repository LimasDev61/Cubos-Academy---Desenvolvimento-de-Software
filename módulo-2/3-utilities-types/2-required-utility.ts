// Define o tipo TPessoa que representa um objeto com as propriedades obrigatórias:
// - nome (string): Nome da pessoa.
// - email (string): E-mail da pessoa.
// - idade (number): Idade da pessoa.
type TPessoa = {
  nome: string;
  email: string;
  idade: number;
};

// Cria um tipo utilitário TUsuario usando Required<TPessoa>.
// Required<T> torna todas as propriedades de T obrigatórias.
// TUsuario é um array de objetos do tipo TPessoa, onde todas as propriedades são obrigatórias.
type TUsuario = Required<TPessoa>[];

// Função que aceita um array de objetos do tipo TUsuario (TPessoa),
// onde todas as propriedades são obrigatórias.
// A função imprime o array recebido no console.
function atualizar(pessoas: TUsuario): void {
  console.log(pessoas);
}

// Chama a função atualizar, passando um array contendo dois objetos do tipo TPessoa,
// onde cada objeto inclui as propriedades 'nome', 'email' e 'idade', todas obrigatórias.
atualizar([
  {
    nome: "Renan",
    email: "renanalves000@gmail.com",
    idade: 32,
  },
  {
    nome: "Stephane",
    email: "stephane@gmayl.com",
    idade: 33,
  },
]);
