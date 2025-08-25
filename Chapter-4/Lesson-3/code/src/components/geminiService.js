// import OpenAI from 'openai';

// const openai = new OpenAI({
//     apiKey: "",
//     dangerouslyAllowBrowser: true
// });

// export const getOpenAIResponse = async (prompt) => {

//     try {
//         const response = await openai.completions.create({
//             model: 'gpt-4.1',
//             prompt: prompt,
//         });
//         return response.output_text;
//     } catch (error) {
//         console.error("Error generating text:", error);
//         throw error;
//     }
// };

import { GoogleGenAI } from "@google/genai";

// The client gets the API key from the environment variable `GEMINI_API_KEY`.
const ai = new GoogleGenAI({
  apiKey: "",
});

export const getGeminiResponse = async (prompt) => {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt,
  });
  console.log(response.text);
  return response;
};
