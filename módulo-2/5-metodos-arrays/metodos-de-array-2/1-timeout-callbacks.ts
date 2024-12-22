// Definindo um tipo para a função
// O tipo `TTexto` é uma definição de tipo que representa uma função que:
// - Recebe um argumento do tipo string (`text: string`).
// - Não retorna nenhum valor (`void`).
type TTexto = (text: string) => void;

// Definindo a função `imprimir`
// Essa função segue o tipo `TTexto`.
// Ela exibe imediatamente no console o texto fornecido como argumento.
const imprimir: TTexto = (text) => {  
    console.log(text); // Exibe o texto no console.
}

// Definindo a função `imprimirComDelay` usando uma arrow function
// Essa função também segue o tipo `TTexto`.
// Ela usa `setTimeout` para exibir o texto no console após 1 segundo (1000ms).
const imprimirComDelay: TTexto = (text) => {
    setTimeout(() => { 
        console.log(text); // Exibe o texto após o tempo definido no `setTimeout`.
    }, 1000); // Tempo de espera de 1 segundo (1000ms).
}

// Definindo a função `imprimirComDelay2` usando a sintaxe de função tradicional
// Assim como `imprimirComDelay`, esta função usa `setTimeout` para exibir o texto
// no console após 1 segundo, mas é escrita com a sintaxe de função tradicional.
const imprimirComDelay2: TTexto = function(text) {
    setTimeout(function() {
        console.log(text); // Exibe o texto após o tempo definido no `setTimeout`.
    }, 1000); // Tempo de espera de 1 segundo (1000ms).
}

// Chamando as funções para demonstração:

// Chama a função `imprimir` para exibir "Olá mundo" imediatamente no console.
imprimir("Olá mundo");

// Chama a função `imprimirComDelay` para exibir "Olá mundo" no console após 1 segundo.
imprimirComDelay("Olá mundo");

// Chama a função `imprimirComDelay2` para exibir "Olá mundo" no console após 1 segundo.
// Funcionalmente, é idêntica à `imprimirComDelay`, mas usa sintaxe diferente.
imprimirComDelay2("Olá mundo");
