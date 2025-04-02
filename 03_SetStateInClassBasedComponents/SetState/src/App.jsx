import { useState } from 'react'
import './App.css'
import ClassBasedComponents from './components/ClassBasedComponents'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      Hi
    <ClassBasedComponents/>      
    </>
  )
}

export default App
