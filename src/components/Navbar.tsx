import { create } from 'domain'
import React from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

const Navbar = () => {
  
  

  return (
    <div>
        <nav  className="flex justify-center space-x-4 py-7">
          <a href="src/components/Swap.tsx">Swap</a>
          <a href="src/components/Liquidity.tsx">Liquidity</a>
          <a href="src/components/Portfolio.tsx">Portfolio</a> 
          <a href="src/components/More.tsx">More</a> 
        </nav>
    </div>
  )
}

export default Navbar