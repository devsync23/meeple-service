import express from 'express'
import {
    registerUser,
    userLogin
} from './user.controllers.js'

const router = express.Router()

router
    .post('/register', registerUser)
    .post('/login', userLogin)

export default router
