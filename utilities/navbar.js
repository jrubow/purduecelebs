"use client";

import React from 'react'
import styles from "./styles/navbar.module.css"
import { useRouter } from "next/navigation"

function navbar() {
  const router = useRouter()
  
  return (
    <div> 
        <div className={styles.navbar}>
            <h1 onClick={() => router.push("/")}>PurdueCelebs.</h1>
        </div>
        <div className={styles.bar1}></div>
        <div className={styles.bar2}></div>
    </div>
  )
}

export default navbar