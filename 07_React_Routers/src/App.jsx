import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route, useNavigate, Link, useRoutes } from 'react-router-dom'
import RecipeList from './pages/recipes'
import Comments from './pages/comments'
import RecipeDetails from './pages/recipe-details'
import NotFoundPage from './pages/not_found'
import Layout from './components/layout'

function CustomRoutes() {
  const ele = useRoutes([
    {
      path: '/home',
      element: <Layout />,
      children: [
        { path: 'recipe-list', element: <RecipeList /> },
        { path: 'comment-list', element: <Comments /> },
        { path: 'recipe-list/:id', element: <RecipeDetails /> }
      ]
    },
    { path: '*', element: <NotFoundPage /> }
  ]);
  return ele;
}


function App() {
  const [count, setCount] = useState(0)
  const navigate = useNavigate()

  return (
    <>
      <h1>React Router DOM</h1>
      <div>
        <Link to={'/recipe-list'}>Alternative way to navigate recipes</Link>
      </div>
      <button onClick={()=>navigate('/home/recipe-list')}>Navigate to Recipe</button>
      <button onClick={()=>navigate('/home/comment-list')}>Naviagte to Comments</button>
      {/* <Routes>
        <Route path='/home' element={<Layout/>}>
          <Route path='recipe-list' element={<RecipeList />} />
          <Route path='comment-list' element={<Comments />} />
          <Route path='recipe-list/:id' element={<RecipeDetails/>}/>
        </Route>
        <Route path='*' element={<NotFoundPage/>}/>
      </Routes>         */}
      <CustomRoutes/>
    </>
  )
}

export default App
