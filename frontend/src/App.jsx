import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CreateRoom from './components/admin/CreateRoom'
import Room from './components/room/Room'
import RoomCard from './components/room/RoomCard'

import { Route, Routes } from 'react-router-dom'
import Layout from './components/layout/Layout'
import RoomDetails from './components/room/RoomDetails'
import Layout2 from './components/layout/Layout2'
import Login from './components/login/Login'
import Register from './components/login/Register'
import { selectUser, updateUser } from './redux/userSlice'
import { useDispatch } from 'react-redux'
import jwt_decode from "jwt-decode";
import Dashboard from './components/login/Dashboard'


function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      var decoded = jwt_decode(token);
      console.log(decoded)
      dispatch(updateUser(decoded))
    }
  }, [])


  return (
    <Routes>
      <Route path='/' element={<Layout><Room /></Layout>} />
      <Route path='/admin' element={<CreateRoom />} />
      <Route path='/room/:id' element={<Layout2><RoomDetails /></Layout2>} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/dashboard' element={<Layout2><Dashboard /></Layout2>} />
    </Routes>
  )
}

export default App
