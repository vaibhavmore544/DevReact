import React from 'react'
import MainLayout from '../layouts/MainLayout'

const commands = ['pwd','ls','cd','mkdir','rm','cp','mv','cat','grep','find','chmod','chown','ps','top','kill']

export default function Linux(){
  return (
    <MainLayout>
      <h2 className="text-lg font-semibold">Linux Learning Module</h2>
      <div className="mt-4 grid grid-cols-3 gap-3">
        {commands.map(cmd => (
          <div key={cmd} className="bg-brand-800 p-3 rounded">
            <div className="font-mono text-lg">{cmd}</div>
            <div className="text-sm text-gray-400 mt-2">Description for {cmd} command.</div>
          </div>
        ))}
      </div>
    </MainLayout>
  )
}
