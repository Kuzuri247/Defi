import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { Router } from 'lucide-react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Liquidity from './components/Liquidity'
import Swap from './components/Swap'
import Portfolio from './components/Portfolio'
import More from './components/More'



function App() {
  
  const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      errorElement: <App />,
    },
    {
      path: '/swap',
      element: < Swap/>,
      errorElement: <App />,
    },
    {
      path: '/liquidity',
      element: <Liquidity />,
      errorElement: <App />,
    },
    {
      path: '/more ',
      element: <More/>,
      errorElement: <App />,
    }
  ])

  return (
    <div className=" text-3xl font-bold text-center">
      <Navbar/>
      Billa 69
    </div>
  )
}

export default App
