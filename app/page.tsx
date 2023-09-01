import React from 'react'
import Button from "../utilities/button.js"
import styles from "./page.module.css"
import Celeb from "../utilities/Celeb.js"

function page() {
  return (
    <div className={styles.mainpage}>
      <Button text="Post Sighting!" target="" bColor="#B5E61D"/>
      <div className={styles.celebs}>
        <Celeb name="GymBro" sightings={5} target=""/>
        <Celeb name="SaxBro" sightings={1} target=""/>
        <Celeb name="Purdue Spidey" sightings={8} target=""/>
      </div>
    </div>
  )
}

export default page