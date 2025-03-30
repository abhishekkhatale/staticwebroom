"use client"

import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { FaHome, FaVideo, FaBook, FaUserCog, FaSignOutAlt, FaBars, FaTimes } from "react-icons/fa"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const navigate = useNavigate()

  const handleLogout = () => {
    navigate("/")
  }

  return (
    <nav className="flex justify-between items-center p-4 bg-black text-white sticky top-0 z-50 shadow-md">
      {/* Logo/Brand */}
      <div className="text-xl font-bold">
        <Link to="/dashboard" className="hover:text-gray-300 transition-colors">
          WebRoom
        </Link>
      </div>

      {/* Mobile Menu Toggle */}
      <button 
        className="md:hidden text-2xl focus:outline-none"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Navigation Links */}
      <ul
        className={`fixed md:static top-16 left-0 w-full md:w-auto bg-black md:bg-transparent p-4 md:p-0 flex flex-col md:flex-row gap-4 md:gap-6 transition-all duration-300 ease-in-out transform ${
          isMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-full md:translate-y-0 opacity-0 md:opacity-100"
        } md:opacity-100 z-40`}
      >
        <li>
          <Link
            to="/dashboard"
            className="flex items-center gap-2 p-2 rounded hover:bg-gray-800 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            <FaHome className="text-lg" />
            <span>Dashboard</span>
          </Link>
        </li>
        <li>
          <Link
            to="/meeting"
            className="flex items-center gap-2 p-2 rounded hover:bg-gray-800 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            <FaVideo className="text-lg" />
            <span>Meeting Room</span>
          </Link>
        </li>
        <li>
          <Link
            to="/study-material"
            className="flex items-center gap-2 p-2 rounded hover:bg-gray-800 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            <FaBook className="text-lg" />
            <span>Study Material</span>
          </Link>
        </li>
        <li>
          <Link
            to="/admin"
            className="flex items-center gap-2 p-2 rounded hover:bg-gray-800 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            <FaUserCog className="text-lg" />
            <span>Admin Panel</span>
          </Link>
        </li>
        <li>
          <button
            onClick={() => {
              handleLogout()
              setIsMenuOpen(false)
            }}
            className="flex items-center gap-2 p-2 rounded hover:bg-gray-800 transition-colors w-full text-left"
          >
            <FaSignOutAlt className="text-lg" />
            <span>Logout</span>
          </button>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar