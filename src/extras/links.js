import React from 'react'
import { Link } from 'react-router-dom'
import links from "./links.module.css"

const Links = () => (
  <header>
    <nav>
      <ul>
        <li><Link to='/shapeOne'>Shape One</Link></li>
        <li><Link to='/shapeTwo'>Shape Two</Link></li>
        <li><Link to='/shapeThree'>Shape Three</Link></li>
        <li><Link to='/shapeFour'>Shape Four</Link></li>
      </ul>
    </nav>
  </header>
)

export default Links