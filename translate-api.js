import OpenAI from 'openai';

const openai = new OpenAI({
    apiKey: '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'
});

export async function translation(content){
    let prompt = `Please translate ${content.text} from ${content.sourceLanguage} to ${content.targetLanguage} in ${content.formality} dialogue`;
    const chatCompletion = await openai.chat.completions.create(
        {
            model: "gpt-4",
            messages: [{"role": "user", "content": prompt}]
        }
        );
    return chatCompletion.choices[0].message.content
}
