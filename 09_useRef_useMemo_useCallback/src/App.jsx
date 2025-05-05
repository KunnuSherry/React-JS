import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hooks from './hooks/useRef'
import UseMemo from './hooks/useMemo'
import UseCallback from './hooks/useCallback'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Use Ref Hook</h1>
      <Hooks/>
      <h1>Use Memo Hook</h1>
      <UseMemo/>
      <h1>Use CallBack Hook</h1>
      <UseCallback/>
    </>
  )
}

export default App
