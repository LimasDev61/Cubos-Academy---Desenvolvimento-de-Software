// Define o tipo TArray, que contém uma propriedade `remove` do tipo array de strings.
type TArray = {
  remove: string[];
};

// Define o tipo TArrayS, que é uma função que aceita um objeto do tipo TArray como parâmetro
// e retorna uma string ou undefined.
type TArrayS = (param: TArray) => string | undefined;

// Declara a função `removeShift`, que implementa o tipo TArrayS.
// Essa função remove e retorna o primeiro elemento do array `remove`,
// ou undefined se o array estiver vazio.
const removeShift: TArrayS = ({ remove }) => remove.shift();

// Declara um array original com alguns elementos de exemplo.
const originalArray = ["renan", "stephane", "amora", "francisco"];

// Cria uma cópia do array original para ser manipulada pela função `removeShift`,
// preservando o conteúdo do array original.
const removeArray = [...originalArray];

// Chama a função `removeShift` com um objeto contendo o array `removeArray`.
// O resultado será o elemento removido do início do array.
const result = removeShift({
  remove: removeArray,
});

// Imprime o array original, que permanece inalterado.
console.log("Lista Original: " + originalArray);

// Imprime o array atualizado após a remoção do primeiro elemento.
// O array `removeArray` foi alterado, pois a função `removeShift` removeu um elemento dele.
console.log("Array atualizada: " + removeArray);

// Imprime o elemento que foi removido do array `removeArray`.
// Pode ser uma string ou undefined, caso o array esteja vazio.
console.log("Removido: " + result);
