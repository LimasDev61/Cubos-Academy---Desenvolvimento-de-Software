import { Router } from "express";
import UsuarioControlador from "./controladores/UsuarioControlador";
import LivroControlador from "./controladores/LivroControlador";
import LoginIntermediario from "./intermediarios/LoginIntermediario";

const rotas = Router();

const usuarioControlador = new UsuarioControlador();
const livroControlador = new LivroControlador();
const loginIntermediario = new LoginIntermediario();

rotas.post("/registro", usuarioControlador.registrar);
rotas.post("/login", usuarioControlador.logar);

rotas.use(loginIntermediario.validarLogin);

rotas.get("/filmes", livroControlador.listar);

export default rotas;
