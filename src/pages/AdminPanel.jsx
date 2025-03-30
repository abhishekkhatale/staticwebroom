"use client"

import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { FaCalendarPlus, FaLink, FaFileAlt, FaClipboardList, FaPlus, FaTrash } from "react-icons/fa"
import Navbar from "../components/Navbar"

const AdminPanel = ({ isLoggedIn }) => {
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState("meetings")

  const [newMeeting, setNewMeeting] = useState({
    title: "",
    date: "",
    time: "",
    duration: "",
    link: "",
  })

  const [newNote, setNewNote] = useState({
    title: "",
    content: "",
    course: "",
  })

  const [newTest, setNewTest] = useState({
    title: "",
    date: "",
    time: "",
    duration: "",
    questions: [{ question: "", options: ["", "", "", ""], correctAnswer: 0 }],
  })

  const [newAssignment, setNewAssignment] = useState({
    title: "",
    description: "",
    deadline: "",
    course: "",
  })

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/")
    }
  }, [isLoggedIn, navigate])

  const handleAddMeeting = (e) => {
    e.preventDefault()
    console.log("Adding meeting:", newMeeting)
    setNewMeeting({
      title: "",
      date: "",
      time: "",
      duration: "",
      link: "",
    })
  }

  const handleAddNote = (e) => {
    e.preventDefault()
    console.log("Adding note:", newNote)
    setNewNote({
      title: "",
      content: "",
      course: "",
    })
  }

  const handleAddTest = (e) => {
    e.preventDefault()
    console.log("Adding test:", newTest)
    setNewTest({
      title: "",
      date: "",
      time: "",
      duration: "",
      questions: [{ question: "", options: ["", "", "", ""], correctAnswer: 0 }],
    })
  }

  const handleAddAssignment = (e) => {
    e.preventDefault()
    console.log("Adding assignment:", newAssignment)
    setNewAssignment({
      title: "",
      description: "",
      deadline: "",
      course: "",
    })
  }

  const handleAddQuestion = () => {
    if (newTest.questions.length < 5) {
      setNewTest({
        ...newTest,
        questions: [...newTest.questions, { question: "", options: ["", "", "", ""], correctAnswer: 0 }],
      })
    }
  }

  const handleRemoveQuestion = (index) => {
    const updatedQuestions = [...newTest.questions]
    updatedQuestions.splice(index, 1)
    setNewTest({
      ...newTest,
      questions: updatedQuestions,
    })
  }

  const handleQuestionChange = (index, field, value) => {
    const updatedQuestions = [...newTest.questions]

    if (field === "question") {
      updatedQuestions[index].question = value
    } else if (field.startsWith("option")) {
      const optionIndex = Number.parseInt(field.split("-")[1])
      updatedQuestions[index].options[optionIndex] = value
    } else if (field === "correctAnswer") {
      updatedQuestions[index].correctAnswer = Number.parseInt(value)
    }

    setNewTest({
      ...newTest,
      questions: updatedQuestions,
    })
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Admin Panel</h1>
          <p className="text-gray-600">Manage your courses, lectures, tests, and assignments</p>
        </div>

        <div className="flex flex-wrap gap-2 mb-8 border-b border-gray-200">
          <button
            className={`flex items-center gap-2 px-4 py-2 rounded-t-lg transition-colors ${
              activeTab === "meetings" ? "bg-blue-100 text-blue-600 border-b-2 border-blue-600" : "text-gray-600 hover:bg-gray-100"
            }`}
            onClick={() => setActiveTab("meetings")}
          >
            <FaCalendarPlus /> Create Meeting
          </button>
          <button
            className={`flex items-center gap-2 px-4 py-2 rounded-t-lg transition-colors ${
              activeTab === "notes" ? "bg-blue-100 text-blue-600 border-b-2 border-blue-600" : "text-gray-600 hover:bg-gray-100"
            }`}
            onClick={() => setActiveTab("notes")}
          >
            <FaFileAlt /> Add Notes
          </button>
          <button
            className={`flex items-center gap-2 px-4 py-2 rounded-t-lg transition-colors ${
              activeTab === "tests" ? "bg-blue-100 text-blue-600 border-b-2 border-blue-600" : "text-gray-600 hover:bg-gray-100"
            }`}
            onClick={() => setActiveTab("tests")}
          >
            <FaClipboardList /> Schedule Test
          </button>
          <button
            className={`flex items-center gap-2 px-4 py-2 rounded-t-lg transition-colors ${
              activeTab === "assignments" ? "bg-blue-100 text-blue-600 border-b-2 border-blue-600" : "text-gray-600 hover:bg-gray-100"
            }`}
            onClick={() => setActiveTab("assignments")}
          >
            <FaLink /> Schedule Assignment
          </button>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          {activeTab === "meetings" && (
            <div>
              <h2 className="text-2xl font-semibold mb-6 text-gray-800">Create a New Meeting</h2>
              <form onSubmit={handleAddMeeting} className="space-y-4">
                <div>
                  <label className="block text-gray-700 mb-2">Meeting Title</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={newMeeting.title}
                    onChange={(e) => setNewMeeting({ ...newMeeting, title: e.target.value })}
                    placeholder="Enter meeting title"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-gray-700 mb-2">Date</label>
                    <input
                      type="date"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      value={newMeeting.date}
                      onChange={(e) => setNewMeeting({ ...newMeeting, date: e.target.value })}
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 mb-2">Time</label>
                    <input
                      type="time"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      value={newMeeting.time}
                      onChange={(e) => setNewMeeting({ ...newMeeting, time: e.target.value })}
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 mb-2">Duration (minutes)</label>
                    <input
                      type="number"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      value={newMeeting.duration}
                      onChange={(e) => setNewMeeting({ ...newMeeting, duration: e.target.value })}
                      placeholder="60"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">Meeting Link</label>
                  <input
                    type="url"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={newMeeting.link}
                    onChange={(e) => setNewMeeting({ ...newMeeting, link: e.target.value })}
                    placeholder="https://meeting-link.com/room-id"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="flex items-center gap-2 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                >
                  <FaCalendarPlus /> Create Meeting
                </button>
              </form>
            </div>
          )}

          {activeTab === "notes" && (
            <div>
              <h2 className="text-2xl font-semibold mb-6 text-gray-800">Add Study Notes</h2>
              <form onSubmit={handleAddNote} className="space-y-4">
                <div>
                  <label className="block text-gray-700 mb-2">Note Title</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={newNote.title}
                    onChange={(e) => setNewNote({ ...newNote, title: e.target.value })}
                    placeholder="Enter note title"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">Course</label>
                  <select
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={newNote.course}
                    onChange={(e) => setNewNote({ ...newNote, course: e.target.value })}
                    required
                  >
                    <option value="">Select Course</option>
                    <option value="cs101">CS101: Introduction to Computer Science</option>
                    <option value="cs201">CS201: Data Structures and Algorithms</option>
                    <option value="cs301">CS301: Machine Learning</option>
                    <option value="cs401">CS401: Neural Networks</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">Content</label>
                  <textarea
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[200px]"
                    value={newNote.content}
                    onChange={(e) => setNewNote({ ...newNote, content: e.target.value })}
                    placeholder="Enter note content"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="flex items-center gap-2 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                >
                  <FaFileAlt /> Add Notes
                </button>
              </form>
            </div>
          )}

          {activeTab === "tests" && (
            <div>
              <h2 className="text-2xl font-semibold mb-6 text-gray-800">Schedule a Test</h2>
              <form onSubmit={handleAddTest} className="space-y-4">
                <div>
                  <label className="block text-gray-700 mb-2">Test Title</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={newTest.title}
                    onChange={(e) => setNewTest({ ...newTest, title: e.target.value })}
                    placeholder="Enter test title"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-gray-700 mb-2">Date</label>
                    <input
                      type="date"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      value={newTest.date}
                      onChange={(e) => setNewTest({ ...newTest, date: e.target.value })}
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 mb-2">Time</label>
                    <input
                      type="time"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      value={newTest.time}
                      onChange={(e) => setNewTest({ ...newTest, time: e.target.value })}
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 mb-2">Duration (minutes)</label>
                    <input
                      type="number"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      value={newTest.duration}
                      onChange={(e) => setNewTest({ ...newTest, duration: e.target.value })}
                      placeholder="45"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-medium text-gray-800">Test Questions (Max 5)</h3>
                    <button
                      type="button"
                      className={`flex items-center gap-2 px-4 py-2 rounded-md ${
                        newTest.questions.length >= 5
                          ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                          : "bg-green-600 text-white hover:bg-green-700"
                      } transition-colors`}
                      onClick={handleAddQuestion}
                      disabled={newTest.questions.length >= 5}
                    >
                      <FaPlus /> Add Question
                    </button>
                  </div>

                  {newTest.questions.map((question, qIndex) => (
                    <div key={qIndex} className="border border-gray-200 rounded-lg p-4 space-y-4">
                      <div className="flex justify-between items-center">
                        <h4 className="font-medium text-gray-800">Question {qIndex + 1}</h4>
                        {newTest.questions.length > 1 && (
                          <button
                            type="button"
                            className="text-red-500 hover:text-red-700 transition-colors"
                            onClick={() => handleRemoveQuestion(qIndex)}
                          >
                            <FaTrash />
                          </button>
                        )}
                      </div>

                      <div>
                        <label className="block text-gray-700 mb-2">Question Text</label>
                        <input
                          type="text"
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          value={question.question}
                          onChange={(e) => handleQuestionChange(qIndex, "question", e.target.value)}
                          placeholder="Enter question"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        {question.options.map((option, oIndex) => (
                          <div key={oIndex} className="flex items-center gap-3">
                            <input
                              type="radio"
                              className="text-blue-600 focus:ring-blue-500"
                              name={`correct-answer-${qIndex}`}
                              value={oIndex}
                              checked={question.correctAnswer === oIndex}
                              onChange={(e) => handleQuestionChange(qIndex, "correctAnswer", e.target.value)}
                            />
                            <input
                              type="text"
                              className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                              value={option}
                              onChange={(e) => handleQuestionChange(qIndex, `option-${oIndex}`, e.target.value)}
                              placeholder={`Option ${oIndex + 1}`}
                              required
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                <button
                  type="submit"
                  className="flex items-center gap-2 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                >
                  <FaClipboardList /> Schedule Test
                </button>
              </form>
            </div>
          )}

          {activeTab === "assignments" && (
            <div>
              <h2 className="text-2xl font-semibold mb-6 text-gray-800">Schedule an Assignment</h2>
              <form onSubmit={handleAddAssignment} className="space-y-4">
                <div>
                  <label className="block text-gray-700 mb-2">Assignment Title</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={newAssignment.title}
                    onChange={(e) => setNewAssignment({ ...newAssignment, title: e.target.value })}
                    placeholder="Enter assignment title"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">Course</label>
                  <select
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={newAssignment.course}
                    onChange={(e) => setNewAssignment({ ...newAssignment, course: e.target.value })}
                    required
                  >
                    <option value="">Select Course</option>
                    <option value="cs101">CS101: Introduction to Computer Science</option>
                    <option value="cs201">CS201: Data Structures and Algorithms</option>
                    <option value="cs301">CS301: Machine Learning</option>
                    <option value="cs401">CS401: Neural Networks</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">Description</label>
                  <textarea
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[150px]"
                    value={newAssignment.description}
                    onChange={(e) => setNewAssignment({ ...newAssignment, description: e.target.value })}
                    placeholder="Enter assignment description"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">Deadline</label>
                  <input
                    type="datetime-local"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={newAssignment.deadline}
                    onChange={(e) => setNewAssignment({ ...newAssignment, deadline: e.target.value })}
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="flex items-center gap-2 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                >
                  <FaLink /> Schedule Assignment
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default AdminPanel