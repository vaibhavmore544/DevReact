import React, { useState } from 'react'
import MainLayout from '../layouts/MainLayout'
import StudentList from '../components/StudentList'
import StudentForm from '../components/StudentForm'

export default function Students(){
  const [showForm, setShowForm] = useState(false)
  return (
    <MainLayout>
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold">Students</h2>
        <div>
          <button onClick={()=>setShowForm(s=>!s)} className="px-3 py-1 bg-indigo-600 rounded">{showForm? 'Close' : 'Add Student'}</button>
        </div>
      </div>
      <div className="mt-4">
        {showForm && <StudentForm onSuccess={()=>setShowForm(false)} />}
        <StudentList />
      </div>
    </MainLayout>
  )
}
