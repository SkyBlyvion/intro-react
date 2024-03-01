import React from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'
import Screen1 from './Screen1'
import Screen2 from './Screen2'

const App = () => {
  return (
    // <Routes>
    //   <Route path="/" element={<Screen1 />} />
    //   <Route path="/toto" element={<Screen2 />} />
    // </Routes>
    <Outlet />
  )
}

export default App