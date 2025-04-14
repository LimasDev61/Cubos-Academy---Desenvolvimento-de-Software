import 'dotenv/config'
import express from 'express'
import ChatController from './controllers/chat-controller'

const app = express()

app.use(express.json())

app.post('/chat', new ChatController().chat)

app.listen(process.env.PORT, () => {
	console.log('Server started')
})