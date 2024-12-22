// Definindo o tipo TArray, que será usado para representar uma pessoa com nome e idade
type TArray = {
  nome: string; // Nome da pessoa (string)
  idade: number; // Idade da pessoa (número)
};

// Definindo o tipo TConvert, que é uma função que recebe um array de TArray e um objeto com o nome de uma pessoa,
// e retorna um TArray ou undefined, caso a pessoa não seja encontrada
type TConvert = (
  param: TArray[], // Parâmetro que é um array de pessoas (TArray)
  pessoas: { nome: string } // Parâmetro que é um objeto contendo o nome da pessoa que estamos procurando
) => TArray | undefined; // Retorna um TArray (uma pessoa) ou undefined caso não encontre a pessoa

// A função lista que implementa a lógica de busca de uma pessoa no array "param" baseado no nome fornecido em "pessoas"
const lista: TConvert = (param, pessoas) => {
  // Usa o método find() para procurar a pessoa no array "param" que tenha o mesmo nome que o "pessoas.nome"
  return param.find((p) => p.nome === pessoas.nome);
};

// Array de pessoas, cada uma com um nome e idade
const pessoas: TArray[] = [
  {
    nome: "Renan Alves",
    idade: 32,
  },
  {
    nome: "Stephane Rego",
    idade: 33,
  },
  {
    nome: "Amora Maria",
    idade: 7,
  },
  {
    nome: "Francisco Martins",
    idade: 1,
  },
];

// Objeto de busca, que contém o nome de uma pessoa a ser procurada
const search = { nome: "Ameba" };

// Chama a função lista com o array "pessoas" e o objeto "search". O operador "?" garante que a função seja chamada apenas
// se a função "lista" estiver definida (em caso de erros no código, pode evitar a falha)
const funSearch = lista?.(pessoas, search);

// Verifica se a busca retornou uma pessoa (não foi undefined) e imprime os resultados
if (funSearch) {
  console.log(funSearch); // Exibe os dados da pessoa encontrada
} else {
  // Caso não tenha encontrado a pessoa, exibe uma mensagem informando
  console.log("usuário não encontrado");
}
