import React from 'react'
import styles from './styles/HomePage.module.css'
import { Cards } from '../components/cards'
import { NavBar } from '../components/navbar'

const HomePage = () => {
  return (
    <div className={styles.container}>
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