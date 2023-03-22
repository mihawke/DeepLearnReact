import React from 'react'
import styles from './styles/navbar.module.css'

export const NavBar = () => {
  return (
    <div>
      <div className={styles.container}>
        <ul className={styles.navContainer}>
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
