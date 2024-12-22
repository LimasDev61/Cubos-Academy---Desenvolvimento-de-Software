// Define um tipo para representar um array de números e um valor para verificar divisibilidade
type TArray = {
    numeros: number[]; // Um array de números
    valor: number; // Um valor que será utilizado para verificar divisibilidade
  };
  
  // Define um tipo para representar uma pessoa com nome e email
  type TPessoas = {
    nome: string; // Nome da pessoa
    email: string; // Email da pessoa
    idade: number;
  };
  
  // Define um tipo para uma função que recebe um parâmetro do tipo TArray e retorna um booleano
  type TCall = (param: TArray) => boolean;
  
  // Função que verifica se algum número do array é divisível por um valor específico
  const someCheck: TCall = ({ numeros, valor }) =>
    // Usa o método `some` para verificar se algum número no array é divisível por 'valor'
    numeros.some((numero) => numero % valor === 0);
  
  // Exemplo de array de números e valor a ser testado
  const numeros = [4, 8, 10, 13, 15];
  // Chama a função someCheck passando o array de números e o valor 2
  const check = someCheck({
    numeros,
    valor: 2, // Verifica se algum número do array é divisível por 2
  });
  
  // Exibe o resultado da verificação
  console.log(check); // true, porque 4, 8 e 10 são divisíveis por 2
  
  // Define um tipo para uma função que recebe um array de pessoas e uma pessoa a ser verificada, e retorna um booleano
  type TPessoaCheck = (param: TPessoas[], pessoa: TPessoas) => boolean;
  
  // Função que verifica se uma pessoa existe no array de pessoas
  const someCheckArray: TPessoaCheck = (param, pessoa) => {
    // Usa o método `some` para verificar se alguma pessoa no array tem o mesmo nome e email da pessoa fornecida
    return param.some((p) => p.nome === pessoa.nome && p.email === pessoa.email && p.idade >= pessoa.idade);
  };
  
  // Exemplo de array de pessoas
  const pessoas: TPessoas[] = [
     { nome: "Renan", email: "renan000@gmail.com", idade: 18 }, // Pessoa 1
     { nome: "Stephane", email: "step@gmail.com", idade: 15 }, // Pessoa 2
     { nome: "Amora", email: "amora@gmail.com", idade: 7 }, // Pessoa 3
     { nome: "Francisco", email: "francisco@gmail.com", idade: 1 } // Pessoa 4
  ];
  
  // A pessoa que queremos verificar se existe no array
  const verificarPessoa = { nome: "Stephane", email: "step@gmail.com", idade: 18};
  
  // Chama a função someCheckArray passando o array de pessoas e a pessoa a ser verificada
  const checkPessoa = someCheckArray(pessoas, verificarPessoa);
  
  // Exibe uma mensagem dependendo se a pessoa foi encontrada ou não
  if (checkPessoa) {
      console.log("Pessoa encontrada, bate os dados é maior de idade"); // Se encontrar, exibe essa mensagem
  } else {
      console.log("Pessoa não encontrada, talvez seja menor de 18"); // Se não encontrar, exibe essa mensagem
  }
  