import fs from "fs"
import { translateText } from "../translate-api.js"

export function getMessages(req, res) {
    const myMessageData = req.body;
    const formattedMyMessageData = {
        // idk????
    }
    res.send("get messages!")
};

export async function createMessages(req, res) {

    const { body, user } = req;
    const translatedText = await translateText(`please translate ${body.text} from ${body.sourceLanguage} to ${body.targetLanguage}`)
    console.log(translatedText);
    const formattedMessageData = {
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
    if (existingMessages[user.email]) {
        existingMessages[user.email]
        const updatedMessagesData = {

        }
    } else {
        const updatedMessagesData = {
            ...existingMessagesJson,
            ...formattedMessageData
        }
    }



    fs.writeFileSync("./messages/messages.json", JSON.stringify(updatedMessagesData, null, 4))
    res.send(translatedText);
};
