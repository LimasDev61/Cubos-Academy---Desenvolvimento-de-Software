import esModuleDefault from "./7-export-default-esmodules.js"; // importa o módulo default

// Usando as propriedades do objeto importado
console.log(esModuleDefault.soma4(3, 4)); // 7
console.log(esModuleDefault.nome); // "Renan Alves da Silva Lima"
console.log(esModuleDefault.usuarios); // { nome: "Renan", email: "renanalves" }

