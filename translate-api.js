import OpenAI from "openai";
const openai = new OpenAI({
    apiKey: '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'
})
export async function translator(usermessage) {
    const chatCompletion = await openai.chat.completions.create({
        messages: [{ role: 'user', content: usermessage }],
        model: "gpt-3.5-turbo"
    })
    return chatCompletion.choices[0].message.content
}
