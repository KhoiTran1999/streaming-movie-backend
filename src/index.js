require("dotenv").config();
const {env} = require("./config/env")
const express = require("express");
const morgan = require("morgan");
const { connectDB } = require("./database/connectMySQL");
const app = express();
const PORT = env.PORT

//Middleware
app.use(express.json());
app.use(morgan("combined"));


//Connect DB
connectDB().then(()=>{
    console.log("MySQL have been connected");
}).catch(err=>console.log(err))

//Create Server
app.listen(PORT, ()=>{
    console.log(`Server is running on PORT ${PORT}`);
})