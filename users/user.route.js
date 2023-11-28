import express from 'express'
import { createMessage, registerUser, userLogin } from './user.controller.js'

const router = express.Router()

router.post('/register', registerUser);

router.post('/login', userLogin);

router.post('/message', createMessage);

export default router