import React from 'react'
import MainLayout from '../layouts/MainLayout'

export default function Attendance(){
  return (
    <MainLayout>
      <h2 className="text-lg font-semibold">Attendance</h2>
      <div className="mt-4 grid grid-cols-2 gap-3">
        <div className="bg-brand-800 p-4 rounded">Mark attendance UI and monthly view placeholder.</div>
        <div className="bg-brand-800 p-4 rounded">Analytics and reports placeholder.</div>
      </div>
    </MainLayout>
  )
}
