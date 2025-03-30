"use client";

import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import StudentDashboard from "./pages/StudentDashboard";
import MeetingRoom from "./pages/MeetingRoom";
import StudyMaterial from "./pages/StudyMaterial";
import AdminPanel from "./pages/AdminPanel";
import ChatBot from "./components/ChatBot";

function App() {
  const [showChat, setShowChat] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userType, setUserType] = useState("student"); // 'student' or 'admin'

  const handleLogin = (type) => {
    setIsLoggedIn(true);
    setUserType(type);
  };

  return (
    <div className="min-h-screen bg-white text-black relative">
      <Routes>
        <Route path="/" element={<LandingPage isLoggedIn={isLoggedIn} onLogin={handleLogin} />} />
        <Route path="/dashboard" element={<StudentDashboard isLoggedIn={isLoggedIn} />} />
        <Route path="/meeting" element={<MeetingRoom isLoggedIn={isLoggedIn} />} />
        <Route path="/study-material" element={<StudyMaterial isLoggedIn={isLoggedIn} />} />
        <Route path="/admin" element={<AdminPanel isLoggedIn={isLoggedIn} />} />
      </Routes>

      {isLoggedIn && (
        <div
          className="fixed bottom-5 right-5 w-14 h-14 bg-black text-white rounded-full flex items-center justify-center cursor-pointer shadow-md z-50 transition-transform duration-300 hover:scale-110"
          onClick={() => setShowChat(!showChat)}
        >
          <span className="text-2xl">💬</span>
        </div>
      )}

      {showChat && <ChatBot onClose={() => setShowChat(false)} />}
    </div>
  );
}

export default App;
