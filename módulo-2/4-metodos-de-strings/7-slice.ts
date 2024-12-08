// Define um tipo chamado TTtexto que representa uma função.
// Essa função aceita três parâmetros: 
// - `text` (string): a string de entrada que será manipulada.
// - `init` (number): o índice inicial para a substring.
// - `final` (number): o índice final para a substring.
// Retorna uma string (resultado do corte da string).
type TTtexto = (text: string, init: number, final: number) => string;

// Implementa a função textoSlice que segue o tipo TTtexto.
// A função utiliza o método `.slice()` da string para extrair uma parte dela.
// - `text.slice(init, final)` retorna uma substring da posição `init` até `final` (excluindo o `final`).
const textoSlice: TTtexto = (text, init, final) => {
  return text.slice(init, final); // Realiza a operação de corte e retorna o resultado.
};

// Chama a função textoSlice com os seguintes argumentos:
// - Uma string de entrada: "Renan Alves, renan lima, RENAN ALVES DA SILVA LIMA".
// - Índice inicial (0): começa no início da string.
// - Índice final (-15): conta 15 caracteres a partir do final da string, removendo essa parte.
// O resultado será a substring extraída.
const resultado = textoSlice(
  "Renan Alves, renan lima, RENAN ALVES DA SILVA LIMA",
  0,
  -15
);

// Exibe o resultado no console.
// A saída será: "Renan Alves, renan lima, RENAN ALVES".
console.log(resultado);

