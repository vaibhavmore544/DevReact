import React from 'react'
import MainLayout from '../layouts/MainLayout'

export default function CICD(){
  const pipelines = [
    { id:1, name:'Build', status:'success' },
    { id:2, name:'Test', status:'running' },
    { id:3, name:'Deploy', status:'failed' }
  ]

  return (
    <MainLayout>
      <h2 className="text-lg font-semibold">CI/CD Dashboard</h2>
      <div className="mt-4 grid grid-cols-3 gap-3">
        {pipelines.map(p=> (
          <div key={p.id} className="bg-brand-800 p-3 rounded">
            <div className="font-semibold">{p.name}</div>
            <div className="text-sm text-gray-400 mt-2">Status: {p.status}</div>
          </div>
        ))}
      </div>
    </MainLayout>
  )
}
