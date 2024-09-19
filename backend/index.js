import express from "express";
import {PORT} from "./config.js"
import mongoose from 'mongoose'
import { Book } from "./models/bookModel.js";
import booksRoute from './routes/booksRoute.js'
import cors from 'cors'; // Add this line to import cors
import path from "path";
const app = express()
const __dirname = path.resolve()
mongoose.set('strictQuery', true);

app.use(express.json())

app.use(cors());

app.use('/books',booksRoute);

app.get("/",(req,res)=>{
    res.send("Data is coming")
})
app.use(express.static(path.join(__dirname,"/frontend/dist")))
app.get('*',(_,res)=>{
    res.sendFile(path.resolve(__dirname,"frontend","dist","index.html"))
})

app.listen(PORT,(req,res)=>{
    console.log(`Server is running on  ${PORT}`)
})




// mongodb+srv://localhost:12345@cluster0.zqmar.mongodb.net/localhost?retryWrites=true&w=majority&appName=Cluster0
mongoose.connect('mongodb+srv://store:12345@cluster0.hqw7x.mongodb.net/localhost?retryWrites=true&w=majority&appName=Cluster0')

.then(()=>{
    console.log("Successfully connected")
})
.catch((error)=>{
    console.log("error while connection")
});

