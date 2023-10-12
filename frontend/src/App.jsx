import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CreateRoom from './components/admin/CreateRoom'
import Room from './components/room/Room'
import RoomCard from './components/room/RoomCard'

import { Route, Routes } from 'react-router-dom'
import Layout from './components/layout/Layout'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Layout><Room /></Layout>} />
      <Route path='/admin' element={<CreateRoom />} />
      <Route path='/room/:id' element={<RoomCard />} />
    </Routes>
  )
}

export default App
