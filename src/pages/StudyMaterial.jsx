"use client"

import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { FaFilePdf, FaFileWord, FaFilePowerpoint, FaFileVideo, FaDownload } from "react-icons/fa"
import Navbar from "../components/Navbar"

const StudyMaterial = ({ isLoggedIn }) => {
  const navigate = useNavigate()

  const materials = [
    {
      id: 1,
      title: "Introduction to Neural Networks",
      type: "pdf",
      size: "2.5 MB",
      uploadedBy: "Dr. Sarah Johnson",
      date: "2025-03-15",
      icon: <FaFilePdf className="text-red-500 text-xl" />,
    },
    {
      id: 2,
      title: "Data Structures and Algorithms",
      type: "doc",
      size: "1.8 MB",
      uploadedBy: "Prof. Michael Brown",
      date: "2025-03-10",
      icon: <FaFileWord className="text-blue-500 text-xl" />,
    },
    {
      id: 3,
      title: "Machine Learning Fundamentals",
      type: "ppt",
      size: "5.2 MB",
      uploadedBy: "Dr. Emily Chen",
      date: "2025-03-05",
      icon: <FaFilePowerpoint className="text-orange-500 text-xl" />,
    },
    {
      id: 4,
      title: "Database Design Principles",
      type: "pdf",
      size: "3.1 MB",
      uploadedBy: "Prof. Robert Wilson",
      date: "2025-02-28",
      icon: <FaFilePdf className="text-red-500 text-xl" />,
    },
    {
      id: 5,
      title: "Web Development Basics",
      type: "doc",
      size: "2.0 MB",
      uploadedBy: "Dr. Lisa Martinez",
      date: "2025-02-20",
      icon: <FaFileWord className="text-blue-500 text-xl" />,
    },
    {
      id: 6,
      title: "Neural Network Implementation Tutorial",
      type: "video",
      size: "45.6 MB",
      uploadedBy: "Dr. Sarah Johnson",
      date: "2025-03-18",
      icon: <FaFileVideo className="text-purple-500 text-xl" />,
    },
  ]

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/")
    }
  }, [isLoggedIn, navigate])

  const handleDownload = (id) => {
    console.log(`Downloading file ${id}`)
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="max-w-5xl mx-auto p-6">
        <h1 className="text-3xl font-semibold text-gray-800">Study Materials</h1>
        <p className="text-gray-600 mb-6">Access all your course materials in one place</p>

        <div className="flex gap-4 mb-6">
          <input type="text" placeholder="Search for materials..." className="w-full p-3 border rounded-lg" />
          <select className="p-3 border rounded-lg">
            <option value="all">All Types</option>
            <option value="pdf">PDF</option>
            <option value="doc">DOC</option>
            <option value="ppt">PPT</option>
            <option value="video">Video</option>
          </select>
        </div>

        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <div className="grid grid-cols-6 bg-gray-200 p-3 font-semibold text-gray-700">
            <div>Name</div>
            <div>Type</div>
            <div>Size</div>
            <div>Uploaded By</div>
            <div>Date</div>
            <div>Action</div>
          </div>
          {materials.map((material) => (
            <div key={material.id} className="grid grid-cols-6 p-3 border-b items-center text-gray-700">
              <div className="flex items-center gap-2">
                {material.icon}
                <span>{material.title}</span>
              </div>
              <div>{material.type.toUpperCase()}</div>
              <div>{material.size}</div>
              <div>{material.uploadedBy}</div>
              <div>{new Date(material.date).toLocaleDateString()}</div>
              <div>
                <button
                  className="flex items-center gap-2 bg-blue-500 text-white px-3 py-1 rounded-lg hover:bg-blue-600"
                  onClick={() => handleDownload(material.id)}
                >
                  <FaDownload /> Download
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default StudyMaterial