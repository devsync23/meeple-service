import OpenAI from "openai";

const openai = new OpenAI({
    apiKey: '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', // defaults to process.env["OPENAI_API_KEY"]
  });

export async function translateText(str) {
    const chatCompletion = await openai.chat.completions.create({
        messages: [{ role: 'user', content: str }],
        model: 'gpt-3.5-turbo',
      });
      console.log('str')
    const translatedText = chatCompletion.choices[0].message.content
    console.log(translatedText)

    return translatedText
    }
