import Header from '@/components/ui/header'
import React from 'react'
import { Outlet } from 'react-router-dom'

const AppLayout = () => {
  return (
    <div>
      <div className="grid-background"></div>
      <main className="min-h-screen container">
        <Header />
        <Outlet />
      </main>
      <div className="bg-gray-800 p-10 text-center mt-10">
        Made with 💗 By Aman Bhat
      </div>
    </div>
    
  )
}

export default AppLayout