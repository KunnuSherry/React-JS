import { useState } from 'react'
import { useEffect } from 'react'
import { TodoItem } from './components/to-do-item'
import TodoDetails from './components/to-do-details'
import classes from './style.module.css'
import './App.css'

function App() {
  const[loading, setLoading] = useState(false);
  const[todoList, setTodoList] = useState([]);
  const[error, setError] = useState(null)
  const[todoDetails, setTodoDetails] = useState(null);
  const[openDialog, setOpenDialog] = useState(false);

  async function fetchListOfTodos(){
    try{
      setLoading(true);
      const apiResponse = await fetch('https://dummyjson.com/todos');
      const result = await apiResponse.json();
      console.log(result);
      if(result?.todos && result?.todos?.length>0){
        setTodoList(result?.todos);
        setLoading(false);
        setError("");
      }
      else{
        setTodoList([]);
        setLoading(true);
        setError("");
      }
    }
    catch(e){
      console.log(e);
      setError('Some Error Occured');
    }
  }

  async function getDetails(id){
    try{
      const apiResponse = await fetch(`https://dummyjson.com/todos/${id}`);
      const details = await apiResponse.json();
      if(details){
        setTodoDetails(details);
        setOpenDialog(true);
      }
      else{
        setTodoDetails(null);
        setOpenDialog(false);
      }
    }
    catch(e){
      console.log(e);
    }
    

  }

  useEffect(()=>{
    fetchListOfTodos()
  },[]);

  return (
    <div className={classes.mainWrapper}>
      <h1 className={classes.headerTitle}>Simple To Do List website</h1>
      <div className={classes.todoWrapper}>
        {
          todoList && todoList.length>=0 ?
          todoList.map((todoItem)=>(<TodoItem details={getDetails} todo={todoItem}/>)) : null
        }
      </div>
      <TodoDetails
        setOpenDialog={setOpenDialog}
        openDialog={openDialog}
        todoDetails={todoDetails}
        setTodoDetails={setTodoDetails}
      />
    </div>
  );
}

export default App
