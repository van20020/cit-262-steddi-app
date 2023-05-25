const express = require("express");
const app = express();

app.get("/Christopher", (req, res)=>{
    res.send("Hello Christopher!");
})

app.get("/", (req, res)=>{

    res.send("Welcome to my Backend API o7");

})

app.listen(3000, ()=> {

    console.log("Listening");

})