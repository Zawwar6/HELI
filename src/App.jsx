import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login'
import Manageqo from './pages/Manageqo'
import Manageus from './pages/Manageus'

const App = () => {
  return (
     <div>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/manageqo" element={<Manageqo />} />
          <Route path="/manageus" element={<Manageus />} />
        </Routes>
      </Router>
     </div>
  )
}

export default App