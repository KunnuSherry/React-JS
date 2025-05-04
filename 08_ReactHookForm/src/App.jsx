import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ReactHookFormExample from './react-hook-form'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      Hi from react hooks form
      <ReactHookFormExample/>
    </>
  )
}

export default App
