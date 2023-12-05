import fs from 'fs'
// import bcrypt from 'bcrypt'
// import jwt from 'jsonwebtoken'

export function getMessage(req, res){
    // const newMessage = req.body;
    // console.log(req.body)
    // const formattedMessage = {
    //     [newMessage]: {
    //         text: newMessage.text,
    //         aurthor_id: newMessage.aurthor_id
    //     }
    // }

    // let existingMessage = JSON.parse(fs.readFileSync('./messages/message.json', 'utf8'))
    // if(existingMessage[newMessage]){
    //         res.status = 404;
    //         return res.send(`${newMessage} has already been here`)
    // }
    // existingMessage = {...existingMessage, ...formattedMessage }
    // fs.writeFileSync('./messages/messages.json', JSON.stringify(existingMessage, null, 4))
    res.send(`you had your message!`)
}

export function createMessage(req, res){
    // const { email, password } = req.body
    // const existingUser = req.userToLogin
    // if(doPasswordMatch) {
    //     delete existingUser.password
    //     const signedJWT = jwt.sign(existingUser, "shhhhh")
    //     res.send(signedJWT)
    // }else{
    res.send(`message created`)
    // }
}
