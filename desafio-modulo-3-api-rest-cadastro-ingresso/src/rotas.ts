import { Router } from "express";
import { home } from "./controles/home";
import { filtrarPreco } from "./controles/maxPreco";
import verificarPreco from "./intermediarios/maxPrecoMiddleware";
import { validarUsuario } from "./intermediarios/validarUsuario";
import { cadastrarUsuario } from "./controles/cadastrarUsuario";
import { passLogin } from "./intermediarios/validarLogin";
import { loginUsuario } from "./controles/comprovante";
import { validarToken } from "./intermediarios/validarToken";
import { validarCamposCompra } from "./intermediarios/validarCompra";
import { criarCompra } from "./controles/cadastrarCompras";
import { cancelarCompra } from "./controles/deletarCompra";
import { procurarCompras } from "./controles/procurarCompras";

const rotas = Router();

rotas.get("/", home);
rotas.get("/eventos", verificarPreco, filtrarPreco);
rotas.post("/usuarios", validarUsuario, cadastrarUsuario);
rotas.post("/login", passLogin, loginUsuario);

rotas.use(validarToken);
rotas.post("/compras", validarCamposCompra, criarCompra);
rotas.get("/compras", procurarCompras);
rotas.delete("/compras/:id", cancelarCompra);
export default rotas;
