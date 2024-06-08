import React from 'react'
import "./App.css"
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './layout/Layout'
import Home from './pages/home/home'
import Action from './pages/action/action'
import ActionByid from './pages/actionByid/actionByid'






const App = () => {

  const router = createBrowserRouter([
    {
      path : "/",
      element : <Layout/>,
      children :[
        {
          index : true,
          element : <Home/>
        },
        {
          path : "/action",
          element : <Action/>
        },
        {
          path : "/action/:id",
          element : <ActionByid/>
        }
      ]
    }
  ])

  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
