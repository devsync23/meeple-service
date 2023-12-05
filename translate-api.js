import OpenAI from 'openai';

const openai = new OpenAI({
    apiKey: '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'
});

export async function translation(content){
    const chatCompletion = await openai.chat.completions.create(
        {
            model: "gpt-4",
            messages: [{"role": "user", "content": content}]
        }
        );

    return chatCompletion.choices[0].message.content
}
