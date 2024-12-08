// Define um tipo TTexto com duas propriedades:
// - text: uma string que representa o texto que será processado.
// - substituir: um número que especifica o comprimento do preenchimento ou a quantidade de caracteres a serem considerados.
type TTexto = {
  text: string;
  substituir: number;
};

// Define um tipo TObjeto, que é uma função que recebe um objeto do tipo TTexto como parâmetro e retorna uma string.
type TObjeto = (params: TTexto) => string;

// Função que usa o método padStart para preencher o início da string com o caractere "*",
// até atingir o comprimento especificado por `substituir`.
const functionPadStart: TObjeto = ({ text, substituir }) => {
  return text.padStart(substituir, "*");
};

// Função que usa o método padEnd para preencher o final da string com o caractere "*",
// até atingir o comprimento especificado por `substituir`.
const functionPadEnd: TObjeto = ({ text, substituir }) => {
  return text.padEnd(substituir, "*");
};

// Função que corta a string da posição inicial até 4 caracteres antes do final
// e então aplica o preenchimento no final da string com o caractere "*",
// até atingir o comprimento especificado por `substituir`.
const functionSlice: TObjeto = ({ text, substituir }) => {
  return text.slice(0, -4).padEnd(substituir, "*");
};

// Função que processa o texto, aplicando as três funções de preenchimento e corte.
// Retorna uma string formatada mostrando o resultado de cada uma das funções.
const processarText = (text: TTexto): string => {
  // Aplica as funções de preenchimento e corte ao texto.
  const resultadoStart = functionPadStart(text);
  const resultadoEnd = functionPadEnd(text);
  const resultSlice = functionSlice(text);

  // Retorna uma string que inclui os resultados de todas as funções, separados por " | ".
  return `PadStart: ${resultadoStart} | PadEnd: ${resultadoEnd} | 
    PadSlice: ${resultSlice}`;
};

// Testa a função processarText com um exemplo de entrada.
// O texto "Renan Alves da Silva Lima" e o comprimento de preenchimento especificado como 30.
const resultado = processarText({
  text: "Renan Alves da Silva Lima",
  substituir: 30,
});

// Exibe o resultado da função processarText no console.
console.log(resultado);
