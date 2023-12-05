import fs from "fs"

export function getMessage(req, res) {
    let existingMessage = JSON.parse(fs.readFileSync('./message/messages.json'), 'utf8')
    console.log(existingMessage)
    if(Object.keys(existingMessage).length === 0){
        return res.send('Empty history')
    }
    res.send('Here is the message log history' + '\n' + JSON.stringify(existingMessage, null, 4))
}

export function createMessage(req, res) {
    let existingMessages = JSON.parse(fs.readFileSync('./message/messages.json', 'utf8'))
    console.log(existingMessages)
    const message = req.body;
    const formattedMessage = {
        [message.text]: {
            sourceLanguage: message.sourceLanguage,
            targetLanguage: message.targetLanguage
        }
    }
    existingMessages = { ...existingMessages, ...formattedMessage }
    fs.writeFileSync('./message/messages.json', JSON.stringify(existingMessages, null, 4))
    res.send(`We have received your message!\n`+ "Translating message:\n" + `"${message.text}"`)
}
