import express from 'express'

import {
    getMessages,
    createMessage
} from './message.controller.js'

import {
    authenticateUserMessages,
    validateUserMessages
} from './message.middleware.js'


const router = express.Router()

router
    .get('/my-messages', authenticateUserMessages, getMessages)
    .post('/new-message', authenticateUserMessages, validateUserMessages, createMessage)

export default router
