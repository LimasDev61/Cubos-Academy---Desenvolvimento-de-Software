// Conceito de Truthiness em TS;
// Condição de coersão, onde o JS transforma valores diferentes de booleanos em:
// Truthy = Verdadeiro, quando se tem valores diferente de 0;
// Falsy = Quando tem valores igual a 0;

// Variável tipo const, para armazenar o valor 32 - Truthy;
const IDADE: number = 32;
// Variávels tipo const para armazenar uma String vazia - Falsy
const NOME: String = '';

// Condição Truthy = True;
if(IDADE) {
    console.log('Verdadeiro');
} // Condição Falsy = False;
else {
    console.log('Falso');
}

// Condição Truthy = True;
if(NOME) {
    console.log('Verdadeiro');
} // Condição Falsy = False;
else {
    console.log('Falso');
}