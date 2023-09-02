import React from 'react'
import styles from "./page.module.css"

function page() {
  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <h2>Post Sighting!</h2>
      </div>
    </div>
  )
}

export default page