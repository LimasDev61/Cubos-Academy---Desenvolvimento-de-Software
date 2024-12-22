// Define o tipo TArray como um objeto com duas propriedades:
// 'nome' do tipo string e 'idade' do tipo number.
type TArray = {
  nome: string;
  idade: number;
};

// Define o tipo TObject como uma função que aceita um array de TArray
// e retorna outro array de TArray.
type TObject = (param: TArray[]) => TArray[];

// Cria a função 'lista', que segue a definição do tipo TObject.
// Essa função recebe um array do tipo TArray[] e filtra apenas os itens
// cuja propriedade 'idade' seja maior ou igual a 18.
const lista: TObject = (param) => {
  return param.filter((item) => {
    return item.idade >= 18; // Retorna true apenas para itens com idade >= 18.
  });
};

// Define um array de objetos do tipo TArray[], representando pessoas com suas idades.
const pessoas: TArray[] = [
  {
    nome: "Renan Alves", // Pessoa 1: nome e idade.
    idade: 32,
  },
  {
    nome: "Stephane Rego", // Pessoa 2: nome e idade.
    idade: 33,
  },
  {
    nome: "Amora Maria", // Pessoa 3: menor de idade.
    idade: 7,
  },
  {
    nome: "Francisco Martins", // Pessoa 4: menor de idade.
    idade: 1,
  },
];

// Chama a função 'lista' passando o array 'pessoas' como argumento.
// O console.log exibe o resultado: apenas os itens que atendem ao critério
// (idade >= 18) serão incluídos no array retornado.
console.log(lista?.(pessoas));
