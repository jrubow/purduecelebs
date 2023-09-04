"use client";

import React from 'react'
import {useState} from 'react'
import styles from "./page.module.css"

function page() {
  const [step, setStep] = useState(0);

  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <div className={styles.headerBackground}></div>
        <p className={styles.headerText}>Post Sighting!</p>
      </div>
      {
        step == 0 ? 
          <div className="form"> 
            <input></input>
          </div>
        : step == 1 ? 
          <div className={styles.step1}>
            
          </div>
        : step == 2 ? 
          <div className={styles.step2}> 

          </div>
        : step == 3 ? 
          <div className={styles.step3}>

          </div>
        : 
          <div className={styles.step4}>

          </div>
          
      }
    </div>
  )
}

export default page