// Definindo o tipo TArray, que representa um objeto com 'nome' (string) e 'idade' (número).
type TArray = {
    nome: string;
    idade: number;
  };
  
  // Definindo o tipo TConvert, que representa uma função que recebe um array de TArray e um objeto com 'nome', 
  // e retorna um número (índice da pessoa no array ou -1 se não encontrada).
  type TConvert = (param: TArray[], pessoas: { nome: string }) => number;
  
  // Função lista que recebe um array de pessoas (param) e um objeto pessoa (pessoas),
  // e retorna o índice da pessoa no array com o nome igual ao do objeto 'pessoas'.
  const lista: TConvert = (param, pessoas) => {
    // O método findIndex retorna o índice do primeiro elemento que satisfaça a condição,
    // ou -1 se não houver nenhum elemento que satisfaça a condição.
    return param.findIndex((p) => p.nome === pessoas.nome); // Compara se o nome de cada elemento é igual ao nome da pessoa
  };
  
  // Criando um array de pessoas (do tipo TArray), onde cada pessoa tem nome e idade.
  const pessoas: TArray[] = [
    { nome: "Renan Alves", idade: 32 },
    { nome: "Stephane Rego", idade: 33 },
    { nome: "Amora Maria", idade: 7 },
    { nome: "Francisco Martins", idade: 1 },
  ];
  
  // Criando um objeto search, que contém o nome da pessoa que estamos procurando.
  // O nome "Amora Maia" foi escrito incorretamente para simular a ausência da pessoa no array.
  const search = { nome: "Amora Maia" };
  
  // Chamando a função lista, passando o array pessoas e o objeto search.
  // A função vai procurar o índice de "Amora Maia" no array pessoas.
  const funSearch = lista?.(pessoas, search);
  
  // Se o índice encontrado for diferente de -1 (ou seja, a pessoa foi encontrada no array),
  // a função irá exibir o índice da pessoa no console.
  if (funSearch !== -1) {
    console.log(funSearch); // Exibe o índice da pessoa encontrada
  } else {
    // Caso a pessoa não seja encontrada, o código vai exibir -1.
    console.log(funSearch); // Exibe -1 (índice não encontrado)
  }
  
