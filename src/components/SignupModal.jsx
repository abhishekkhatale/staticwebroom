"use client"

import { useState } from "react"
import { FiX, FiUser, FiMail, FiLock } from "react-icons/fi"

const SignupModal = ({ onClose, onSignup }) => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [userType, setUserType] = useState("student")
  const [error, setError] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!name || !email || !password || !confirmPassword) {
      setError("Please fill in all fields")
      return
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match")
      return
    }

    onSignup(userType)
    onClose()
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 transition-opacity duration-300">
      <div className="bg-white rounded-lg w-full max-w-md shadow-xl transform transition-all duration-300">
        {/* Header */}
        <div className="flex justify-between items-center p-5 border-b border-gray-200">
          <h2 className="text-xl font-semibold">Create an Account</h2>
          <button 
            className="text-gray-500 hover:text-black transition-colors"
            onClick={onClose}
          >
            <FiX size={20} />
          </button>
        </div>

        {/* Form */}
        <form className="p-5" onSubmit={handleSubmit}>
          {error && (
            <div className="bg-red-100 text-red-600 p-3 rounded-md mb-5 text-sm">
              {error}
            </div>
          )}

          {/* Name Field */}
          <div className="mb-5">
            <label className="flex items-center gap-2 mb-2 font-medium text-gray-700">
              <FiUser className="text-black" size={16} />
              Full Name
            </label>
            <input
              type="text"
              className="w-full p-3 border border-gray-300 rounded-md focus:border-black focus:outline-none focus:ring-1 focus:ring-black"
              placeholder="Enter your full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          {/* Email Field */}
          <div className="mb-5">
            <label className="flex items-center gap-2 mb-2 font-medium text-gray-700">
              <FiMail className="text-black" size={16} />
              Email
            </label>
            <input
              type="email"
              className="w-full p-3 border border-gray-300 rounded-md focus:border-black focus:outline-none focus:ring-1 focus:ring-black"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Password Field */}
          <div className="mb-5">
            <label className="flex items-center gap-2 mb-2 font-medium text-gray-700">
              <FiLock className="text-black" size={16} />
              Password
            </label>
            <input
              type="password"
              className="w-full p-3 border border-gray-300 rounded-md focus:border-black focus:outline-none focus:ring-1 focus:ring-black"
              placeholder="Create a password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* Confirm Password Field */}
          <div className="mb-5">
            <label className="flex items-center gap-2 mb-2 font-medium text-gray-700">
              <FiLock className="text-black" size={16} />
              Confirm Password
            </label>
            <input
              type="password"
              className="w-full p-3 border border-gray-300 rounded-md focus:border-black focus:outline-none focus:ring-1 focus:ring-black"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

          {/* User Type Radio Buttons */}
          <div className="mb-5">
            <label className="block mb-2 font-medium text-gray-700">User Type</label>
            <div className="flex gap-5">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  className="text-black focus:ring-black"
                  name="userType"
                  value="student"
                  checked={userType === "student"}
                  onChange={() => setUserType("student")}
                />
                Student
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  className="text-black focus:ring-black"
                  name="userType"
                  value="admin"
                  checked={userType === "admin"}
                  onChange={() => setUserType("admin")}
                />
                Teacher/Admin
              </label>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full p-3 bg-black text-white rounded-md font-medium hover:bg-gray-800 transition-colors"
          >
            Sign Up
          </button>
        </form>

        {/* Footer */}
        <div className="p-4 border-t border-gray-200 text-center text-gray-700">
          <p>
            Already have an account?{" "}
            <button
              className="text-black font-medium hover:opacity-80 transition-opacity"
              onClick={onClose}
            >
              Login
            </button>
          </p>
        </div>
      </div>
    </div>
  )
}

export default SignupModal