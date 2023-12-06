import OpenAI from "openai";
const openai = new OpenAI({
    apiKey: ''
})
export async function translator(usermessage) {
    const chatCompletion = await openai.chat.completions.create({
        messages: [{ role: 'user', content: usermessage }],
        model: "gpt-3.5-turbo"
    })
    return chatCompletion.choices[0].message.content
}
