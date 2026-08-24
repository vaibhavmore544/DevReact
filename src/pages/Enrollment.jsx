import React from 'react'
import MainLayout from '../layouts/MainLayout'
import StudentForm from '../components/StudentForm'

export default function Enrollment(){
  return (
    <MainLayout>
      <h2 className="text-lg font-semibold">Enrollment</h2>
      <p className="text-sm text-gray-400">Register new students</p>
      <div className="mt-4">
        <StudentForm onSuccess={() => alert('Enrollment saved')} />
      </div>
    </MainLayout>
  )
}
