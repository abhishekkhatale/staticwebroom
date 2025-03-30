"use client"

import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import {
  FaVideo,
  FaMicrophone,
  FaMicrophoneSlash,
  FaVideoSlash,
  FaDesktop,
  FaComments,
  FaUsers,
  FaPhoneSlash,
} from "react-icons/fa"
import Navbar from "../components/Navbar"

const MeetingRoom = ({ isLoggedIn }) => {
  const navigate = useNavigate()
  const [isMicOn, setIsMicOn] = useState(true)
  const [isCameraOn, setIsCameraOn] = useState(true)
  const [isScreenSharing, setIsScreenSharing] = useState(false)
  const [isChatOpen, setIsChatOpen] = useState(false)
  const [participants, setParticipants] = useState([
    { id: 1, name: "You", isHost: false },
    { id: 2, name: "Dr. Sarah Johnson", isHost: true },
    { id: 3, name: "Alex Thompson", isHost: false },
    { id: 4, name: "Maria Garcia", isHost: false },
  ])
  const [chatMessages, setChatMessages] = useState([
    { id: 1, sender: "Dr. Sarah Johnson", message: "Welcome to the Neural Networks lecture!", time: "10:02 AM" },
    { id: 2, sender: "Alex Thompson", message: "Looking forward to learning about this topic.", time: "10:03 AM" },
  ])
  const [newMessage, setNewMessage] = useState("")

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/")
    }
  }, [isLoggedIn, navigate])

  const toggleMic = () => setIsMicOn(!isMicOn)
  const toggleCamera = () => setIsCameraOn(!isCameraOn)
  const toggleScreenShare = () => setIsScreenSharing(!isScreenSharing)
  const toggleChat = () => setIsChatOpen(!isChatOpen)

  const handleSendMessage = (e) => {
    e.preventDefault()
    if (!newMessage.trim()) return

    const message = {
      id: chatMessages.length + 1,
      sender: "You",
      message: newMessage,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    }

    setChatMessages([...chatMessages, message])
    setNewMessage("")
  }

  const handleEndCall = () => navigate("/dashboard")

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <div className="container mx-auto px-4 py-6">
        {/* Meeting Header */}
        <div className="mb-6 text-center">
          <h1 className="text-2xl font-bold text-gray-800">Meeting Room: Introduction to Neural Networks</h1>
          <p className="text-gray-600">Host: Dr. Sarah Johnson | Duration: 1h 30m</p>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
          {/* Host Video */}
          <div className="bg-gray-800 rounded-lg overflow-hidden relative aspect-video">
            {isCameraOn ? (
              <div className="h-full flex items-center justify-center bg-gray-700 relative">
                <div className="text-white">Host Video Feed</div>
                <div className="absolute bottom-2 left-2 bg-black bg-opacity-50 text-white px-2 py-1 rounded">
                  Dr. Sarah Johnson (Host)
                </div>
              </div>
            ) : (
              <div className="h-full flex flex-col items-center justify-center bg-gray-700 text-gray-300 relative">
                <FaVideoSlash className="text-4xl mb-2" />
                <p>Camera Off</p>
                <div className="absolute bottom-2 left-2 bg-black bg-opacity-50 text-white px-2 py-1 rounded">
                  Dr. Sarah Johnson (Host)
                </div>
              </div>
            )}
          </div>

          {/* Participant Videos */}
          <div className="grid grid-cols-2 gap-4">
            {participants.slice(1).map((participant) => (
              <div key={participant.id} className="bg-gray-800 rounded-lg overflow-hidden relative aspect-video">
                <div className="h-full flex items-center justify-center bg-gray-700">
                  <div className="text-white">{participant.name}'s Video</div>
                </div>
                <div className="absolute bottom-2 left-2 bg-black bg-opacity-50 text-white px-2 py-1 rounded">
                  {participant.name}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Your Video */}
        <div className="w-64 h-48 bg-gray-800 rounded-lg overflow-hidden relative mb-6 mx-auto">
          {isCameraOn ? (
            <div className="h-full flex items-center justify-center bg-gray-700">
              <div className="text-white">Your Video</div>
            </div>
          ) : (
            <div className="h-full flex flex-col items-center justify-center bg-gray-700 text-gray-300">
              <FaVideoSlash className="text-2xl mb-2" />
              <p>Camera Off</p>
            </div>
          )}
          <div className="absolute bottom-2 left-2 bg-black bg-opacity-50 text-white px-2 py-1 rounded">
            You
          </div>
        </div>

        {/* Controls */}
        <div className="flex flex-wrap justify-center gap-4 mb-6">
          <button
            className={`flex flex-col items-center px-4 py-2 rounded-lg ${
              isMicOn ? "bg-blue-600 text-white" : "bg-gray-300 text-gray-800"
            }`}
            onClick={toggleMic}
          >
            {isMicOn ? <FaMicrophone className="text-xl" /> : <FaMicrophoneSlash className="text-xl" />}
            <span className="text-sm mt-1">{isMicOn ? "Mute" : "Unmute"}</span>
          </button>

          <button
            className={`flex flex-col items-center px-4 py-2 rounded-lg ${
              isCameraOn ? "bg-blue-600 text-white" : "bg-gray-300 text-gray-800"
            }`}
            onClick={toggleCamera}
          >
            {isCameraOn ? <FaVideo className="text-xl" /> : <FaVideoSlash className="text-xl" />}
            <span className="text-sm mt-1">{isCameraOn ? "Stop Video" : "Start Video"}</span>
          </button>

          <button
            className={`flex flex-col items-center px-4 py-2 rounded-lg ${
              isScreenSharing ? "bg-blue-600 text-white" : "bg-gray-300 text-gray-800"
            }`}
            onClick={toggleScreenShare}
          >
            <FaDesktop className="text-xl" />
            <span className="text-sm mt-1">{isScreenSharing ? "Stop Sharing" : "Share Screen"}</span>
          </button>

          <button
            className={`flex flex-col items-center px-4 py-2 rounded-lg ${
              isChatOpen ? "bg-blue-600 text-white" : "bg-gray-300 text-gray-800"
            }`}
            onClick={toggleChat}
          >
            <FaComments className="text-xl" />
            <span className="text-sm mt-1">Chat</span>
          </button>

          <button className="flex flex-col items-center px-4 py-2 bg-gray-300 text-gray-800 rounded-lg">
            <FaUsers className="text-xl" />
            <span className="text-sm mt-1">Participants ({participants.length})</span>
          </button>

          <button
            className="flex flex-col items-center px-4 py-2 bg-red-600 text-white rounded-lg"
            onClick={handleEndCall}
          >
            <FaPhoneSlash className="text-xl" />
            <span className="text-sm mt-1">End Call</span>
          </button>
        </div>

        {/* Chat Panel */}
        {isChatOpen && (
          <div className="fixed bottom-20 right-4 w-80 bg-white rounded-lg shadow-xl border border-gray-200 z-10">
            <div className="flex justify-between items-center p-3 border-b border-gray-200">
              <h3 className="font-semibold">Chat</h3>
              <button onClick={toggleChat} className="text-gray-500 hover:text-gray-700">
                <FaComments />
              </button>
            </div>

            <div className="h-64 overflow-y-auto p-3 space-y-3">
              {chatMessages.map((chat) => (
                <div
                  key={chat.id}
                  className={`p-2 rounded-lg ${
                    chat.sender === "You" ? "bg-blue-100 ml-auto" : "bg-gray-100 mr-auto"
                  }`}
                  style={{ maxWidth: "80%" }}
                >
                  <div className="font-medium text-sm">{chat.sender}</div>
                  <div className="text-sm">{chat.message}</div>
                  <div className="text-xs text-gray-500 text-right">{chat.time}</div>
                </div>
              ))}
            </div>

            <form onSubmit={handleSendMessage} className="p-3 border-t border-gray-200 flex">
              <input
                type="text"
                className="flex-1 border border-gray-300 rounded-l-lg px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
                placeholder="Type a message..."
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
              />
              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded-r-lg hover:bg-blue-700"
              >
                Send
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  )
}

export default MeetingRoom