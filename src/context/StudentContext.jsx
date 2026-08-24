import React, { createContext, useEffect, useState } from 'react'
import sampleStudents from '../data/sampleStudents'

export const StudentContext = createContext(null)

const STORAGE_KEY = 'devops_students_v1'

export function StudentProvider({ children }) {
  const [students, setStudents] = useState([])

  useEffect(() => {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (raw) setStudents(JSON.parse(raw))
    else {
      setStudents(sampleStudents)
      localStorage.setItem(STORAGE_KEY, JSON.stringify(sampleStudents))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(students))
  }, [students])

  function addStudent(s) {
    setStudents(prev => [s, ...prev])
  }

  function updateStudent(id, updates) {
    setStudents(prev => prev.map(s => s.id === id ? { ...s, ...updates } : s))
  }

  function removeStudent(id) {
    setStudents(prev => prev.filter(s => s.id !== id))
  }

  return (
    <StudentContext.Provider value={{ students, addStudent, updateStudent, removeStudent }}>
      {children}
    </StudentContext.Provider>
  )
}
