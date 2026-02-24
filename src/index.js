import dotenv from "dotenv";

dotenv.config({path: "./env"})

import connectDB from "./db/index.js"

connectDB()


/*
// Approach One
import mongoose from "mongoose";
import { DB_NAME } from "./constants";
import express from "express"
import dotenv from "dotenv";

dotenv.config({path: "./env"})

const app = express()
; (async () => {
  try {
    await mongoose.connect(`${process.env.MONGODP_URI}/${DB_NAME}`)

    app.on("error", (e) => {
      console.log("Error => "+e);
      throw e;
    })

    app.listen(process.env.PORT, ()=>{
      console.log(`App listine on port ${process.env.PORT}`)
    })
    
  } catch (error) {
    console.error("Error => " + error)
    throw error
  }
})()
  */