
import jwt from 'jsonwebtoken'

export async function authenticateUserMessages(req, res, next) {
    const token = req.headers.authorization.split(' ')[1]
    console.log(token)
try{
    const authenticateUser = await jwt.verify(token, "very-cool-secret")
    req.user = authenticateUser
    if(authenticateUser){
        next()
    }
}catch (err) {
    return res.send("cannot authenticate user")
}
}

export function validateNewMessages(req, res, next) {
    console.log("validateNewMessage middleware")
    const {sourceLanguage, targetLanguage, text } = req.body;
    const aurthoer_email = req.user;
    let existingMessage = JSON.parse(fs.readFileSync('./messages/message.json', 'utf8'))
    if(existingMessage[newMessage]){
            res.status = 404;
            return res.send(`${newMessage} has already been here`)
    }

    req.body.createdAt = Date.now()

    next()
}
