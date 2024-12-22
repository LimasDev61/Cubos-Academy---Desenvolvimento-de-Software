// Define um tipo TArray que descreve a estrutura do objeto esperado pela função.
type TArray = {
  inicio: number; // Índice de início para a operação do splice.
  qntd: number; // Quantidade de elementos a serem removidos.
  paises: string[]; // Array original de países.
  trocar: string[]; // Novos elementos a serem inseridos.
};

// Define um tipo TPaises que é uma função que recebe TArray e retorna um array de strings.
type TPaises = (paises: TArray) => string[];

// Implementa a função spliceFuncao que realiza uma operação de "splice" no array fornecido.
const spliceFuncao: TPaises = ({ paises, inicio, qntd, trocar }) => {
  // Realiza a operação "splice" no array:
  // - Remove `qntd` elementos a partir do índice `inicio`.
  // - Insere os elementos do array `trocar` na mesma posição.
  // - Retorna os elementos removidos.
  return paises.splice(inicio, qntd, ...trocar);
};

// Array original de países.
const paises = ["Brasil", "Alemanha", "França", "Suiça", "Inglaterra"];

// Chama a função spliceFuncao com os parâmetros necessários.
const paisesSplice = spliceFuncao({
  paises, // Array original de países.
  inicio: 1, // Inicia a partir do índice 1 ("Alemanha").
  qntd: 2, // Remove 2 elementos ("Alemanha" e "França").
  trocar: ["Bélgica", "Itália"], // Insere "Bélgica" e "Itália".
});

// Exibe no console os elementos que foram removidos.
console.log(paisesSplice); // Saída: ["Alemanha", "França"]

// Exibe no console o array original modificado.
console.log(paises); // Saída: ["Brasil", "Bélgica", "Itália", "Suiça", "Inglaterra"]
