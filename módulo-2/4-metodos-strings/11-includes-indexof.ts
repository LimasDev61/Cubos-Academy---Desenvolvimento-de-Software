// Definindo um tipo TText que representa um objeto com duas propriedades: `text` e `substring`, ambas do tipo `string`.
type TText = {
    text: string;
    substring: string;
  };
  
  // Função `textIndexOf` que recebe um objeto do tipo `TText` e retorna um `number`.
  // Ela verifica se a substring existe dentro da string principal e retorna o índice de sua posição.
  const textIndexOf = ({ text, substring }: TText): number => {
    // Verifica se a substring está presente na string `text`.
    if (text.indexOf(substring) !== -1) {
      console.log("Encontrou a palavra: ");
      return text.indexOf(substring); // Retorna o índice da primeira ocorrência da substring.
    } else {
      console.log("Não encontrou a palavra: ");
      return text.indexOf(substring); // Retorna -1 se a substring não for encontrada.
    }
  };
  
  // Função `textIncludes` que recebe um objeto do tipo `TText` e retorna um `boolean`.
  // Ela verifica se a substring está presente na string principal e retorna `true` ou `false`.
  const textIncludes = ({ text, substring }: TText): boolean => {
    return text.includes(substring); // Retorna `true` se a substring estiver na string `text`, caso contrário, `false`.
  };
  
  // Variável `text` que contém a string principal onde as buscas serão feitas.
  const text: string = "Eu amo a cubos academy, e amo as aulas de lógica";
  
  // Chamada da função `textIndexOf`, passando um objeto com `text` e `substring` como parâmetros.
  // A função retorna o índice da primeira ocorrência da substring na string `text`.
  const index = textIndexOf({
    text,
    substring: "cubos"
  });
  
  // Chamada da função `textIncludes`, passando um objeto com `text` e `substring` como parâmetros.
  // A função retorna um valor booleano que indica se a substring existe na string `text`.
  const includ = textIncludes({
    text,
    substring: "cubos"
  });
  
  // Imprime o índice encontrado pela função `textIndexOf`.
  console.log(index);
  
  // Imprime o resultado booleano retornado pela função `textIncludes`.
  console.log(includ);
