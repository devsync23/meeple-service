import OpenAI from "openai";

const openai = new OpenAI({
    apiKey: 'ssk-huON8mE0Mr9h3B4Y5iTvT3BlbkFJjuWbNW98iyoJULpmUNfC', // defaults to process.env["OPENAI_API_KEY"]
  });

export async function translateTextModule(str) {
    const chatCompletion = await openai.chat.completions.create({
        messages: [{ role: 'user', content: str }],
        model: 'gpt-3.5-turbo',
      });
      console.log('str')
    const translatedText = chatCompletion.messages.content
    console.log(translatedText)

    return translatedText
    }
