// Define o tipo de dados para a função que aceita um objeto com um array de strings como parâmetro e retorna uma string ou undefined.
type TArray = {
  remove: string[]; // Array de strings que será modificado (o array de onde o elemento será removido).
};

// Define o tipo da função `TArrayS`, que é uma função que aceita um `TArray` como parâmetro e retorna uma string ou undefined.
type TArrayS = (param: TArray) => string | undefined;

// Função `removePop` que recebe um objeto do tipo `TArray` e remove o último elemento do array `remove`.
// Retorna o elemento removido ou undefined se o array estiver vazio.
const removePop: TArrayS = ({ remove }) => remove.pop();

// Criação de um array original com alguns elementos.
const originalArray = ["renan", "stephane", "amora", "francisco"];

// Criação de uma cópia do array original para ser manipulada pela função `removePop`.
// Isso é importante para preservar o `originalArray` e demonstrar que ele não é alterado pela função.
const removeArray = [...originalArray];

// Chama a função `removePop` com um objeto que contém `removeArray` como parâmetro.
// O resultado é o elemento removido do `removeArray`.
const result = removePop({
  remove: removeArray,
});

// Imprime o array original (que permanece inalterado).
console.log("Lista Original: " + originalArray);

// Imprime o array atualizado após a remoção do último elemento.
// Note que `removeArray` agora está modificado, pois a função `removePop` removeu um elemento dele.
console.log("Array atualizada: " + removeArray);

// Imprime o elemento que foi removido do array `removeArray`.
// Pode ser uma string ou undefined, caso o array esteja vazio.
console.log("Removido: " + result);
