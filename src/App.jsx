import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import HomeProperties from './pages/HomeProperties'
import Header from './components/Header'
import Footer from './components/Footer'
import LogIn from './pages/LogIn'
import SignUp from './pages/SignUp'

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<LogIn/>} />
        <Route path='/signup' element={<SignUp/>} />
        <Route path='/homeproperties' element={<HomeProperties/>} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
