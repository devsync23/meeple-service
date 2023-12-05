import express from "express";

import { getMessage, createMessage } from "./message.controller.js";
import { authenticateUserMessages, validateNewMessages } from "./message.middleware.js";

const router = express.Router()

router.post('/new-messages', authenticateUserMessages, validateNewMessages, createMessage)
router.get('/my-messages', authenticateUserMessages, getMessage)


export default router
