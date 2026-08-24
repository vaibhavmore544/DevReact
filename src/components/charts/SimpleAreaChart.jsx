import React from 'react'
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'

export default function SimpleAreaChart({ data, dataKey }){
  return (
    <ResponsiveContainer width="100%" height={160}>
      <AreaChart data={data}>
        <defs>
          <linearGradient id="colorA" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#6366f1" stopOpacity={0.8}/>
            <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
          </linearGradient>
        </defs>
        <XAxis dataKey="name" tick={{fill:'#9CA3AF'}} />
        <YAxis tick={{fill:'#9CA3AF'}} />
        <Tooltip />
        <Area type="monotone" dataKey={dataKey} stroke="#6366f1" fillOpacity={1} fill="url(#colorA)" />
      </AreaChart>
    </ResponsiveContainer>
  )
}
