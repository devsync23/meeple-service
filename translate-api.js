import OpenAI from "openai";

// const { Configuration, OpenAIApi } = require("openai");

const openai = new OpenAI({
    apiKey: "",
});

export async function translateText(textString) {
    const chatCompletion = await openai.chat.completions.create({
        messages: [{
            role: "user",
            content: textString,
        }],
        model: "gpt-3.5-turbo",
    });
    return chatCompletion.choices[0].message.content;
    // try {

    // } catch (err) {
    //     console.errror()
    // }
}
