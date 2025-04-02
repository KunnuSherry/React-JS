import { useState } from 'react'
import './App.css'
import ClassBasedComponents from './components/class-based-component'
import FunctionalComponent from './components/fucntional-component'
import ProductList from './components/product'

const dummyProduct = ['Product1', 'Product2', 'Product3'];

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      React Js Concepts 2025
      <ClassBasedComponents/>
      {/* <FunctionalComponent/> */}
      {/* <ProductList name="Kunal" age="21" dummyProduct={dummyProduct} flag={false}/> */}
    </div>
    
  )
}

export default App
