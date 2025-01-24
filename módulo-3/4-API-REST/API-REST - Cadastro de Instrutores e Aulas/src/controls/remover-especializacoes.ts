import { Request, Response } from "express";
import instrutoresS from "../../simuladores-de-dados/simulador-banco-dados";
import { especialidades } from "../../simuladores-de-dados/simulador-dados-especialidades";

export const removerEspecializacao = (req: Request, res: Response): void => {
  const idInstrutor = parseInt(req.params.id, 10); // Captura o ID do instrutor da URL
  const { espec } = req.body; // Captura o corpo da requisição com os IDs das especializações

  const instrutor = instrutoresS.find((i) => i.id === idInstrutor);

  if (!instrutor) {
    res.status(404).json({
      message: `Instrutor com ID ${idInstrutor} não encontrado.`,
    });
    return;
  }

  // Verificando se as especializações fornecidas existem para o instrutor
  const especialidadesRemover = (espec as number[])
    .map((id) => especialidades.find((e) => e.id === id))
    .filter((e) => e !== undefined) // Filtrando as especializações válidas
    .map((e) => e!.espec); // Pegando os nomes das especializações

  if (especialidadesRemover.length === 0) {
    res.status(400).json({
      message: `Especialidades fornecidas para remoção não encontradas para o instrutor com ID ${idInstrutor}.`,
    });
    return;
  }

  // Removendo as especializações do instrutor
  instrutor.espec = instrutor.espec.filter(
    (e) => !especialidadesRemover.includes(e)
  );

  res.status(200).json({
    message: "Especializações removidas com sucesso.",
    instrutor: instrutor,
  });
};
