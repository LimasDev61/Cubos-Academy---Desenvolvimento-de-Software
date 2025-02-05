
console.log("primeira etapa");


console.log("terceira etapa");

// Promisses tem três estados

// 1º Pendente - (Pending)

// 2º Resolvido - (Fulfilled)

// 3º Rejeitado - (Rejected)

// Teste de promisses - Resolved
async function imprimir(texto: string) {
    return new Promise((resolve, reject) => {
        resolve(texto);
    })
}

// Teste de promisses - resolved
imprimir("Segunda etapa").then(resultado => {
    console.log(resultado);
});