import express from "express"
import { getMessages, newMessages } from "./message.controller.js"
import { validateMessage } from './message.middleware.js'
const router = express.Router()

router
    .get('/my-messages', getMessages)
    .post('/new-messages', validateMessage, newMessages)

export default router
