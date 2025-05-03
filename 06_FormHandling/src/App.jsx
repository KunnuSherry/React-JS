import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FormComponent from './form/index'
import LoginComponent from './components/login'
import RegisterComponent from './register/register'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <FormComponent /> */}
      <FormComponent />
      <div style={{ display: "flex", gap: "20px" }}>
        <LoginComponent />
        <RegisterComponent />
      </div>

    </>
  )
}

export default App
