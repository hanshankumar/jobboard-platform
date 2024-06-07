import React from 'react'
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Loginpage from './Pages/LoginPage'
import Signup from './Pages/Signup';
import Landing from './Pages/Landing';
import Home from './Pages/Home'

function App() {


  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Landing/>}></Route>
          <Route path="/login" element={<Loginpage/>}></Route>
          <Route path='/signup' element={<Signup/>}></Route>
          <Route path='/Home' element={<Home/>}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App