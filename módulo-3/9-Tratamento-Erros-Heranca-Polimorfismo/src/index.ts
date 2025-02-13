import express, { Response, Request, Application } from "express";
import cowsay from "cowsay";
import { BadRequestError } from "./erros";

type TUsuario = {
  nome: string;
  email: string;
};

const app: Application = express();

app.use(express.json());

const usuarios: TUsuario[] = [];

const appInit = cowsay.say({
  text: "Olá",
});

app.get("/", (req: Request, res: Response) => {
  res.type("text/plain").status(200).send(appInit);
});

app.post("/usuario", (req: Request, res: Response) => {
  const { nome, email } = req.body;
  try {
    if (!nome) {
      throw new BadRequestError("O nome é obrigatório.");
    }

    if (!email) {
      throw new BadRequestError("O e-mail é obritório.");
    }

    usuarios.push({
      nome,
      email,
    });

    res.status(201).json({ nome, email });
    return;
  } catch (error) {
    if(error instanceof BadRequestError) {
      res.status(error.statusCode).json({ erro: error.message })
      return;
    }
    res.status(500).json({ message: "Erro interno do servidor."});
  }
});
app.listen(3000, () => console.log("Servidor Rodando na porta 3000"));
