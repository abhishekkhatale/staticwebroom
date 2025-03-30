"use client"

import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { FaVideo, FaClipboardCheck, FaFileAlt, FaRobot } from "react-icons/fa"
import Navbar from "../components/Navbar"

const StudentDashboard = ({ isLoggedIn }) => {
  const navigate = useNavigate()
  const [studentData] = useState({
    name: "John Doe",
    course: "Computer Science",
    year: "3rd Year",
    description: "Specializing in Artificial Intelligence and Machine Learning",
  })

  const [todayLecture] = useState({
    title: "Introduction to Neural Networks",
    time: "10:00 AM - 11:30 AM",
    instructor: "Dr. Sarah Johnson",
    link: "/meeting",
  })

  const [upcomingTests] = useState([
    {
      id: 1,
      title: "Data Structures Quiz",
      date: "Today, 2:00 PM",
      duration: "45 minutes",
      link: "#",
    },
    {
      id: 2,
      title: "Machine Learning Mid-term",
      date: "Tomorrow, 10:00 AM",
      duration: "2 hours",
      link: "#",
    },
  ])

  const [pendingAssignments] = useState([
    {
      id: 1,
      title: "Neural Network Implementation",
      deadline: "Today, 11:59 PM",
      status: "Pending",
      link: "#",
    },
    {
      id: 2,
      title: "Research Paper Review",
      deadline: "Tomorrow, 5:00 PM",
      status: "Pending",
      link: "#",
    },
    {
      id: 3,
      title: "Database Design Project",
      deadline: "In 3 days",
      status: "In Progress",
      link: "#",
    },
  ])

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/")
    }
  }, [isLoggedIn, navigate])

  const handleAttendLecture = () => navigate("/meeting")
  const handleStartTest = (testId) => console.log(`Starting test ${testId}`)
  const handleViewAssignment = (assignmentId) => console.log(`Viewing assignment ${assignmentId}`)
  const handleGenerateRoadmap = () => console.log("Generating AI roadmap")

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="p-5 md:p-10 max-w-7xl mx-auto">
        {/* Profile Section */}
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-bold mb-5 text-gray-800">Student Dashboard</h1>
          <div className="flex flex-col md:flex-row items-center gap-5 p-5 bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-gray-800 bg-gray-200 flex items-center justify-center">
              <span className="text-gray-500">Profile</span>
            </div>
            <div>
              <h2 className="text-xl md:text-2xl font-semibold mb-1 text-gray-800">{studentData.name}</h2>
              <p className="text-gray-600 mb-1">
                {studentData.course}, {studentData.year}
              </p>
              <p className="text-gray-600">{studentData.description}</p>
            </div>
          </div>
        </div>

        {/* Dashboard Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* Today's Lecture Card */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
            <div className="p-4 bg-black text-white">
              <h3 className="flex items-center gap-2 text-lg font-semibold">
                <FaVideo className="text-white" /> Today's Lecture
              </h3>
            </div>
            <div className="p-5">
              <h4 className="text-base font-semibold mb-2 text-gray-800">{todayLecture.title}</h4>
              <p className="mb-2 text-gray-600">
                <span className="font-medium">Time:</span> {todayLecture.time}
              </p>
              <p className="mb-2 text-gray-600">
                <span className="font-medium">Instructor:</span> {todayLecture.instructor}
              </p>
              <button
                className="w-full flex items-center justify-center gap-2 p-2 md:p-3 bg-black text-white rounded-md font-medium mt-4 hover:bg-gray-800 transition-colors"
                onClick={handleAttendLecture}
              >
                <FaVideo /> Attend Lecture
              </button>
            </div>
          </div>

          {/* Upcoming Tests Card */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
            <div className="p-4 bg-black text-white">
              <h3 className="flex items-center gap-2 text-lg font-semibold">
                <FaClipboardCheck className="text-white" /> Upcoming Tests
              </h3>
            </div>
            <div className="p-5">
              {upcomingTests.map((test) => (
                <div key={test.id} className="pb-4 mb-4 border-b border-gray-200 last:border-b-0 last:pb-0 last:mb-0">
                  <h4 className="text-base font-semibold mb-2 text-gray-800">{test.title}</h4>
                  <p className="mb-2 text-gray-600">
                    <span className="font-medium">Date:</span> {test.date}
                  </p>
                  <p className="mb-2 text-gray-600">
                    <span className="font-medium">Duration:</span> {test.duration}
                  </p>
                  <button
                    className="w-full flex items-center justify-center gap-2 p-2 md:p-3 bg-black text-white rounded-md font-medium mt-4 hover:bg-gray-800 transition-colors"
                    onClick={() => handleStartTest(test.id)}
                  >
                    <FaClipboardCheck /> Start Test
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Pending Assignments Card */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
            <div className="p-4 bg-black text-white">
              <h3 className="flex items-center gap-2 text-lg font-semibold">
                <FaFileAlt className="text-white" /> Pending Assignments
              </h3>
            </div>
            <div className="p-5">
              <ul className="space-y-4">
                {pendingAssignments.map((assignment) => (
                  <li key={assignment.id} className="flex justify-between items-start">
                    <div>
                      <h4 className="text-sm md:text-base font-medium text-gray-800">{assignment.title}</h4>
                      <p className="text-xs md:text-sm text-gray-600">
                        <span className="font-medium">Deadline:</span> {assignment.deadline}
                      </p>
                      <p className="text-xs md:text-sm text-gray-600">
                        <span className="font-medium">Status:</span> {assignment.status}
                      </p>
                    </div>
                    <button
                      className="px-3 py-1 text-sm bg-black text-white rounded hover:bg-gray-800 transition-colors"
                      onClick={() => handleViewAssignment(assignment.id)}
                    >
                      View
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* AI Mentor Card */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
            <div className="p-4 bg-black text-white">
              <h3 className="flex items-center gap-2 text-lg font-semibold">
                <FaRobot className="text-white" /> AI Mentor
              </h3>
            </div>
            <div className="p-5">
              <p className="mb-4 text-gray-600">
                Generate a personalized study roadmap based on your current progress and goals.
              </p>
              <button
                className="w-full flex items-center justify-center gap-2 p-2 md:p-3 bg-black text-white rounded-md font-medium hover:bg-gray-800 transition-colors"
                onClick={handleGenerateRoadmap}
              >
                <FaRobot /> Generate Roadmap
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StudentDashboard