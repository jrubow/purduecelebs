import React from 'react'
import styles from "./styles/celeb.module.css"

function Celeb({name, target, sightings}) {
  return (
    <div className={styles.celebMain}>
        <div className={styles.name}>
            <p>{name}</p>
        </div>

        <div className={styles.sightings}>
            <p>Sightings today: {sightings}</p>
        </div>
    </div>
  )
}

export default Celeb