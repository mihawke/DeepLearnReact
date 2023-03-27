import React from 'react'
import styles from './styles/HomePage.module.css'
import { Cards } from '../components/cards'
import { NavBar } from '../components/navbar'
import { SideBar } from '../components/sidebar'
import ImageList from '../components/imageShow'
import ImageUploader from '../components/imageUploader'



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
        <ImageUploader/>
      </div>
      <div>
        <ImageList></ImageList>
      </div>
    </div>
  )
}

export default HomePage