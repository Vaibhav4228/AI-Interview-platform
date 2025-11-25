import Groq from "groq-sdk";

const apiKey = import.meta.env.VITE_GROQ_API_KEY!;
const groq = new Groq({ apiKey, dangerouslyAllowBrowser: true });

const DEFAULT_MODEL = "llama-3.1-8b-instant";

type SendMessageOptions = {
  responseFormat?: "json_object";
};

/**
 * Wrap the Groq chat completion to mimic the `sendMessage` API we used with Gemini.
 */
export const chatSession = {
  sendMessage: async (prompt: string, options: SendMessageOptions = {}) => {
    const completion = await groq.chat.completions.create({
      model: DEFAULT_MODEL,
      temperature: 0.7,
      max_tokens: 1024,
      messages: [
        {
          role: "system",
          content:
            "You are Prepwise, an AI interview copilot. Provide concise JSON-friendly outputs when requested.",
        },
        {
          role: "user",
          content: prompt,
        },
      ],
      ...(options.responseFormat && {
        response_format: { type: options.responseFormat },
      }),
    });

    const messageContent = completion.choices?.[0]?.message?.content ?? "";

    return {
      response: {
        text: () => messageContent,
      },
    };
  },
};
