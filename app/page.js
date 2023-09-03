import React from 'react'
import Button from "../utilities/button.js"
import styles from "./page.module.css"
import Celeb from "../utilities/Celeb.js"
import axios from "axios"

async function loadData() {
  try {
    console.log("hello")
    const response = await axios.get(process.env.API_SERVER + "/api/celebs");
    return response.data.celebs;
  } catch (error) {
    console.error(error);
    throw error; // Re-throw the error to be caught by the caller, if needed.
  }
}

async function Page() {
  const res = await loadData()
  console.log("data" + res)
  return (
    <div className={styles.mainpage}>
      <Button text="Post Sighting!" target="/post" bColor="#B5E61D"/>
      <div className={styles.celebs}>
        {res ? (
          res.map((celeb, index) => (
            <Celeb key={index} name={celeb.name} src={celeb.src}/>
          ))
        ) : (
          "Loading"
        )}
      </div>
      <div style={{marginTop:'50px',marginBottom:"50px"}}><Button text="Explore!" target="/post" bColor="#B5E61D"/></div>
    </div>
  );
}

export default Page;