import React from 'react'
import styles from './styles/HomePage.module.css'
import { Cards } from '../components/cards'
import { NavBar } from '../components/navbar'
import { SideBar } from '../components/sidebar'
import ImageUpload from '../components/imageUpload'
import ImageList from '../components/imageShow'



const HomePage = () => {
  return (
    <div className={styles.container}>
      <div>
        {/* <NavBar /> */}
      </div>
      {/* <div>
        <SideBar/>
      </div> */}
      <div>
        <Cards />
      </div>
      <div>
        <ImageUpload/>
      </div>
      <div>
        <ImageList></ImageList>
      </div>
    </div>
  )
}

export default HomePage