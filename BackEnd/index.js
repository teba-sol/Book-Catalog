import { PORT,mycon} from './config.js';
import express from "express";
import mongoose from "mongoose"
import { Book } from './models/bookModel.js';
import bookRoute from './Routes/bookRoute.js';
import cors from 'cors'
// const express=require('express');
const app = express();
app.use(express.json());
app.use(cors());
// app.use(cors({
//     origin: "http://localhost:3000",
//     method : ['GET','PUT','DELETE','POST'],
//     allowedHeader : ['Content-Type'],
// }));


app.use('/myBook' , bookRoute );

mongoose.connect(mycon) .then(()=>{
    console.log("app is connected to database")
    app.listen(PORT , ()=>{
        console.log(`app is listing to port :${PORT} `);
    })

}).catch((error)=>{
    console.log(error)
})
