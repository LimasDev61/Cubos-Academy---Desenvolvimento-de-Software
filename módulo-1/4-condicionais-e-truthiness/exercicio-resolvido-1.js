// Exercício resolvido em JS
// Escreva um programa que receba uma média escolar e imprima o resultado
// Conforme as condições abaixo:
// Média menor que 4 -> Reprovado
// Média maior ou igual a 4 e menor que 7 -> recuperação
// Média maior ou igual a 7 -> Aprovado

const NOTA = 3;
let media;

if(NOTA < 4) {
    media = 'REPROVADO';
}
else if(NOTA < 7) {
    media = 'RECUPERAÇÃO';
}
else {
    media = 'APROVADO';
}

console.log(media);