import fs from "fs"
import { recentTranslations } from "./helperFunctions.js"

export function getMessage(req, res) {
    let existingMessages = JSON.parse(fs.readFileSync('./messages/messages.json'), 'utf8')
    if (Object.keys(existingMessages).length === 0) {
        return res.send('Empty history')
    }
    return res.send(recentTranslations(existingMessages, req.user.email), null, 4)
    //'Here is the message log history' + '\n' + JSON.stringify(existingMessage, null, 4))
}

export function createMessage(req, res) {
    let existingMessages = JSON.parse(fs.readFileSync('./messages/messages.json', 'utf8'))
    const message = req.body;
    if (existingMessages[message.author_id]) {
        const updateMessageArray = {
            author_id: message.author_id,
            createdAt: message.createdAt,
            text: message.text,
            sourceLanguage: message.sourceLanguage,
            targetLanguage: message.targetLanguage,
            translation: message.translation
        }
        const updatedMessage = existingMessages[message.author_id].push(updateMessageArray)
        existingMessages = { ...existingMessages, ...updatedMessage }
    } else {
        const formattedMessage = {
            [message.author_id]: [{
                author_id: message.author_id,
                createdAt: message.createdAt,
                text: message.text,
                sourceLanguage: message.sourceLanguage,
                targetLanguage: message.targetLanguage,
                translation: message.translation
            }]
        }
        existingMessages = { ...existingMessages, ...formattedMessage }
    }
    fs.writeFileSync('./messages/messages.json', JSON.stringify(existingMessages, null, 4))
    return res.send(`We have received your message! \nTranslating "${message.text}" from ${message.sourceLanguage} to ${message.targetLanguage}: \n"${message.translation}"`)
}
