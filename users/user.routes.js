import express from 'express'
import { userLogin, registerUser } from './user.controller.js'

const router = express.Router()

router.post('/register', registerUser)
router.post('/login', userLogin)

export default router