import fs from "fs"
import { translateText } from "../translate-api.js"

export function getMessages(req, res) {
    const existingMessages = JSON.parse(fs.readFileSync('./messages/messages.json'), 'utf8')
    const userMessages = existingMessages[req.user.email]
    if (!userMessages) {
        return res.send({ messages: [] })
    }
    res.send({
        messages: userMessages
    })
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
