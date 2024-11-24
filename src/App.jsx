import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import HomeProperties from './pages/HomeProperties'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/home' element={<Home/>} />
        <Route path='/homeproperties' element={<HomeProperties/>} />
      </Routes>
    </div>
  )
}

export default App
