import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Home from   './components/Home'
import About from  './components/About'
import Login from  './components/Login'



import { createBrowserRouter, RouterProvider } from 'react-router-dom'


function App() {
  const [count, setCount] = useState(0)

  const router= createBrowserRouter([
    {
      path:"/home",
      element: <Home/>
    },
    {
       path:"/login",
      element:<Login/>
    },
    {
       path:"/about",
      element: <About/>
    }, 
  ])

  return (
    <>
      <div>
        ye rha app
       <Navbar/>
       <RouterProvider router={router}/>
      </div>
     
    </>
  )
}

export default App
