import fs from "fs"
import { translation } from "../translate-api.js"
import { printMessage } from "../utility.js"

export function getMessage(req, res) {
    // read message from database
    let existingMessages = JSON.parse(fs.readFileSync('./messages/messages.json'), 'utf8')
    // check if database is empty
    if(Object.keys(existingMessage).length === 0){
        return res.send('Empty history')
    }
    // send back response of the latest 3 messages in the history
    res.send(printMessage(existingMessages,req.user.email,3), null, 4)
}

export async function createMessage(req, res) {
    // read message from database
    let existingMessages = JSON.parse(fs.readFileSync('./messages/messages.json', 'utf8'))
    const message = req.body;
    // invoke translation function from openai API
    let result = await translation(message);
    // check if the current user already has history in the database
    if (!existingMessages[req.user.email]){
        existingMessages[req.user.email] = [];
    }
    // format data
    const formattedMessage = {
        author_id: req.user.email,
        createdAt: Date.now(),
        text: message.text,
        sourceLanguage: message.sourceLanguage,
        targetLanguage: message.targetLanguage,
        formality: message.formality,
        translation: result
    }
    // update the user message database with new message
    existingMessages[req.user.email].push(formattedMessage);
    // writing data into database
    fs.writeFileSync('./messages/messages.json', JSON.stringify(existingMessages, null, 4))
    // send response
    res.send(printMessage(existingMessages,req.user.email,1))
}
