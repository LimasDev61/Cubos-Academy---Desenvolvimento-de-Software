import { Router } from "express";
import { calcularDistanciaEntreCeps } from "./distanciaControl.ts/cep-distancia-controle";

export const routes = Router();

routes.post("/distancia", calcularDistanciaEntreCeps);
