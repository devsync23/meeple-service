import fs from "fs"
import { translateText } from "../translate-api.js"

export function getMessage(req, res) {
    let existingMessage = JSON.parse(fs.readFileSync('./messages/messages.json'), 'utf8')
    console.log(existingMessage)
    if(Object.keys(existingMessage).length === 0){
        return res.send('Empty history')
    }
    res.send('Here is the message log history' + '\n' + JSON.stringify(existingMessage, null, 4))
}

export async function createMessages(req, res) {
    let existingMessage = JSON.parse(fs.readFileSync('./messages/messages.json', 'utf8'))
    const { body, user } = req;
    const translatedText = await translateText(`please translate ${body.text} from ${body.sourceLanguage} to ${body.targetLanguage}`)
    console.log(translatedText);
    const formattedMessage = {
        [user.email]: [
            {
                sourceLanguage: req.body.sourceLanguage,
                targetLanguage: req.body.targetLanguage,
                text:  req.body.text,
                createdAt: Date.now(),
                author_id: req.user.email,
                translation: translatedText,
            }
        ]
    }
    const existingMessagesJson = fs.readFileSync('./messages/messages.json', 'utf8');
    const existingMessages = JSON.parse(existingMessagesJson);
    if (email in existingMessage) {
        existingMessage[email].push(formattedMessage[email][0])
    } else {
        existingMessage[email] = formattedMessage[email]
    }
    fs.writeFileSync('./messages/messages.json', JSON.stringify(existingMessage, null, 4))
    res.send(translatedText)
};
