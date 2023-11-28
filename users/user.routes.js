import express from 'express'
import { registerUser } from './user.controllers.js'

const router = express.Router()

router.get('/register', registerUser)

export default router
