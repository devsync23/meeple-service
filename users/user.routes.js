import express from 'express'

import {
    registerUser,
    userLogin
} from './user.controllers.js'

import {
    hashUserPass,
    validateRegisterData,
    validateLoginData
} from './user.middleware.js'

const router = express.Router()

router
    .post('/register', validateRegisterData, hashUserPass, registerUser)
    .post('/login', validateLoginData, userLogin)

export default router
