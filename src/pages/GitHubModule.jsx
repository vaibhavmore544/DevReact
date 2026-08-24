import React from 'react'
import MainLayout from '../layouts/MainLayout'

const commands = ['git init','git clone','git add','git commit','git push','git pull','git branch','git checkout','git merge','git rebase']

export default function GitHubModule(){
  return (
    <MainLayout>
      <h2 className="text-lg font-semibold">Git & GitHub Module</h2>
      <div className="mt-4 grid grid-cols-2 gap-3">
        {commands.map(cmd=> (
          <div key={cmd} className="bg-brand-800 p-3 rounded">
            <div className="font-mono">{cmd}</div>
            <div className="text-sm text-gray-400 mt-1">Quick notes for {cmd}.</div>
          </div>
        ))}
      </div>
    </MainLayout>
  )
}
