import React from 'react'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'

export default function MainLayout({ children }) {
  return (
    <div className="flex app-container">
      <Sidebar />
      <div className="flex-1 min-h-screen p-6">
        <Header />
        <main className="mt-6">{children}</main>
      </div>
    </div>
  )
}
