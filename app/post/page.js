"use client";

import React from 'react'
import styles from "./page.module.css"

function page() {
  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <div className={styles.headerBackground}></div>
        <p className={styles.headerText}>Post Sighting!</p>
      </div>
      
      <div className="form"> 
        <input></input>

      </div>
    </div>
  )
}

export default page