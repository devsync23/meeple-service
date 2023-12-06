import fs from 'fs'
// import bcrypt from 'bcrypt'
// import jwt from 'jsonwebtoken'
import { translateTextModule } from './ translate-api';

export function getMessage(req, res){
    const newMessage = req.body;
    console.log(req.body)
    const formattedMessage = {
        [newMessage]: {
            text: newMessage.text,
            aurthor_id: newMessage.aurthor_id
        }
    }

    let existingMessage = JSON.parse(fs.readFileSync('./messages/message.json', 'utf8'))
    if(existingMessage[newMessage]){
            res.status = 404;
            return res.send(`${newMessage} has already been here`)
    }
    existingMessage = {...existingMessage, ...formattedMessage }
    fs.writeFileSync('./messages/messages.json', JSON.stringify(existingMessage, null, 4))
    res.send(`you had your message!`)
}

export async function createMessage(req, res){
    let existingMessage = JSON.parse(fs.readFileSync('./messages/message.json', 'utf8'))
    const { text, sourceLanguage, targetLanguage } = req.body;

    let prompt = `Translate ${message.text} from ${message.sourceLanguage} to ${message.targetLanguage}`
    try {

    const translatedText = await translateTextModule(prompt)
    if (!existingMessage[req.user.email]){
        existingMessage[req.user.email] = [];
    }
    const formattedMessage = {
        author_id: req.user.email,
        createdAt: Date.now(),
        text: message.text,
        sourceLanguage: message.sourceLanguage,
        targetLanguage: message.targetLanguage,
        translation: translatedText
    }

    existingMessage = { ...existingMessage, ...formattedMessage}
    fs.writeFileSync('./message/message.json', JSON.stringify(translationDetails, null, 4))
    res.send(`message created`)
    } catch (error) {
        console.error("Translate message error")
    }

}
