const express = require('express')

const app = express()
const transaction_router = require("./router/transactionRouter")

app.use("/course-transactions", transaction_router)

app.get("/", async (req,res)=>{
    res.json({message:"Listening on 5000"})
})

app.listen(5000)