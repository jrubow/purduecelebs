import React from 'react'
import styles from "./styles/button.module.css"

function redirect(target) {
    // redirect to target
}

function button({text, bColor, target}) {

    console.log(bColor)
  return (
    <div onClick={redirect(target)} className={styles.buttonMain}>
        <div className={styles.buttonBackground} style={{backgroundColor:bColor}} onHover={bColor="red"}></div>
        <div className={styles.buttonContainer}>
            <p>{text}</p>
        </div>
    </div>
  )
}

export default button