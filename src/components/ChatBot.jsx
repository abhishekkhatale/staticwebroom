"use client"

import { useState, useRef, useEffect } from "react"
import { FiX, FiSend, FiMaximize, FiMinimize } from "react-icons/fi"
import { FaRobot } from "react-icons/fa"

const ChatBot = ({ onClose }) => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! I'm your WebRoom AI assistant. How can I help you today?",
      sender: "bot",
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    },
  ])
  const [input, setInput] = useState("")
  const [isExpanded, setIsExpanded] = useState(false)
  const messagesEndRef = useRef(null)

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  const handleSendMessage = (e) => {
    e.preventDefault()
    if (!input.trim()) return

    // Add user message
    const userMessage = {
      id: messages.length + 1,
      text: input,
      sender: "user",
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    }

    setMessages((prev) => [...prev, userMessage])
    setInput("")

    // Simulate bot response
    setTimeout(() => {
      const botResponses = [
        "I can help you with that! Let me find some resources for you.",
        "That's a great question. Here's what I know about it.",
        "I'm checking our database for the most up-to-date information on that topic.",
        "Would you like me to generate a study plan for this subject?",
        "I can help you prepare for your upcoming test. What specific topics are you struggling with?",
      ]
      const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)]
      const botMessage = {
        id: messages.length + 2,
        text: randomResponse,
        sender: "bot",
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      }
      setMessages((prev) => [...prev, botMessage])
    }, 1000)
  }

  return (
    <div
      className={`fixed bottom-20 right-5 w-80 md:w-96 h-96 bg-white rounded-lg shadow-xl flex flex-col z-50 transition-all duration-300 ${
        isExpanded ? "w-96 md:w-[450px] h-[450px] md:h-[550px]" : ""
      }`}
    >
      {/* Header */}
      <div className="flex justify-between items-center p-4 bg-black text-white rounded-t-lg">
        <div className="flex items-center gap-2 font-semibold">
          <FaRobot className="text-lg" /> 
          <span>AI Assistant</span>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-white opacity-80 hover:opacity-100 transition-opacity"
          >
            {isExpanded ? <FiMinimize size={18} /> : <FiMaximize size={18} />}
          </button>
          <button 
            onClick={onClose}
            className="text-white opacity-80 hover:opacity-100 transition-opacity"
          >
            <FiX size={18} />
          </button>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 p-4 overflow-y-auto flex flex-col gap-2">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`max-w-[80%] p-3 rounded-lg ${
              message.sender === "user"
                ? "bg-black text-white self-end rounded-br-none"
                : "bg-gray-100 text-gray-800 self-start rounded-bl-none"
            }`}
          >
            <p className="mb-1">{message.text}</p>
            <p className="text-xs opacity-70 text-right">{message.timestamp}</p>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <form onSubmit={handleSendMessage} className="p-3 border-t border-gray-200">
        <div className="flex items-center gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 py-2 px-4 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
          />
          <button
            type="submit"
            className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors"
          >
            <FiSend size={16} />
          </button>
        </div>
      </form>
    </div>
  )
}

export default ChatBot