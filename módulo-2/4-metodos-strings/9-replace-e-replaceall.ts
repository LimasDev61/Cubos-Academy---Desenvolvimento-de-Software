// Define um tipo de função chamado TTexto que recebe três strings como argumentos
// (uma string principal e duas para busca e substituição) e retorna uma string.
type TTexto = (texto: string, arg1: string, arg2: string) => string;

// Função `textoReplace` que substitui apenas a primeira ocorrência de `arg1` (string de busca)
// por `arg2` (string de substituição) na string `texto`.
// Essa função segue o tipo TTexto.
const textoReplace: TTexto = (texto, arg1, arg2) => {
  return texto.replace(arg1, arg2); // Usa o método nativo `replace` para substituir a primeira ocorrência.
};

// Função `textoReplaceAll` que substitui todas as ocorrências de `arg1` (string de busca)
// por `arg2` (string de substituição) na string `texto`.
// Essa função também segue o tipo TTexto.
const textoReplaceAll: TTexto = (texto, arg1, arg2) => {
  return texto.replaceAll(arg1, arg2); // Usa o método nativo `replaceAll` para substituir todas as ocorrências.
};

// Função `processarTexto` que utiliza `textoReplace` e `textoReplaceAll` para processar uma string.
// Ela retorna uma string formatada com os resultados das operações.
const processarTexto: TTexto = (texto, arg1, arg2) => {
  // Chama a função `textoReplace` para substituir a primeira ocorrência.
  const resultadoReplace = textoReplace(texto, arg1, arg2);

  // Chama a função `textoReplaceAll` para substituir todas as ocorrências.
  const resultadoAll = textoReplaceAll(texto, arg1, arg2);

  // Retorna os resultados formatados como uma string multilinha.
  return `
Texto Original: ${texto}                     // A string original fornecida.
Resultado Replace: ${resultadoReplace}       // Resultado da substituição da primeira ocorrência.
Resultado Replace All: ${resultadoAll}       // Resultado da substituição de todas as ocorrências.
`;
};

// Chama a função `processarTexto` com um exemplo de string e os valores a serem buscados e substituídos.
const resultados = processarTexto(
  "Eu amo minha familia, amo muito, mais que tudo nesse mundo", // String original.
  "amo", // Substring a ser substituída.
  "adoro" // Substring de substituição.
);

// Exibe o resultado format
console.log(resultados);
