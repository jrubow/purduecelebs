"use client";

import React from 'react'
import styles from "./page.module.css"
import { usePathname } from 'next/navigation'



async function loadCeleb(id) {
    try {
        //const res = await axios.get(process.env.API_SERVER + "/api/celebs/" + )
        const res = {data:"test"}
        return res.data
    } catch (err) {
        console.error(err)
        throw err;
    }
}

async function page() {
    const pathname = usePathname().split("/")
    console.log(pathname[pathname.length - 1])
    const post = await loadCeleb(pathname[pathname.length - 1])

  return (
    <div className={styles.main}>
        <div className={styles.image}></div>
        <div className={styles.text}>
            <h1>{post.name} spotted at {}</h1>
        </div>
    </div>
  )
}

export default page