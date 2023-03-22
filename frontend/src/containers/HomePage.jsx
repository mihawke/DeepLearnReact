import React from 'react'
import './styles/HomePage.css'
import { Cards } from '../components/cards'
import { NavBar } from '../components/navbar'

const HomePage = () => {
  return (
    <div className='container'>
      <div>
        <NavBar/>
      </div>
      <div>
        <Cards/>
      </div>
    </div>
  )
}

export default HomePage