import { GoogleGenerativeAI } from '@google/generative-ai';
import type { SkillTier } from '@/types';

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY || '';
const genAI = new GoogleGenerativeAI(API_KEY);

export const getAIResponse = async (
  prompt: string,
  context: {
    code?: string;
    error?: string;
    tier: SkillTier;
    topicTitle?: string;
  }
): Promise<string> => {
  try {
    if (!API_KEY) {
      return '🔑 Please add your Gemini API key to the .env file (VITE_GEMINI_API_KEY) to use the AI Tutor!';
    }

    const model = genAI.getGenerativeModel({ 
      model: 'gemini-1.5-flash',
      systemInstruction: `You are a Socratic Tutor for computer science education. 
Current skill tier: ${context.tier}
${context.topicTitle ? `Topic: ${context.topicTitle}` : ''}

Guidelines:
- For beginners: Use simple analogies, avoid jargon, be encouraging
- For intermediate: Introduce standard library usage, discuss time complexity
- For experts: Discuss optimization, edge cases, system design implications
- NEVER give direct answers. Guide with questions.
- If there's an error, help them understand WHY, not just fix it.
- Keep responses concise and friendly.

${context.code ? `Current code:\n\`\`\`\n${context.code}\n\`\`\`` : ''}
${context.error ? `Error message:\n${context.error}` : ''}`
    });

    const result = await model.generateContent(prompt);
    return result.response.text();
  } catch (error: any) {
    console.error('Gemini API Error:', error);
    if (error.message?.includes('API key')) {
      return '🔑 Invalid API key. Please check your Gemini API key in the .env file.';
    }
    return '❌ Sorry, I encountered an error. Please try again or check your API key.';
  }
};

export const generateQuiz = async (
  content: string,
  tier: SkillTier
): Promise<any[]> => {
  try {
    const model = genAI.getGenerativeModel({ 
      model: 'gemini-1.5-flash',
      systemInstruction: `Based on this content, generate 5 multiple-choice questions for ${tier} level.
Return ONLY valid JSON array with this structure:
[{
  "question": "string",
  "options": ["A", "B", "C", "D"],
  "correctAnswer": 0,
  "explanation": "string"
}]`
    });

    const prompt = `Content:
${content}`;

    const result = await model.generateContent(prompt);
    const text = result.response.text();
    
    // Extract JSON from markdown code blocks if present
    const jsonMatch = text.match(/```json\n([\s\S]*?)\n```/) || text.match(/\[[\s\S]*\]/);
    const jsonText = jsonMatch ? (jsonMatch[1] || jsonMatch[0]) : text;
    
    return JSON.parse(jsonText);
  } catch (error) {
    console.error('Quiz generation error:', error);
    return [];
  }
};
