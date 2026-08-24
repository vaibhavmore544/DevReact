import React, { useState, useContext, useEffect } from 'react'
import { StudentContext } from '../context/StudentContext'
import { generateEnrollmentId } from '../services/storageService'

export default function StudentForm({ initial, onSuccess }){
  const isEdit = Boolean(initial)
  const [form, setForm] = useState(initial || { name: '', email: '', phone: '', course: '', enrollmentDate: '', github: '', attendance: 0 })
  const { addStudent, updateStudent } = useContext(StudentContext)

  function handleChange(e){
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  useEffect(()=>{
    if(!isEdit && !form.enrollmentDate) setForm(f => ({ ...f, enrollmentDate: new Date().toISOString().slice(0,10) }))
  }, [])

  function handleSubmit(e){
    e.preventDefault()
    if(!form.name || !form.email) return alert('Name and email required')
    if(isEdit){
      updateStudent(initial.id, form)
    } else {
      const s = { ...form, id: generateEnrollmentId() }
      addStudent(s)
    }
    onSuccess && onSuccess()
  }

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-3 bg-brand-800 p-4 rounded">
      <input name="name" value={form.name} onChange={handleChange} placeholder="Name" className="p-2 bg-transparent border rounded" />
      <input name="email" value={form.email} onChange={handleChange} placeholder="Email" className="p-2 bg-transparent border rounded" />
      <input name="phone" value={form.phone} onChange={handleChange} placeholder="Phone" className="p-2 bg-transparent border rounded" />
      <input name="github" value={form.github} onChange={handleChange} placeholder="GitHub Username" className="p-2 bg-transparent border rounded" />
      <input name="course" value={form.course} onChange={handleChange} placeholder="Course" className="p-2 bg-transparent border rounded" />
      <input type="date" name="enrollmentDate" value={form.enrollmentDate} onChange={handleChange} className="p-2 bg-transparent border rounded" />
      <input name="attendance" value={form.attendance} onChange={handleChange} placeholder="Attendance %" className="p-2 bg-transparent border rounded" />
      <div className="col-span-2 flex justify-end gap-2">
        <button type="button" onClick={() => onSuccess && onSuccess()} className="px-3 py-1">Cancel</button>
        <button type="submit" className="px-3 py-1 bg-indigo-600 rounded">{isEdit? 'Update' : 'Register'}</button>
      </div>
    </form>
  )
}
