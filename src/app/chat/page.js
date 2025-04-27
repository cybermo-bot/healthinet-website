'use client';

import React, { useState } from 'react';
import AIService from '../../services/AIService';

const ChatPage = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);

  const handleSend = async () => {
    if (!input.trim()) return;
  
    const newMessages = [...messages, { text: input, sender: 'user' }];
    setMessages(newMessages);
    setInput('');
  
    try {
      const response = await AIService.analyzeSymptoms(input);
  
      let botMessages = [];
  
      if (response?.choices && response.choices[0]?.message?.content) {
        const content = response.choices[0].message.content;
  
        try {
          // Try to parse the content if it's JSON
          const parsed = JSON.parse(content);
  
          if (parsed.conditions && Array.isArray(parsed.conditions)) {
            // Map each condition into a separate bot message
            botMessages = parsed.conditions.map((condition) => ({
              text: `🩺 **${condition.name}**\n${condition.description}\n🧠 Probabilité: ${condition.probability}`,
              sender: 'bot',
            }));
          } else {
            botMessages = [{ text: content, sender: 'bot' }];
          }
        } catch (error) {
          // If not parsable JSON, just display as text
          botMessages = [{ text: content, sender: 'bot' }];
        }
      } else {
        botMessages = [{ text: "Réponse reçue, mais aucun détail trouvé.", sender: 'bot' }];
      }
  
      setMessages([...newMessages, ...botMessages]);
    } catch (error) {
      setMessages([...newMessages, { text: "Erreur lors de la communication avec l'IA.", sender: 'bot' }]);
    }
  };
  
  
  
  

  return (
    <div className="min-h-screen flex flex-col bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6 text-center text-primary">Healthinet Assistant</h1>

      <div className="flex-1 overflow-auto mb-4 p-4 bg-white rounded-lg shadow">
        {messages.map((msg, index) => (
          <div key={index} className={`mb-3 ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}>
            <span className={`inline-block px-4 py-2 rounded-lg ${msg.sender === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-900'}`}>
              {msg.text}
            </span>
          </div>
        ))}
      </div>

      <div className="flex">
        <input
          type="text"
          placeholder="Décrivez vos symptômes..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 p-3 rounded-l-lg border border-gray-300 focus:outline-none"
        />
        <button
          onClick={handleSend}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-r-lg font-semibold transition"
        >
          Envoyer
        </button>
      </div>
    </div>
  );
};

export default ChatPage;
