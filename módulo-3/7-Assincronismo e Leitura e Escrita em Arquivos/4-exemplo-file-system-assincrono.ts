import fs from "fs/promises";

// Provando que é uma operação assincrona.
console.log("Antes de ler o arquivo.");

// Buffer
const texto1 = fs.readFile("./textos-testes/texto1.txt");

texto1.then((texto) => {
  console.log(texto.toString());
});

const texto2 = fs.readFile("./textos-testes/texto2.txt");

texto2.then((texto) => {
  console.log(texto.toString());
});

fs.writeFile("./textos-testes/teste.txt", "Renan é o Futuro, Olá, mundo!").then(
  () => {
    const teste = fs.readFile("./textos-testes/teste.txt");
    teste.then((texto) => {
      console.log(texto.toString());
    });
  }
);

console.log("Depois de ler o arquivo.");
