import React from 'react'
import MainLayout from '../layouts/MainLayout'

export default function Quiz(){
  return (
    <MainLayout>
      <h2 className="text-lg font-semibold">Quiz Module</h2>
      <div className="mt-4 grid grid-cols-2 gap-3">
        <div className="bg-brand-800 p-4 rounded">Linux Quiz placeholder.</div>
        <div className="bg-brand-800 p-4 rounded">Git Quiz placeholder.</div>
      </div>
    </MainLayout>
  )
}
