import React from 'react'

export default function Header(){
  return (
    <header className="flex items-center justify-between">
      <h1 className="text-xl font-semibold">DevOps Learning Portal</h1>
      <div className="flex items-center gap-4">
        <button className="px-3 py-1 bg-gray-700 rounded">Dark</button>
      </div>
    </header>
  )
}
