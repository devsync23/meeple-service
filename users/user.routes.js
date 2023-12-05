import express from "express"
import { userLogin, registerUser } from "./user.controller.js"
import { validateRegisterData, validateLoginData, hashUserPass } from "./user.middleware.js"

const router = express.Router();

router
    .post("/register", validateRegisterData, hashUserPass, registerUser)
    .post("/login", validateLoginData, userLogin);

export default router;
// export default - doesn't matter as much what you name it,
// vs using a named export w/ export const userRouter = router, then import as import { userRouter } from "...file/path/etc."
