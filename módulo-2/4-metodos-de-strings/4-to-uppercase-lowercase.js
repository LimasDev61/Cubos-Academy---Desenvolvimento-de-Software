// Função que converte uma string para letras maiúsculas usando o método toUpperCase.
const convertToUp = (text) => text.toUpperCase();

// Função que converte uma string para letras minúsculas usando o método toLowerCase.
const convertToLower = (text) => text.toLowerCase();

// Define uma string de exemplo contendo nomes em diferentes formatações.
const texto = "Renan Alves, renan lima, RENAN ALVES DA SILVA LIMA";

// Chama a função para converter o texto para letras maiúsculas e armazena o resultado.
const textoUp = convertToUp(texto);

// Chama a função para converter o texto para letras minúsculas e armazena o resultado.
const textoLower = convertToLower(texto);

// Exibe o texto convertido para letras maiúsculas no console.
console.log(textoUp);

// Exibe o texto convertido para letras minúsculas no console.
console.log(textoLower);

// Exibe o texto original no console, garantindo que ele permaneceu inalterado.
console.log(`Texto Original: ${texto}`);
