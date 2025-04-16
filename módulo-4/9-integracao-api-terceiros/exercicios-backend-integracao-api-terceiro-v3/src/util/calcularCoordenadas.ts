import { TCalcularDistancia } from "../types/calcularDistancia";

const converterGrausParaRadianos = (graus: number): number => {
  return graus * (Math.PI / 180);
};

export const calcularDistancia = (parametro: TCalcularDistancia): number => {
  const raioDaTerra: number = 6371;
  const lat1: number = converterGrausParaRadianos(parametro.latitudeOrigem);
  const lat2: number = converterGrausParaRadianos(parametro.latitudeDestino);
  const deltaLat: number = converterGrausParaRadianos(
    parametro.latitudeDestino - parametro.latitudeOrigem
  );
  const deltaLon: number = converterGrausParaRadianos(
    parametro.longitudeDestino - parametro.longitudeOrigem
  );

  const haversineDistanciaAngular: number =
    Math.sin(deltaLat / 2) ** 2 +
    Math.cos(lat1) * Math.cos(lat2) * Math.sin(deltaLon / 2) ** 2;

  const distanciaAngularRaios: number =
    2 *
    Math.atan2(
      Math.sqrt(haversineDistanciaAngular),
      Math.sqrt(1 - haversineDistanciaAngular)
    );

  const resultado: number = raioDaTerra * distanciaAngularRaios;

  return resultado;
};
