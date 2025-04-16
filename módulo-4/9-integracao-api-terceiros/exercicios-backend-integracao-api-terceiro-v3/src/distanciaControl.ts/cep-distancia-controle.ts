import { Request, Response } from "express";
import { buscarCeps } from "../util/buscarCeps";
import { calcularDistancia } from "../util/calcularCoordenadas";

export const calcularDistanciaEntreCeps = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { distancia } = req.body;

  if (!Array.isArray(distancia) || distancia.length !== 2) {
    res.status(400).json({
      mensagem: "Envie exatamente dois CEPs válidos no array 'distância'.",
    });
    return;
  }

  const [cepOrigem, cepDestino] = distancia;

  try {
    const coordenadasOrigem = await buscarCeps(cepOrigem);
    const coodernadasDestino = await buscarCeps(cepDestino);

    if (!coordenadasOrigem || !coodernadasDestino) {
      res.status(400).json({ mensagem: "CEPs inválidos." });
      return;
    }

    const distanciaEmKm = calcularDistancia({
      latitudeOrigem: Number(coordenadasOrigem.latitude),
      longitudeOrigem: Number(coordenadasOrigem.longitude),
      latitudeDestino: Number(coodernadasDestino.latitude),
      longitudeDestino: Number(coodernadasDestino.longitude),
    });

    res.status(200).json({ distancia: Number(distanciaEmKm.toFixed(2)) + "KM" });
  } catch (error) {
    console.error("Erro ao buscar CEPs:", error);
    res.status(400).json({ mensagem: "CEPs inválidos" });
  }
};
