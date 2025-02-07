import fs from "fs/promises";

const atualizarBancoDeDados = async () => {
  const resultado = await fs.readFile("banco-de-dados.json");
  const bancoDeDados = JSON.parse(resultado.toString());
  bancoDeDados.usuarios.push({
    nome: "Amora Maria",
    email: "bbdopapai@gmail.com",
  });
  await fs.writeFile(
    "banco-de-dados.json",
    JSON.stringify(bancoDeDados, null, 2)
  );
  console.log("Arquivo atualizado com sucesso!");
};

atualizarBancoDeDados();

const principal = async () => {
  const bancoDeDados = await fs.readFile("banco-de-dados.json");
  console.log(JSON.parse(bancoDeDados.toString()));
};

principal();
