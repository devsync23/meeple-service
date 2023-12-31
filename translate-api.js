import OpenAI from "openai"
const openai = new OpenAI({
    apiKey: "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"
})

export async function translateText(input) {
    const sourceLanguage = input.sourceLanguage
    const targetLanguage = input.targetLanguage
    const text = input.text
    const textToAsk = `can you translate "${text}" from ${sourceLanguage} to ${targetLanguage}?`
    const params = {
        messages: [{
            role: 'user',
            content: textToAsk
        }],
        model: 'gpt-3.5-turbo',
    }
    const chatCompletion = await openai.chat.completions.create(params);
    return chatCompletion.choices[0].message.content
}
