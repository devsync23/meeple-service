
import jwt from 'jsonwebtoken'

export function authenticateUserMessages(req, res, next) {
    const token = req.headers.authorization
    console.log(token)
try{
    const authenticateUser = jwt.verify(token, "shhhhh")
    req.user = authenticateUser
    if(authenticateUser){
        next()
    }
}catch (err) {
    return res.send("cannot authenticate user")
}

next()
}

export function validateNewMessages(req, res, next) {
    console.log("validateNewMessage middleware")
    const {sourceLanguage, targetLanguage, text } = req.body;
    const aurthoer_email = req.user;

    if(sourceLanguage === null || targetLanguage === null || text === null){
            res.status = 404;
            return res.send(`no message has been made`)
    }

    req.body.createdAt = Date.now()

    next()
}
