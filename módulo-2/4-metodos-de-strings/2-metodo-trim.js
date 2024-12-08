const texto = "      Alguma coisa   ";

// Exibe a string original com espaços em branco no início e no final.
console.log(texto);

// Exibe o número total de caracteres na string, incluindo os espaços em branco.
console.log(texto.length); // Saída: 20

// Remove os espaços em branco no início e no final da string usando o método `.trim()`.
const textoSemEspaco = texto.trim();

// Exibe o número de caracteres após a remoção dos espaços em branco.
console.log(textoSemEspaco.length); // Saída: 13

// Exibe a string sem os espaços em branco nas extremidades.
console.log(textoSemEspaco);

const usuario = {
  email: "renan@gmail.com", // E-mail do usuário cadastrado.
  senha: "abc123", // Senha do usuário cadastrada.
};

// Exemplo de validação de login.
const email = " renan@gmail.com"; // E-mail inserido pelo usuário com espaço inicial.
const senha = "abc123"; // Senha inserida pelo usuário.

// Compara o e-mail cadastrado com o e-mail inserido, removendo os espaços extras.
// O método `.trim()` garante que espaços em branco acidentais não causem erros de validação.
console.log(usuario.email === email.trim()); // Saída: true (os e-mails coincidem após o trim)
