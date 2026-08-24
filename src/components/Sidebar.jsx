import React from 'react'
import { NavLink } from 'react-router-dom'

const links = [
  ['Dashboard', '/'],
  ['Students', '/students'],
  ['Enrollment', '/enrollment'],
  ['Linux', '/linux'],
  ['Git & GitHub', '/git'],
  ['Materials', '/materials'],
  ['Attendance', '/attendance'],
  ['Quiz', '/quiz'],
  ['CI/CD', '/cicd']
]

export default function Sidebar() {
  return (
    <aside className="w-64 bg-brand-800 min-h-screen p-4 sticky top-0">
      <div className="text-2xl font-bold mb-6">DevOps Portal</div>
      <nav className="flex flex-col gap-2">
        {links.map(([label, to]) => (
          <NavLink key={to} to={to} className={({isActive}) =>
            `block px-3 py-2 rounded ${isActive ? 'bg-brand-700 font-semibold' : 'hover:bg-brand-700'}`
          }>
            {label}
          </NavLink>
        ))}
      </nav>
    </aside>
  )
}
