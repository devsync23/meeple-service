import express from 'express'
import { createMessage, registerUser, userLogin } from './user.controller.js'
import { validateRegisterData, validateLoginData, hashUserPass } from './user.middleware.js';

const router = express.Router()

router.post('/register', validateRegisterData, hashUserPass, registerUser);

router.post('/login', validateLoginData, userLogin);

// router.get('/my-profile', getUserProfile)

router.post('/message', createMessage);

export default router