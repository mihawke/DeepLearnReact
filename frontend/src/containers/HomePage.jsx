import React from 'react'
import './styles/HomePage.css'
import { Cards } from '../components/cards'

const HomePage = () => {
  return (
    <div className='container'>
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
      <div>
        <Cards></Cards>
      </div>
    </div>
  )
}

export default HomePage