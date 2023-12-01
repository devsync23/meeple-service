import express from "express"
import { getMessages, newMessages } from "./message.controller.js"
import { registeredUserMessages, validateMessage } from './message.middleware.js'
const router = express.Router()

router
    .get('/my-messages', registeredUserMessages, getMessages)
    .post('/new-messages', registeredUserMessages, validateMessage, newMessages)

export default router
