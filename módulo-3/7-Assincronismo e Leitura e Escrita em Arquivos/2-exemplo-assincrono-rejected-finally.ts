function verificarIdade(idade: number): Promise<string> {
    return new Promise((resolve, reject) => {
        if (idade >= 18) {
            resolve(`${idade} maior`);
            return;
        }      
            reject(`${idade} menor`);
    });
}

console.log("Iniciou a fila da festa: ")

verificarIdade(18).then(resultado => {
    console.log("Idade: ", resultado);
}).catch(erro => {
    console.log("Idade: ", erro);
}).finally(() => {
    console.log("Foi executado ao final da promessa");
})

verificarIdade(17).then(resultado => {
    console.log("Idade: ", resultado);
}).catch(erro => {
    console.log("Idade: ", erro);
}).finally(() => {
    console.log("Foi executado ao final da promessa");
})


console.log("Fim da fila da festa: ");