// Declarando variáveis
// let nome = 'Renan '; // o espaço dentro da variável declarada, me permite a opção
// let sobrenome = 'Sobrenome'; // de imprimir no console, sem necessidade do ' ' concatenado
let nome = 'Renan';
let sobrenome = 'Lima'

// Concatenação utilizando o operado +
console.log(nome + ' ' + sobrenome);

// Concatenção utilizando o método concat
console.log(nome.concat(' ', sobrenome));

// Concatenção utilizando template literals
console.log(`${nome} ${sobrenome}`);