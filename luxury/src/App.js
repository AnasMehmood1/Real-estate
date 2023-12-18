import React from 'react'
import "./index.css"
import About from "./Pages/About"
import Home from './Pages/Home'
import Proper from './Pages/Proper'
import Contact from './Pages/Contact'

import { Route, Routes } from 'react-router-dom'
const App = () => {
  return (
    <div>
         
         <Routes>
         <Route  path='/' element={ <Home/>} />
         <Route  path='/about' element={ <About/>} />
         <Route  path='/property' element={ <Proper/>} />
         <Route  path='/contact' element={ <Contact/>} />
         </Routes>
    </div>
  )
}

export default App

