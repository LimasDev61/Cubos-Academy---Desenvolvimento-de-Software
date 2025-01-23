import { Request, Response } from "express"
import bancoDeDados from "../../bancoDeDados"
import ExameCreate from "../model/modelExame"

export const criar = (req: Request, res: Response): void => {
    const {
        examinador,
        candidato,
        quantidade_eliminatorias,
        quantidade_graves,
        quantidade_medias,
        quantidade_leves,
    } = req.body

    const newExame = new ExameCreate(
        examinador,
        candidato,
        quantidade_eliminatorias,
        quantidade_graves,
        quantidade_medias,
        quantidade_leves
    )

    bancoDeDados.exames.push({
        id: newExame.id, 
        examinador: newExame.getExaminador(),
        candidato: newExame.getCandidato(),
        quantidadeEliminatorias: newExame.getQuantidadeEliminatorias(),
        quantidadeGraves: newExame.getQuantidadeGraves(),
        quantidadeMedias: newExame.getQuantidadeMedias(),
        quantidadeLeves: newExame.getQuantidadeLeves(),
        aprovado: newExame.getAprovado(),
    });

    res.status(200).json({
        id: newExame.id,
        examinador: newExame.getExaminador(),
        candidato: newExame.getCandidato(),
        quantidadeEliminatorias: newExame.getQuantidadeEliminatorias(),
        quantidadeGraves: newExame.getQuantidadeGraves(),
        quantidadeMedias: newExame.getQuantidadeMedias(),
        quantidadeLeves: newExame.getQuantidadeLeves(),
    });
}