// Função que utiliza o método substring para extrair uma parte da string
// com os índices inicial (init) e final (final). Caso o final seja omitido,
// extrai até o final da string.
const parteIf = (texto, init, final) => texto.substring(init, final);

// Função que primeiro remove espaços em branco nas extremidades da string
// usando trim(), e em seguida extrai uma parte da string com substring.
const textoSubTrim = (texto, init, final) =>
  texto.trim().substring(init, final);

// Define uma string base sem espaços e outra com espaços extras nas extremidades.
const texto = "Renan Alves, renan lima, RENAN ALVES DA SILVA LIMA";
const textoEspaco = " Renan Alves, renan lima, RENAN ALVES DA SILVA LIMA  ";

// Exibe a string com espaços no console.
console.log(textoEspaco); // " Renan Alves, renan lima, RENAN ALVES DA SILVA LIMA  "

// Utiliza a função parteInicial para extrair a substring a partir do índice 6.
// Nota: como o parâmetro final é omitido, extrai até o final da string.
const parte = parteIf(texto, 6, texto.length);

// Utiliza a função parteInicialFim para extrair a substring entre os índices 6 e 15.
const parte2 = parteIf(texto, 6, 15);

// Utiliza a função textoSubTrim para remover espaços e extrair do índice 0 até o final da string.
const parteTrim = textoSubTrim(textoEspaco, 0, textoEspaco.trim().length);

// Utiliza a função parteInicialFim para extrair os últimos 9 caracteres da string com espaços extras.
const parteSubtra = parteIf(
  textoEspaco.trim(),
  textoEspaco.trim().length - 9,
  textoEspaco.trim().length
);

// Exibe no console os resultados das funções aplicadas.
console.log(parte); // Parte extraída a partir do índice 6
console.log(parte2); // Parte extraída entre os índices 6 e 15
console.log(parteTrim); // Texto completo sem espaços extras
console.log(parteSubtra); // Últimos 9 caracteres da string sem espaços extras
