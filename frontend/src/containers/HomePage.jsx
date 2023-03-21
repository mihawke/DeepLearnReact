import React from 'react'
import '../styles/HomePage.css'

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
      <h1>HomePage</h1>
    </div>
  )
}

export default HomePage