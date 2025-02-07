import express, { Request, Response, Application } from "express";
import fs from "fs/promises";

const app: Application = express();

app.use(express.json());

app.get("/", async (req: Request, res: Response): Promise<void> => {
  const bancoDeDados = await fs.readFile("banco-de-dados.json");
  const resultado = JSON.parse(bancoDeDados.toString());

  res.status(200).json(resultado.usuarios);
  return;
});

app.post("/usuarios", async (req: Request, res: Response): Promise<void> => {
  const { nome, email } = req.body;
  const bancoDeDados = await fs.readFile("banco-de-dados.json");
  const resultado = JSON.parse(bancoDeDados.toString());

  resultado.usuarios.push({
    nome,
    email,
  });

  await fs.writeFile("banco-de-dados.json", JSON.stringify(resultado, null, 2));

  res.status(201).json({ resultado });
  return;
});

app.listen(3000, () => console.log("Server rodando na porta 3000"));
