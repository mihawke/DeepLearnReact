import React from 'react'
import './styles/navbar.css'

export const NavBar = () => {
  return (
    <div>
        <div>
        <ul className='nav-container'>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  )
}
