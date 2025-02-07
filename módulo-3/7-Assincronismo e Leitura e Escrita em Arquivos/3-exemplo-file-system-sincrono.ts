import fs from "fs";

// Provando que é uma operação sincrona.
console.log("Antes de ler o arquivo.");

// Buffer
const texto1 = fs.readFileSync("./textos-testes/texto1.txt");
console.log(texto1.toString());

// Escrevendo arquivos de texto e substituindo o conteudo do arquivo
fs.writeFileSync("./textos-testes/texto1.txt", "Olá, mundo!");

// Texto já editado
const textoEditado = fs.readFileSync("./textos-testes/texto1.txt");
console.log(textoEditado.toString());

console.log("Depois de ler o arquivo.");

// Criando um novo arquivo
fs.writeFileSync("./textos-testes/texto2.txt", "Renan Futuro, Olá, mundo!");

// Lendo o novo arquivo
const novoArquivo = fs.readFileSync("./textos-testes/texto2.txt");
console.log(novoArquivo.toString());



