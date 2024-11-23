import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Home }from './components/pages/home/home'
import { Login } from './components/pages/login/loginPages'





function App() {
  const [count, setCount] = useState(0)

  return (
    
    <Routes>
      <Route path='/' element={<Home/>}/>   
      <Route path='/login' element={<Login/>}/>
    </Routes>
  )
}

export default App
