import express from "express"
import { loginUser, registerUser } from "./user.controller.js"

const router = express.Router()

router.post('/register', registerUser)

router.post('/login', loginUser)

export default router
// export default - doesn't matter as much what you name it,
// vs using a named export w/ export const userRouter = router, then import as import { userRouter } from "...file/path/etc."
