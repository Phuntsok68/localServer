// Server application

import express from 'express';
const app=express();
const port=3000;

// solving the problem of Cannot GET/ with the HTTP get request
app.get('/',(req,res)=>{
    res.send('Hey here is your resource.');
})

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})
