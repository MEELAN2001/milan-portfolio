import { streamText, convertToModelMessages } from 'ai';
import { anthropic } from '@ai-sdk/anthropic';
import { buildSystemPrompt } from '@/lib/chatbotContext';

export const maxDuration = 30;

export async function POST(request) {
  const { messages } = await request.json();

  const result = streamText({
    model: anthropic('claude-haiku-4-5-20251001'),
    system: buildSystemPrompt(),
    messages: await convertToModelMessages(messages),
  });

  return result.toUIMessageStreamResponse();
}
