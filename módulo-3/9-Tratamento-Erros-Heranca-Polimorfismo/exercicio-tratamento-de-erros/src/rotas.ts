import { Router } from "express";
import TarefasControlador from "./controladores/TarefasControlador";

const rotas = Router();

const tarefasControlador = new TarefasControlador();

rotas.get("/tarefas", tarefasControlador.listar);
rotas.post("/tarefas", tarefasControlador.criar);

export default rotas;
