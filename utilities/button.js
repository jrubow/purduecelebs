"use client";

import React from 'react'
import styles from "./styles/button.module.css"
import { useRouter} from 'next/navigation'



function button({text, bColor, target}) {
  const router = useRouter()

    console.log(bColor)
  return (
    <div onClick={() => router.push(target)} className={styles.buttonMain}>
        <div className={styles.buttonBackground} style={{backgroundColor:bColor}} onHover={bColor="red"}></div>
        <div className={styles.buttonContainer}></div>
        <p className={styles.buttonText}>{text}</p>
    </div>
  )
}

export default button