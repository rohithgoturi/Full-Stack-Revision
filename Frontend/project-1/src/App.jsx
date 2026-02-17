import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import CreatePost from './pages/CreatePost'
import HomePage from './pages/HomePage'
import ViewPost from './pages/ViewPost'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/create-post' element={<CreatePost />} />
        <Route path='/' element={<HomePage />} />

        <Route path='/view-post' element={<ViewPost />} />
      </Routes>
    </Router>
  )
}

export default App
