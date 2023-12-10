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
