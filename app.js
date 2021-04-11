const express = require('express')
const app = express()

const PORT = process.env.PORT || 3000



app.get("/",(req,res)=>{
    return res.json('tá valendo')
})

app.listen(PORT,()=>{
    console.log("Server no ar:" + PORT)
})