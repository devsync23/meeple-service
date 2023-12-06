import fs from "fs"

export function getMessages(req, res) {
    const myMessageData = req.body;
    const formattedMyMessageData = {
        // idk????
    }
    fs.writeFileSync("./messages/messages.json", JSON.stringify(myMessageData, null, 4))
    res.send("get messages!")
};

export function createMessages(req, res) {
    const { body, user } = req;
    const formattedMessage = {
        // TODO
    }
    res.send("new message!");
};
