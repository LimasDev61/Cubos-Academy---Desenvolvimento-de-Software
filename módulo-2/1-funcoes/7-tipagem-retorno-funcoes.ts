// Tipando o retorno de uma função
// : após o parâmetro define o tipo de retorno da função
function nomeCompleto(nome: string, sobrenome: string): string {
    return `${nome} ${sobrenome}`;
}

// Saída da função nomeCompleto
console.log(nomeCompleto('Renan', 'Lima'));

// Tipo void, sem retorno da função, deixando de forma implicita
const nomeCompleto2 = (nome: string, sobrenome: string): void => {
    console.log(`${nome} ${sobrenome}`);
}

// Saída função nomeCompleto2: void
nomeCompleto2('Renan', 'Lima');