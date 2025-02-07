import fs from "fs/promises";

fs.readFile("./banco-de-dados.json")
  .then((resultado) => {
    const json = resultado.toString();
    const bancoDeDados = JSON.parse(json);

    bancoDeDados.usuarios.push({
      nome: "Maria",
      email: "maria@gmail",
    });

    fs.writeFile("./banco-de-dados.json", JSON.stringify(bancoDeDados, null, 2));
  })
  .catch(() => {
    console.log("Arquivo não existe!");
  });
