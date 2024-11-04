import { create } from 'domain'
import React from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

const Navbar = () => {

  return (
    <div>
        <nav  className="flex justify-center space-x-4 py-7 text-3xl font-bold">

          <Link to="/swap">Swap</Link>
          <Link to="/liquidity">Liquidity</Link>
          <Link to="/portfolio">Portfolio</Link> 
          <Link to="/more">More</Link> 
        </nav>
    </div>
  )
}

export default Navbar