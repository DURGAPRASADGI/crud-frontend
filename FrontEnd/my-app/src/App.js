import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from './Components/Login'
import GetAllCaustemers from './Components/GetAllCaustemers'
import AddCaustmer from './Components/AddCaustmer'

const App = () => {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/getAllCaustmer' element={<GetAllCaustemers />} />
          <Route path='/addCaustmer' element={<AddCaustmer />} />

        </Routes>


      </BrowserRouter>


    </>
  )
}

export default App
