import { Router } from "express";
import { appInit } from "../controladores/inicio";
import CadastroLink from "../controladores/cadastroLink";
import { cadastroCheck } from "../intermediarios/cadastroCheck";
import ObterLink from "../controladores/obterLink";

export const rots = Router();

const links = new CadastroLink();
const linkObter = new ObterLink();

rots.get("/", appInit);
rots.post("/", cadastroCheck, links.control.bind(links));
rots.get("/:id", linkObter.control.bind(linkObter));