// Define o tipo para o retorno das funções que retornam strings.
type TTexto = string;

// Define os parâmetros necessários para a função `textoFun` como um tipo separado.
type TTextSubParams = {
  text: string; // A string que será manipulada.
  init: number; // O índice inicial para a operação.
  final: number; // O índice final para a operação.
};

// Função que recebe uma string como entrada e a converte para letras maiúsculas.
const textoFunc = (text: TTexto) => {
  return text.toUpperCase(); // Retorna a string em letras maiúsculas.
};

// Define um tipo de função que recebe um objeto do tipo `TTextSubParams` e retorna
// uma string.
type TTextoSub = (params: TTextSubParams) => TTexto;

// Implementação de uma função que segue o tipo `TTextoSub`.
// A função extrai uma substring da string fornecida com base nos índices inicial e final.
const textoFun: TTextoSub = ({ text, init, final }) => {
  return text.substring(init, final); // Retorna a substring definida pelos índices.
};

// Define uma string de exemplo.
const texto: TTexto = "Renan Alves, renan lima, RENAN ALVES DA SILVA LIMA";

// Exibe no console a string convertida para letras maiúsculas usando `textoFunc`.
console.log(textoFunc(texto)); // Saída: "RENAN ALVES, RENAN LIMA, RENAN ALVES DA SILVA LIMA"

// Chama a função `textoFun` para extrair uma substring da string fornecida.
// Fornece os parâmetros no formato especificado pelo tipo `TTextSubParams`.
const resultadoSub = textoFun({
  text: "Renan Alves, renan lima, RENAN ALVES DA SILVA LIMA", // String de entrada.
  init: 0, // Índice inicial para a substring.
  final: 12, // Índice final para a substring.
});

// Exibe no console o resultado da substring extraída.
console.log(resultadoSub); // Saída: "Renan Alves,"
