"use client"

import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { FaGraduationCap, FaLaptopCode, FaRobot, FaCalendarAlt, FaChalkboardTeacher } from "react-icons/fa"
import { FiLogIn, FiUserPlus } from "react-icons/fi"
import LoginModal from "../components/LoginModal"
import SignupModal from "../components/SignupModal"

const LandingPage = ({ isLoggedIn, onLogin }) => {
  const [showLoginModal, setShowLoginModal] = useState(false)
  const [showSignupModal, setShowSignupModal] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/dashboard")
    }
  }, [isLoggedIn, navigate])

  const features = [
    {
      icon: <FaGraduationCap className="text-4xl mb-4 text-blue-600" />,
      title: "Virtual Learning",
      description: "Attend lectures from anywhere in the world with our interactive virtual classrooms.",
    },
    {
      icon: <FaLaptopCode className="text-4xl mb-4 text-blue-600" />,
      title: "Online Assignments",
      description: "Complete and submit assignments online with real-time feedback from instructors.",
    },
    {
      icon: <FaRobot className="text-4xl mb-4 text-blue-600" />,
      title: "AI Mentor",
      description: "Get personalized guidance and support from our AI mentor to enhance your learning experience.",
    },
    {
      icon: <FaCalendarAlt className="text-4xl mb-4 text-blue-600" />,
      title: "Schedule Management",
      description: "Keep track of your lectures, tests, and assignments with our centralized dashboard.",
    },
    {
      icon: <FaChalkboardTeacher className="text-4xl mb-4 text-blue-600" />,
      title: "Interactive Tests",
      description: "Take interactive tests and quizzes to assess your understanding of the subject matter.",
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="flex justify-between items-center p-5 bg-white shadow-sm sticky top-0 z-10">
        <div className="text-2xl font-bold text-black">WebRoom</div>
        <div className="flex gap-4">
          <button
            className="flex items-center gap-2 px-4 py-2 bg-white text-black border border-black rounded-md hover:bg-gray-100 transition-colors duration-300"
            onClick={() => setShowLoginModal(true)}
          >
            <FiLogIn /> Login
          </button>
          <button
            className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition-colors duration-300"
            onClick={() => setShowSignupModal(true)}
          >
            <FiUserPlus /> Sign Up
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between p-10 md:p-16 bg-white">
        <div className="flex-1 max-w-xl space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-black transform transition-all duration-500 ease-out translate-y-0 opacity-100">
            Welcome to WebRoom
          </h1>
          <p className="text-lg md:text-xl text-gray-700 transform transition-all duration-500 ease-out delay-100 translate-y-0 opacity-100">
            A modern virtual campus for seamless learning
          </p>
          <button
            className="px-6 py-3 bg-black text-white rounded-md font-medium hover:bg-gray-800 transition-colors duration-300 transform  ease-out delay-200 translate-y-0 opacity-100"
            onClick={() => setShowSignupModal(true)}
          >
            Get Started
          </button>
        </div>
        <div className="flex-1 flex justify-center items-center mt-10 md:mt-0">
          <div className="w-full max-w-md">
            <div className="bg-gray-200 rounded-lg aspect-video flex items-center justify-center">
              <span className="text-gray-500">Virtual Campus Illustration</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-10 bg-gray-50 text-center">
        <h2 className="text-3xl font-bold mb-4 text-black">About WebRoom</h2>
        <p className="max-w-3xl mx-auto mb-10 text-lg text-gray-700">
          WebRoom is a modern virtual campus where students and teachers can interact seamlessly. Our platform provides
          a comprehensive learning environment with features designed to enhance the educational experience for both
          students and educators.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              className="bg-white p-8 rounded-lg shadow-md transition-transform duration-300 hover:-translate-y-2"
              key={index}
            >
              {feature.icon}
              <h3 className="text-xl font-semibold mb-3 text-black">{feature.title}</h3>
              <p className="text-gray-700">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-10 px-5">
        <div className="flex flex-col md:flex-row justify-between items-center max-w-6xl mx-auto pb-5 border-b border-gray-800">
          <div className="text-2xl font-bold mb-5 md:mb-0">WebRoom</div>
          <div className="flex flex-col md:flex-row gap-5 mb-5 md:mb-0">
            <a href="#" className="hover:opacity-80 transition-opacity">
              Terms of Service
            </a>
            <a href="#" className="hover:opacity-80 transition-opacity">
              Privacy Policy
            </a>
            <a href="#" className="hover:opacity-80 transition-opacity">
              Contact Us
            </a>
          </div>
          <div className="flex gap-4">
            {['FB', 'TW', 'IG', 'LI'].map((social, i) => (
              <a
                key={i}
                href="#"
                className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center transition-colors hover:bg-gray-700"
              >
                {social}
              </a>
            ))}
          </div>
        </div>
        <div className="max-w-6xl mx-auto pt-5 text-center text-sm opacity-70">
          <p>&copy; 2025 WebRoom. All rights reserved.</p>
        </div>
      </footer>

      {/* Modals */}
      {showLoginModal && <LoginModal onClose={() => setShowLoginModal(false)} onLogin={onLogin} />}
      {showSignupModal && <SignupModal onClose={() => setShowSignupModal(false)} onSignup={onLogin} />}
    </div>
  )
}

export default LandingPage