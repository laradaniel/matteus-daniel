import React from 'react'
import { Home } from './scenes'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/home/:module" element={<Home />} />
      </Routes>
    </Router>
  )
}

export default App
