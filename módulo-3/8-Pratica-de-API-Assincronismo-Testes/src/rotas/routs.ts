import { Router } from "express";
import { appInit } from "../controladores/inicio";
import CadastroLink from "../controladores/cadastroLink";
import { cadastroCheck } from "../intermediarios/cadastroCheck";

export const rots = Router();

const links = new CadastroLink();

rots.get("/", appInit);
rots.post("/", cadastroCheck, links.control.bind(links));
rots.get("/:indentificador");