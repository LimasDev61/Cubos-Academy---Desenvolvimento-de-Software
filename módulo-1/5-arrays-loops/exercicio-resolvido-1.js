// Crie um array com 5 nomes de países
// Adicione um país ao fim da lista
// Escreva a lista na tela
// Altera o quinto país da lista para um novo país
// Escreva a lista na tela
// Escreva o último país da lista na tela
// Escreva o segundo país da lista na tela
// Escreva o país de indice 2 na tela

// Passo 1: 5 nomes de países;
let paises = ['Brasil', 'França', 'Japão', 'Alemanha', 'Portugal'];

// Passo 2: Adicione um país ao fim da lista;
paises[paises.length] = 'Canadá';

// Passo 3: Escreva a lista na tela;
console.log(paises);

// Passo 4: Alterar o quinto país;
paises[4] = 'Chile';

// Passo 5: Escreva a list na tela;
console.log(paises);

// Passo 6: Escreva o nome do último país;
console.log(paises[paises.length - 1]);

// Passo 7: Escreva o segundo país da lista na tela;
console.log(paises[1]);

// Passo 8: Escreva o país de indice 2 na tela;
console.log(paises[2]);