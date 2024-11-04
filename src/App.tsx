import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Liquidity from './components/Liquidity';
import Swap from './components/Swap';
import Portfolio from './components/Portfolio';
import More from './components/More';

const router = createBrowserRouter([
  {
    path: '/',
    element: <><Navbar /><div className="text-3xl font-bold text-center">Billa 69</div></>,
    errorElement: <div>Error loading page</div>,
  },
  {
    path: '/swap',
    element: <><Navbar /><Swap /></>,
    errorElement: <div>Error loading Swap</div>,
  },
  {
    path: '/liquidity',
    element: <><Navbar /><Liquidity /></>,
    errorElement: <div>Error loading Liquidity</div>,
  },
  {
    path: '/more',
    element: <><Navbar /><More /></>,
    errorElement: <div>Error loading More</div>,
  },
  {
    path: '/portfolio',
    element: <><Navbar /><Portfolio /></>,
    errorElement: <div>Error loading Portfolio</div>,
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;