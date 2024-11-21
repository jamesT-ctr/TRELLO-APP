import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Home }from './components/pages/home/home'




function App() {
  const [count, setCount] = useState(0)

  return (
    
    <Routes>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Lilita+One&family=Marck+Script&family=Passions+Conflict&display=swap');
      </style>
      <Route path='/' element={<Home/>}/>   
    </Routes>
  )
}

export default App
