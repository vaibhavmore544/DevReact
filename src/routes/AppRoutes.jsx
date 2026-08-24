import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Dashboard from '../pages/Dashboard'
import Students from '../pages/Students'
import Enrollment from '../pages/Enrollment'
import Linux from '../pages/Linux'
import GitHubModule from '../pages/GitHubModule'
import StudyMaterials from '../pages/StudyMaterials'
import Attendance from '../pages/Attendance'
import Quiz from '../pages/Quiz'
import CICD from '../pages/CICD'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/students" element={<Students />} />
      <Route path="/enrollment" element={<Enrollment />} />
      <Route path="/linux" element={<Linux />} />
      <Route path="/git" element={<GitHubModule />} />
      <Route path="/materials" element={<StudyMaterials />} />
      <Route path="/attendance" element={<Attendance />} />
      <Route path="/quiz" element={<Quiz />} />
      <Route path="/cicd" element={<CICD />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
