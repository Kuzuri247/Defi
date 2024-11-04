import { create } from 'domain'
import React from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

const Navbar = () => {
  
  

  return (
    <div>
        <nav  className="flex justify-center space-x-4 py-7 text-3xl font-bold">

          <Link to="src/components/Swap.tsx">Swap</Link>
          <Link to="src/components/Liquidity.tsx">Liquidity</Link>
          <Link to="src/components/Portfolio.tsx">Portfolio</Link> 
          <Link to="src/components/More.tsx">More</Link> 
        </nav>
    </div>
  )
}

export default Navbar