import { Request, Response } from "express";
import bancoDeDados from "../bancoDeDados";

export const mensagemInicial = (_req: Request, res: Response): void => {
  res.status(200).send("API de lista de convidados");
};

export const listarIdades = (req: Request, res: Response): void => {
  const { idadeMaxima } = req.query;

  const idadeMaximaNumero = Number(idadeMaxima);

  if (!idadeMaxima || isNaN(idadeMaximaNumero)) {
    res.status(200).json(bancoDeDados);
    return;
  }

  const convidadosEncontrados = bancoDeDados.filter(
    (convidado) => convidado.idade <= idadeMaximaNumero
  );

  res
    .status(200)
    .json(
      convidadosEncontrados.length > 0 ? convidadosEncontrados : bancoDeDados
    );
};

export const convidadoId = (req: Request, res: Response): void => {
  const { id } = req.params;

  const convidadosEncontrado = bancoDeDados.find(
    (convidado) => convidado.id === Number(id)
  );

  if (!convidadosEncontrado) {
    res.status(200).send("Convidado não encontrado");
    return;
  }

  res.send(convidadosEncontrado);
};
