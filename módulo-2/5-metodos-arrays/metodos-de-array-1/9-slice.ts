// Define um tipo de objeto chamado TArray, que contém uma propriedade "paises".
// Essa propriedade é um array de strings.
type TArray = {
  paises: string[];
};

// Define um tipo de função chamado TPaises, que aceita um argumento do tipo TArray
// e retorna um array de strings.
type TPaises = (paises: TArray) => string[];

// Implementa uma função chamada sliceFuncao que segue a assinatura de TPaises.
// A função usa desestruturação para acessar a propriedade "paises" do argumento.
// Ela retorna um pedaço (slice) do array de "paises", contendo os elementos
// entre os índices 1 (inclusivo) e 3 (exclusivo).
const sliceFuncao: TPaises = ({ paises }) => paises.slice(1, 3);

// Define uma variável chamada "paises", que é um array de strings contendo os nomes de países.
const paises = ["Brasil", "Alemanha", "França", "Suiça", "Inglaterra"];

// Chama a função sliceFuncao passando um objeto que contém a propriedade "paises",
// e armazena o resultado na variável "paisesSlice".
const paisesSlice = sliceFuncao({
  paises,
});

// Exibe o conteúdo de "paisesSlice" no console.
// O output será um array contendo os elementos entre os índices 1 e 3 de "paises":
// ["Alemanha", "França"].
console.log(paisesSlice);
