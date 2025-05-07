import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ReactQueryExample from './demo'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      React Query and Transtack Query
      <ReactQueryExample/>
    </>
  )
}

export default App
