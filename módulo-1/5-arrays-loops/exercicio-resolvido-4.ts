// Faça um programa que percorra uma lista de usuários
// para encontrar o usuário "João". Caso encontre, imprima
// "Encontrado", caso o contrário, imprima "Não encontrado"

const LISTA: string[] = ['Renan', 'Amora', 'Francisco', 'João', 'Rodolfo'];

let posicao: number = 0; // variável para ver a posição do 'João' no array;
let encontrado: boolean = false; // verifica se é verdade que João foi encontrado;

// Passo 1: percorrer a lista;
for(let item of LISTA) {
    // Passo 2: "Encontrado".
    if(item === 'João') {
        console.log(item + ' foi encontrado, na posição: ' + posicao);
        encontrado = true;
        break;
    }
    posicao++;
}

// Passo 2: "Não encontrado"
if(!encontrado) {
    console.log('Não foi encontrado na lista');
}

// TAMBÉM, podemos utilizar o:
// if (posicao === LISTA.length) {
//    console.log('João não foi encontrado na lista.');
// }
// para mostrar se não foi encontrado;