import { Router } from "express";
import { createBook } from "./controls/create-book";
import { listBooks } from "./controls/list";
import { editBook } from "./controls/edit-book";
import { deleteBook } from "./controls/delet-book";

export const rotas = Router();

rotas.post("/addBooks", createBook);
rotas.get("/", listBooks);
rotas.put("/editBooks/:id", editBook);
rotas.delete("/deleteBooks/:id", deleteBook);
