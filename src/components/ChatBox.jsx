'use client'
import { useState } from 'react'
import { sendMessage } from '@/chat'
import PainMap from './PainMap'

export default function ChatBox() {
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [showPainMap, setShowPainMap] = useState(false)

  const handleSend = async () => {
    if (!input.trim()) return
    const userMsg = { role: 'user', text: input }
    setMessages((prev) => [...prev, userMsg])
    setInput('')
    setLoading(true)

    const botText = await sendMessage(input)
    const botMsg = { role: 'bot', text: botText }
    setMessages((prev) => [...prev, botMsg])
    setLoading(false)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleSend()
  }

  const handlePainSelect = async (region) => {
    const userMsg = { role: 'user', text: `I feel pain in my ${region}` }
    setMessages((prev) => [...prev, userMsg])
    setLoading(true)
  
    const botText = await sendMessage(`I feel pain in my ${region}`)
    const botMsg = { role: 'bot', text: botText }
  
    setMessages((prev) => [...prev, botMsg])
    setLoading(false)
  }
  

  return (
    <div className="max-w-2xl mx-auto mt-20">
      <div className="bg-white border rounded-xl shadow p-6 h-[500px] overflow-y-scroll flex flex-col gap-3">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`max-w-[80%] px-4 py-2 rounded-2xl text-sm whitespace-pre-wrap ${
              msg.role === 'user'
                ? 'ml-auto bg-blue-500 text-white'
                : 'mr-auto bg-gray-100 text-gray-800'
            }`}
          >
            {msg.text}
          </div>
        ))}
        {loading && (
          <div className="mr-auto bg-gray-100 text-gray-400 text-sm px-4 py-2 rounded-2xl animate-pulse">
            ...
          </div>
        )}
      </div>

      {/* Show Pain Map Button */}
      <div className="mt-3 flex justify-center">
        <button
          className="bg-blue-100 text-blue-600 px-4 py-2 rounded-lg text-sm hover:bg-blue-200 transition"
          onClick={() => setShowPainMap(true)}
        >
          Show Body Map
        </button>
      </div>

      <div className="mt-4 flex">
        <input
          className="flex-1 border border-gray-300 px-4 py-2 rounded-l-xl focus:outline-none"
          placeholder="Type your symptoms..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button
          className="bg-blue-500 text-white px-6 rounded-r-xl"
          onClick={handleSend}
        >
          Send
        </button>
      </div>

      <PainMap
        visible={showPainMap}
        onClose={() => setShowPainMap(false)}
        onSelect={handlePainSelect}
      />
    </div>
  )
}
