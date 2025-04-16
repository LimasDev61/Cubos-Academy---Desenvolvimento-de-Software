import { cepGet } from "../axios/cepGet";
import { TCepResposta } from "../types/cepResposta";
import { TCoordenadas } from "../types/coodernadas";

export const buscarCeps = async (
  cep: string
): Promise<TCoordenadas | undefined> => {
  try {
    const resultado = await cepGet.get<TCepResposta>(`/api/cep/v2/${cep}`);

    const latitude = Number(resultado.data.location.coordinates.latitude);
    const longitude = Number(resultado.data.location.coordinates.longitude);

    return { latitude, longitude };
  } catch {
    console.log("Cep nao encontrado", cep);
    return undefined;
  }
};
