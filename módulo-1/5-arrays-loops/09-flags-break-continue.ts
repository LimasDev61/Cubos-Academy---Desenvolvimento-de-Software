// Array[4 INDICES] com 5 elementos;
const FRUTAS: string[] = ['banana', 'abacaxi', 'maçã', 'pera', 'uva', 'manga'];

// Criando o loop FOR OF para percorrer os elementos do array;
console.log('utilide do BREAK:')
for(let item of FRUTAS) {
    if(item === 'pera') {
    break; // interrompe o fluxo do loop até ele encontrar o que foi ordenado
    }
    else {
        console.log(item); // resultado vai até 'maçã';
    }
}

console.log('\n');

console.log('Utilidade do CONTINUE:')
for(let item of FRUTAS) {
    if(item === 'pera') {
        continue; // pula a interação atual -'pera', e da continuidade após ele.
    }
    else {
        console.log(item); // imprime todos os elementos do array - 1;
    }
}