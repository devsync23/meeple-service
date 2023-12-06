import express from 'express'

import {
    getMessage,
    createMessage
} from './message.controller.js'

import {
    authenticateUserMessages,
    validateUserMessages
} from './message.middleware.js'


const router = express.Router()

router
    .get('/checkMessages', authenticateUserMessages, getMessage)
    .post('/postMessages', authenticateUserMessages, validateUserMessages, createMessage)

export default router
