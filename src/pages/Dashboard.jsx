import React, { useContext } from 'react'
import MainLayout from '../layouts/MainLayout'
import StatCard from '../components/StatCard'
import SimpleAreaChart from '../components/charts/SimpleAreaChart'
import { StudentContext } from '../context/StudentContext'

const enrollmentData = [
  { name: 'May', students: 5 }, { name: 'Jun', students: 8 }, { name: 'Jul', students: 12 }, { name: 'Aug', students: 9 }
]

export default function Dashboard(){
  const { students } = useContext(StudentContext)
  const avgAttendance = Math.round((students.reduce((s,a)=>s+a.attendance,0) / Math.max(1, students.length))||0)

  return (
    <MainLayout>
      <div className="grid grid-cols-3 gap-4">
        <StatCard title="Total Students" value={students.length} />
        <StatCard title="Avg Attendance" value={`${avgAttendance}%`} />
        <StatCard title="Active Courses" value={new Set(students.map(s=>s.course)).size} />
      </div>

      <div className="mt-6 grid grid-cols-2 gap-4">
        <div className="bg-brand-800 p-4 rounded">
          <h3 className="font-semibold mb-2">Enrollment Analytics</h3>
          <SimpleAreaChart data={enrollmentData} dataKey="students" />
        </div>
        <div className="bg-brand-800 p-4 rounded">
          <h3 className="font-semibold mb-2">Course Progress</h3>
          <p className="text-sm text-gray-400">Sample progress charts will go here.</p>
        </div>
      </div>
    </MainLayout>
  )
}
