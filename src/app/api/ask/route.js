// src/app/api/ask/route.js
import axios from 'axios';

export async function POST(req) {
  try {
    const { prompt } = await req.json(); // Receive prompt from frontend

    const response = await axios.post(
      'https://openrouter.ai/api/v1/chat/completions',
      {
        model: 'openai/gpt-3.5-turbo',  // or another model you want
        messages: [
          {
            role: 'user',
            content: prompt,
          },
        ],
      },
      {
        headers: {
          'Authorization': `Bearer ${process.env.NEXT_PUBLIC_AI_API_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    );

    return new Response(JSON.stringify(response.data), { status: 200 });
  } catch (error) {
    console.error('Error:', error.response?.data || error.message);
    return new Response(JSON.stringify({ error: 'Failed to call AI API' }), { status: 500 });
  }
}
