// Crie um sistema de distribuição de senha por ordem de chega
// a fila será representada pelo array ['Renan', 'Stephane', 'Amora', 'Francisco']
// Você deve criar uma nova lista onde cada item repsente um objeto contendo a senha
// o nome da pessoa, a senha começa sempre em 1;

// Passo 1: Criando Array;
const FILA: string[] = ['Renan', 'Stephane', 'Amora', 'Francisco'];

// Tipando nova lista
type TPessoas = {
    nome: string
    senha: number
};

// Array tipado
const PESSOAS: TPessoas[] = [];

// Passo 2: Fila com senha
for(let i = 0; i < FILA.length; i++) {
    PESSOAS[i] = {
        nome: FILA[i],
        senha: i + 1
    };
};

console.log(PESSOAS);