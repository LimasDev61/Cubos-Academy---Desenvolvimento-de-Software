const texto = "Meu primeiro texto";

// A propriedade `.length` é usada para obter a quantidade total de caracteres em uma string.
// Ela retorna o número de letras, números, espaços e símbolos presentes no texto.

// Em JavaScript, strings são valores primitivos, mas o mecanismo interno converte
// automaticamente a string em um objeto temporário (um "wrapper") para permitir
// o acesso às suas propriedades e métodos. Isso é o que torna possível usar `.length`
// em strings como se fossem objetos.

// Exemplo:
// No comando `console.log(texto.length)`, `texto` é a string e `length` é a propriedade
// que fornece o tamanho da string. Aqui, a string "Meu primeiro texto" tem 18 caracteres.

console.log(texto.length); // Saída: 18
