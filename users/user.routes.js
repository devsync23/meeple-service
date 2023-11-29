import express from 'express'

import {
    registerUser,
    userLogin
} from './user.controllers.js'

import {
    validateRegisterData,
    validateLoginData
} from './user.middleware.js'


const router = express.Router()

router
    .post('/register', validateRegisterData, registerUser)
    .post('/login', validateLoginData, userLogin)

export default router
