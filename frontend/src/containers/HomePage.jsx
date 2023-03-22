import React from 'react'
import './styles/HomePage.css'
import { Cards } from '../components/cards'

const HomePage = () => {
  return (
    <div className='container'>
      <div>
        <Cards></Cards>
      </div>
    </div>
  )
}

export default HomePage