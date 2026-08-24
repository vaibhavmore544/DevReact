import React, { useState } from 'react'
import MainLayout from '../layouts/MainLayout'

const materials = [
  { id:1, title:'Linux Guide', category:'Linux' },
  { id:2, title:'Git Basics', category:'Git' },
  { id:3, title:'Docker Primer', category:'Docker' },
  { id:4, title:'Kubernetes Intro', category:'Kubernetes' }
]

export default function StudyMaterials(){
  const [q,setQ] = useState('')
  const [cat,setCat] = useState('')
  const filtered = materials.filter(m=> (!cat || m.category===cat) && (!q || m.title.toLowerCase().includes(q.toLowerCase())))

  return (
    <MainLayout>
      <h2 className="text-lg font-semibold">Study Materials</h2>
      <div className="mt-4 flex gap-2">
        <input placeholder="Search" value={q} onChange={e=>setQ(e.target.value)} className="p-2 bg-transparent border rounded" />
        <select value={cat} onChange={e=>setCat(e.target.value)} className="p-2 bg-transparent border rounded">
          <option value="">All</option>
          <option>Linux</option>
          <option>Git</option>
          <option>Docker</option>
          <option>Kubernetes</option>
        </select>
      </div>
      <div className="mt-4 grid grid-cols-2 gap-3">
        {filtered.map(m=> (
          <div key={m.id} className="bg-brand-800 p-3 rounded flex justify-between items-center">
            <div>
              <div className="font-semibold">{m.title}</div>
              <div className="text-sm text-gray-400">{m.category}</div>
            </div>
            <div className="flex gap-2">
              <button className="px-3 py-1 bg-gray-700 rounded">Download</button>
            </div>
          </div>
        ))}
      </div>
    </MainLayout>
  )
}
