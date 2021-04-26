import React, { useEffect } from 'react'

import Header from '../components/Header'
import Timeline from '../components/Timeline'
import Sidebar from '../components/Sidebar'

const Dashboard = () => {
  useEffect(() => {
    document.title = 'Instagram'
  }, [])

  return (
    <div className='bg-gray-background'>
      <Header />

      <div className='grid'>
        <Timeline />
        <Sidebar />
      </div>
    </div>
  )
}

export default Dashboard
