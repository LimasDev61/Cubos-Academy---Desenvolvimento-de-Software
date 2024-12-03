// Define o tipo TPessoa que representa um objeto com as propriedades obrigatórias:
// - nome (string): Nome da pessoa.
// - email (string): E-mail da pessoa.
// - idade (number): Idade da pessoa.
type TPessoa = {
  nome: string;
  email: string;
  idade: number;
};

// Cria um tipo utilitário TUsuario usando Partial<TPessoa>.
// Partial<T> torna todas as propriedades de T opcionais.
// TUsuario é um array de objetos parciais do tipo TPessoa.
type TUsuario = Partial<TPessoa>[];

// Função que aceita um array de objetos parciais do tipo TPessoa (TUsuario).
// A função imprime o array recebido no console.
function atualizar(pessoas: TUsuario): void {
  console.log(pessoas);
}

// Chama a função atualizar, passando um array contendo um único objeto parcial do tipo TPessoa.
// Nesse exemplo, o objeto inclui apenas as propriedades 'nome' e 'idade',
// omitindo a propriedade 'email', que é opcional devido ao uso de Partial<TPessoa>.
atualizar([
  {
    nome: "Renan",
    idade: 32,
  },
]);

// O console exibirá o array de objetos parciais do tipo TPessoa:
// [
//   { nome: "Renan", idade: 32 }
// ]
