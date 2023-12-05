import { setDefaultAutoSelectFamilyAttemptTimeout } from "net";
import OpenAI from "openai";

const openai = new OpenAI({
    apiKey: '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', // defaults to process.env["OPENAI_API_KEY"]
  });

export async function translateTextModule(str) {
    const chatCompletion = await openai.chat.completions.create({
        messages: [{ role: 'user', content: `translate this ${str} to French` }],
        model: 'gpt-3.5-turbo',
      });
      console.log('str')
    const translatedText = chatCompletion.data.choices[0].messages.content
    console.log(translatedText)
    
    return translatedText
    }
