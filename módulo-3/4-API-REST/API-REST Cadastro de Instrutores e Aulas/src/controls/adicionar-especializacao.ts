import { Request, Response } from "express";
import instrutoresS, {
  TInstrutor,
} from "../../simuladores-de-dados/simulador-banco-dados";
import {
  especialidades,
  TEspecialidades,
} from "../../simuladores-de-dados/simulador-dados-especialidades";

// Função auxiliar para validar e atualizar especializações
const atualizarEspecializacoes = (
  especializacoes: number[] | undefined,
  instrutor: TInstrutor
): boolean => {
  if (especializacoes !== undefined) {
    const especialidadesValidas = especializacoes
      .map((id) => especialidades.find((e) => e.id === id))
      .filter((e) => e !== undefined)
      .map((e: TEspecialidades) => e!.espec); // Mapeia para os nomes das especializações

    if (!especialidadesValidas.length && especializacoes.length) {
      return false;
    }

    instrutor.espec = especialidadesValidas;
  }
  return true;
};

// Rota para atualizar especializações de um instrutor
export const atualizarEspecializacao = (req: Request, res: Response): void => {
  const id = parseInt(req.params.id, 10);

  // Buscar o instrutor pelo ID
  const instrutorExistente = instrutoresS.find(
    (instrutor) => instrutor.id === id
  );

  if (!instrutorExistente) {
    res.status(404).json({
      message: `Instrutor com ID ${id} não encontrado.`,
    });
    return;
  }

  // Atualizar especializações
  if (
    !atualizarEspecializacoes(req.body.espec as number[], instrutorExistente)
  ) {
    res.status(400).json({
      message: `Especialidades inválidas para o instrutor com ID ${id}.`,
    });
    return;
  }

  res.status(200).json({
    message: "Especializações do instrutor atualizadas com sucesso.",
    instrutor: instrutorExistente,
  });
};
