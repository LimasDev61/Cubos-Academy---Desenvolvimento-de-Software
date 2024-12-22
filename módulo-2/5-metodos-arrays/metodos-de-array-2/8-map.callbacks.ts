// Define o tipo TPessoa, que é um objeto com propriedades nome (string), sobrenome (string) e idade (number).
type TPessoa = {
  nome: string;
  sobrenome: string;
  idade: number;
};

// Define o tipo TArray, que é uma função que recebe um array de TPessoa e retorna um array de objetos
// com propriedades nomeCompleto (string) e idade (number).
type TArray = (pessoa: TPessoa[]) => {
  nomeCompleto: string;
  idade: number;
}[];

// Cria a função nomesSobrenome que recebe um array de pessoas (do tipo TPessoa[]), e retorna um array
// de objetos com o nome completo (concatenação do nome e sobrenome) e a idade.
const nomesSobrenome: TArray = (pessoa) =>
  pessoa.map((p) => {
    // Usa o método map para iterar sobre o array de pessoas.
    return {
      // Cria um objeto com o nome completo e a idade.
      nomeCompleto: `${p.nome} ${p.sobrenome}`,
      idade: p.idade,
    };
  });

// Cria um array de objetos `pessoas`, onde cada objeto segue o tipo `TPessoa` e contém informações como nome, sobrenome e idade.
const pessoas: TPessoa[] = [
  {
    nome: "Guido",
    sobrenome: "Cerqueira",
    idade: 33,
  },
  {
    nome: "Renan",
    sobrenome: "Lima",
    idade: 32,
  },
  {
    nome: "Stephane",
    sobrenome: "Martins",
    idade: 33,
  },
  {
    nome: "Amora",
    sobrenome: "Martins",
    idade: 7,
  },
  {
    nome: "Francisco",
    sobrenome: "Martins",
    idade: 1,
  },
];

// Exibe no console o resultado da função nomesSobrenome aplicada ao array pessoas,
// retornando o nome completo e a idade de cada pessoa.
console.log(nomesSobrenome(pessoas));

// Cria um array de strings com nomes.
const nomes: string[] = ["Guido", "Renan", "Stephane", "Amora", "Francisco"];

// Define o tipo TNome, que é um objeto com uma propriedade 'nome' do tipo string.
type TNome = {
  nome: string;
};

// Usa o método map para iterar sobre o array de strings nomes e transforma cada string em um objeto
// com a chave 'nome' e o valor da string.
const nomesTransformados: TNome[] = nomes.map((nome) => {
  return {
    nome, // A chave 'nome' recebe o valor da string.
  };
});

// Exibe no console o resultado da transformação, onde cada nome é agora um objeto com a chave 'nome'.
console.log(nomesTransformados);
