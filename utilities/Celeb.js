import React from 'react'
import styles from "./styles/celeb.module.css"
import Image from 'next/image'

function Celeb({name, target, sightings,src}) {
  return (
    <div className={styles.celebMain}>
        <div className={styles.name}>
            <p>{name}</p>
        </div>
        <Image src='/gymbro.jpg' width={300} height={400} style={{borderRadius:"15px",border:"5px solid black"}}/>
        <div className={styles.sightings}>
            <p>Sightings today: {sightings}</p>
        </div>
    </div>
  )
}

export default Celeb