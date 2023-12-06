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
    let existingUsers = JSON.parse(fs.readFileSync('./message/messages.json', 'utf8'))
    console.log(existingUsers)
    const message = req.body;
    const formattedMessage = {
        [message.user_email]: [{
            user_id: message.user_email,
            text: message.text,
            sourceLanguage: message.sourceLanguage,
            targetLanguage: message.targetLanguage,
            translation: message.translation,
            createdAt: Date.now()
        }]
    }
    if (message.user_email in existingUsers) {
        existingUsers[message.user_email].push(formattedMessage[message.user_email])
    } else {
        existingUsers[message.user_email] = formattedMessage[message.user_email]
    }
    fs.writeFileSync('./message/messages.json', JSON.stringify(existingUsers, null, 4))

    res.send(`We have received your message!\n`+ "Translating message:\n" + `"${message.translation}"`)
}
