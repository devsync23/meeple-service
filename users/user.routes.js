import  express from "express";
import { registerUser, userLogin } from "./user.controller.js";
import { validateRegisterData, validateLoginData } from "./user.middleware.js";

const router = express.Router()

router.post('/register', validateRegisterData, registerUser)
router.post('/login', validateLoginData, userLogin)

export default router
