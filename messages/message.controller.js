import fs from "fs"
import { translation } from "../translate-api.js"

export function getMessage(req, res) {
    let existingMessage = JSON.parse(fs.readFileSync('./message/messages.json'), 'utf8')
    console.log(existingMessage)
    if(Object.keys(existingMessage).length === 0){
        return res.send('Empty history')
    }
    res.send('Here is the message log history' + '\n' + JSON.stringify(existingMessage, null, 4))
}

export async function createMessage(req, res) {
    let existingMessages = JSON.parse(fs.readFileSync('./messages/messages.json', 'utf8'))
    // console.log(existingMessages)
    const message = req.body;
    let prompt = `Please translate ${message.text} from ${message.sourceLanguage} to ${message.targetLanguage} in ${message.formality} dialogue`;
    let result = await translation(prompt);
    if (!existingMessages[req.user.email]){
        existingMessages[req.user.email] = [];
    }
    const formattedMessage = {
        author_id: req.user.email,
        createdAt: Date.now(),
        text: message.text,
        sourceLanguage: message.sourceLanguage,
        targetLanguage: message.targetLanguage,
        formality: message.formality,
        translation: result
    }
    existingMessages[req.user.email].push(formattedMessage);
    fs.writeFileSync('./messages/messages.json', JSON.stringify(existingMessages, null, 4))
    res.send(`We have received your message!\n`+ "Translating message:\n" + `"${message.text}"`)
}
