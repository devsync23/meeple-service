import express from 'express'

import {
    registerUser,
    userLogin
} from './user.controller.js'

import {
    validateRegisterData,
    validateLoginData,
    hashUserPass
} from './user.middleware.js'


const router = express.Router()

router
    .post('/register', validateRegisterData, hashUserPass, registerUser)
    .post('/login', validateLoginData, userLogin)

export default router
