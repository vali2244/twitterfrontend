/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import React from 'react'
import {BrowserRouter,Routes,Route }from "react-router-dom"
import Home from './Screen/Home'
import Login from './Screen/Login'
import Register from './Screen/Register'
import NoteFound from '../NoteFound'

const Routing = () => {
  return (
  <>
<BrowserRouter>
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/register' element={<Register/>}/>
  <Route path='/login' element={<Login/>}/>
  
  <Route path='*' element={<NoteFound/>}/>


  
</Routes>
</BrowserRouter>

  </>
  )
}

export default Routing