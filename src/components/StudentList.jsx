import React, { useContext, useState } from 'react'
import { StudentContext } from '../context/StudentContext'

export default function StudentList(){
  const { students, removeStudent } = useContext(StudentContext)
  const [q, setQ] = useState('')
  const [filter, setFilter] = useState('')

  const filtered = students.filter(s => {
    if (filter && s.course !== filter) return false
    if (!q) return true
    const v = q.toLowerCase()
    return s.name.toLowerCase().includes(v) || s.email.toLowerCase().includes(v) || s.github.toLowerCase().includes(v)
  })

  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        <input placeholder="Search" value={q} onChange={e=>setQ(e.target.value)} className="p-2 bg-transparent border rounded flex-1" />
        <select value={filter} onChange={e=>setFilter(e.target.value)} className="p-2 bg-transparent border rounded">
          <option value="">All Courses</option>
          <option>Linux</option>
          <option>Git</option>
          <option>Kubernetes</option>
        </select>
      </div>
      <div className="bg-brand-800 p-3 rounded">
        <table className="w-full text-left text-sm">
          <thead className="text-gray-400">
            <tr><th>ID</th><th>Name</th><th>Course</th><th>Attendance</th><th></th></tr>
          </thead>
          <tbody>
            {filtered.map(s=> (
              <tr key={s.id} className="border-t border-gray-700">
                <td className="py-2">{s.id}</td>
                <td>{s.name} <div className="text-xs text-gray-400">{s.email} • {s.github}</div></td>
                <td>{s.course}</td>
                <td>{s.attendance}%</td>
                <td className="text-right"><button onClick={()=>removeStudent(s.id)} className="text-red-400">Delete</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
