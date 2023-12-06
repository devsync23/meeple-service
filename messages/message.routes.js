import express from "express"
import { getMessages, createMessages } from "./message.controller.js"
import { authenticateUserMessages, validateNewMessage } from "./message.middleware.js"

const router = express.Router();

router
    .get("/my-messages", authenticateUserMessages, getMessages)
    .post("/new-message", authenticateUserMessages, validateNewMessage, createMessages);

export default router;
