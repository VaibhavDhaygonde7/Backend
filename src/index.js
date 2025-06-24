// require('dotenv').config({path: './env'}) // the only problem here is, that this not consistent with the syntax which we are using elsewhere

import mongoose from "mongoose";
import dotenv from 'dotenv'
import connectDB from "./db/index.js";

dotenv.config({
    path: './env'
})

connectDB()













/*
One of the methods to do it

import express from "express" 
const app = express() 

( async () =>{
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error", (error)=>{
            console.log("ERROR: ", error); 
            throw error 
        })

        app.listen(process.env.PORT, ()=>{
            console.log(`Application is listening on http://localhost:${process.env.PORT}`)
        })

    }
    catch{
        console.error("Cannot connect to the database ", error)

        throw error
    }
})()

*/