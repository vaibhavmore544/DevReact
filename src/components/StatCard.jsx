import React from 'react'

export default function StatCard({ title, value, children }){
  return (
    <div className="bg-brand-700 p-4 rounded shadow-sm w-full">
      <div className="text-sm text-gray-400">{title}</div>
      <div className="text-2xl font-bold">{value}</div>
      {children}
    </div>
  )
}
