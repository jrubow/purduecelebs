import React from 'react'
import styles from "./styles/navbar.module.css"

function navbar() {
  return (
    <div> 
        <div className={styles.navbar}>
            <h1>PurdueTracker.</h1>
        </div>
        <div className={styles.bar1}></div>
        <div className={styles.bar2}></div>
    </div>
  )
}

export default navbar