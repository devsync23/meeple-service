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
    .get('/check-message', authenticateUserMessages, getMessage)
    .post('/new-message', authenticateUserMessages, validateUserMessages, createMessage)

export default router

// Authentication Code
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoidGVzdCIsImFnZSI6MzAsInBob25lIjoxMjM0NTY3ODksInZlcmlmaWVkIjpmYWxzZSwiZW1haWwiOiJ0ZXN0QHRlc3QuY29tIiwiaWF0IjoxNzAxNzQ2NTQwfQ.6l7D1nTDjdqFqyeKWZCAeqH4pyuEMEO7VI-WaYPU6CY
