//creating server using express 
const express = require('express') ;
const app = express() ;
const port = 3000 ;

//TODO we are going to create crud api's, then we are going to split the api's functionality into different files 





app.listen(port,()=>{
console.log(`server is running on ${port}`)
})