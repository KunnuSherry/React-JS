import { useState, useEffect } from 'react';
import './App.css';
import UserList from './components/users';
import ContextButton from './components/context-concept/button';
import ContextText from './components/context-concept/text';
import UseReducer from './useReducer/use-reducer';
function App() {
  const [flag, setFlag] = useState(false);
  const [count, setCount] = useState(0);
  const [changeColor, setChangeColor] = useState(false);

  function toggleText() {
    setFlag(!flag);
  }

  function handleCount() {
    setCount(count + 1);
  }

  useEffect(() => {
    setFlag(!flag);
    console.log('Run Only once');
    return ()=>{
      console.log("component destroyed");
    }
  }, []); // Runs only on mount, like componentDidMount in class-based components

  useEffect(() => {
    if (count === 10) setChangeColor(true);
  }, [count]);

  return (
    <>
      <h3>{flag ? 'Hi There True' : 'Hi There False'}</h3>
      <button onClick={toggleText}>Click</button>

      {/* ✅ Corrected style syntax */}
      <h3 style={{ color: changeColor ? 'red' : 'green' }}>Count is {count}</h3>
      <button onClick={handleCount}>Increase count</button>
      <UserList/>

      <ContextButton/>
      <ContextText/>
      <UseReducer/>
    </>
  );
}

export default App;
