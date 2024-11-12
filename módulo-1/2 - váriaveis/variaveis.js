// Usando a palavra VAR - Serve para o Escopo Global. Utilizando, Padrão camelCase
// Evite usar a forma ultrapassada do var, foi atualizado para o let a parti do ES6 -
var qualquerCoisa = 'Renan está aqui';

// Utilizado para a escrita(ou saída) dos dados armazenados nas variáveis para a visualização
console.log(qualquerCoisa + '\n');

// Valor reatribuido, sem chamar a palavra reservada VAR - utilizamos apenas uma vez para cada variável
qualquerCoisa = 123;

// O novo valor reatribuido vai ter uma nova saída, graças a lógica algorítmica;
console.log(qualquerCoisa + '\n');

// Padrão atual LET utilizado para atribuição de variáveis, implementado no ES6.
let nome = 'Renan A.S. Lima';
let idade = 33;

// Console.log, já explicado.
console.log('Nome: ' + nome + '\n' + 'Idade: ' + idade);

// Valor reatribuido
nome = 'Amora e Francisco';
idade = 7;

console.log('Nome: ' + nome + '\n' + 'Idade: ' + idade);

// Feito para definir constantes, são valores imutáveis
const EMAIL = 'renanalves000@email.com';

console.log('e-email ' + EMAIL);