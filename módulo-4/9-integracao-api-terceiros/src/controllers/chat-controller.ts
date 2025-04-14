import { Request, Response } from "express";
import apiOpenai from "../apiOpenAI";

export default class ChatController {
	async chat(req: Request, res: Response){
		const { prompt } = req.body

		if (!prompt) {
			return res.status(400).json({
				message: 'O prompt é obrigatório'
			})
		}
		
		try {
			const resultado = await apiOpenai.post('/chat/completions', {
				model: "gpt-3.5-turbo",
				messages: [
					{
						role: "user",
						content: prompt
					}
				]
			})

			const resposta = resultado.data.choices[0].message.content

			return res.json(resposta)
		} catch (error) {
			const erro = error as Error
			return res.status(400).json({
				message: erro.message
			})
		}
	}
}