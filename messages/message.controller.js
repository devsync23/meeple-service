import fs from 'fs'
// import bcrypt from 'bcrypt'
// import jwt from 'jsonwebtoken'
import { translateText } from '../translate-api.js';

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
    fs.writeFileSync('./messages/message.json', JSON.stringify(existingMessage, null, 4))
    res.send(`you had your message!`)
}

export async function createMessage(req, res){
    let existingMessage = JSON.parse(fs.readFileSync('./messages/message.json', 'utf8'))
    const { text, sourceLanguage, targetLanguage } = req.body;

    let prompt = `Translate ${text} from ${sourceLanguage} to ${targetLanguage}`
    try {

    const translatedText = await translateText(prompt)
    if (!existingMessage[req.user.email]){
        existingMessage[req.user.email] = [];
    }
    const formattedMessage = {
        author_id: req.user.email,
        createdAt: Date.now(),
        text: text,
        sourceLanguage: sourceLanguage,
        targetLanguage: targetLanguage,
        translation: translatedText
    }

    // existingMessage = { ...existingMessage, ...formattedMessage}
    existingMessage[req.user.email].push(formattedMessage)
    fs.writeFileSync('./messages/message.json', JSON.stringify(existingMessage, null, 4))
    res.send(`message created`)
    } catch (error) {
        console.error("Translate message error")
    }

}
