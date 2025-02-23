const express = require('express')

const app = express()

app.get("/", async (req,res)=>{
    res.json({message:"Listening on 500"})
})

app.listen(5000)