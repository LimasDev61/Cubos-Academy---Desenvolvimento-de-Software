// Código com problema de aninhamento excessivo = callback hell

import fs from "fs/promises";

async function atualizarBancoDeDados() {
  try {
    const resultado = await fs.readFile("banco-de-dados.json");
    const bancoDeDados = JSON.parse(resultado.toString());

    bancoDeDados.usuarios.push({
      nome: "Stephane",
      email: "stephane@gmail.com",
    });

    await fs.writeFile(
      "banco-de-dados.json",
      JSON.stringify(bancoDeDados, null, 2)
    );

    console.log("Arquivo atualizado com sucesso!");
  } catch (erro) {
    console.log("Erro ao acessar o arquivo:", erro);
  }
}

atualizarBancoDeDados();
