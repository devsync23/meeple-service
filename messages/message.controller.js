import fs from "fs"
import { translator } from "../utilities/translate-api.js"

export function getMessage(req, res) {
    let existingMessage = JSON.parse(fs.readFileSync('./messages/messages.json'), 'utf8')
    console.log(existingMessage)
    if(Object.keys(existingMessage).length === 0){
        return res.send('Empty history')
    }
    res.send('Here is the message log history' + '\n' + JSON.stringify(existingMessage, null, 4))
}

export async function createMessage(req, res) {
    let existingMessage = JSON.parse(fs.readFileSync('./messages/messages.json', 'utf8'))
    console.log(existingMessage)
    const message = req.body;
    const { email } = req.user;
    const translatedText = await translator(`Please translate ${message.text} from ${message.sourceLanguage} to ${message.targetLanguage}`)
    const formattedMessage = {
        [email]: [{
            user_id: email,
            text: message.text,
            sourceLanguage: message.sourceLanguage,
            targetLanguage: message.targetLanguage,
            translation: translatedText,
            createdAt: Date.now()
        }]
    }
    if (email in existingMessage) {
        existingMessage[email].push(formattedMessage[email][0])
    } else {
        existingMessage[email] = formattedMessage[email]
    }
    fs.writeFileSync('./messages/messages.json', JSON.stringify(existingMessage, null, 4))

    res.send(translatedText)
}
