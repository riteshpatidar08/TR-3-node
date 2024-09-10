//creating server using express 
const express = require('express') ;
const product = require('./product')
const app = express() ;

const port = 3000 ;

app.use(express.json()) ;
//TODO we are going to create crud api's, then we are going to split the api's functionality into different files 

//NOTE READ 
//accepts two params first is 'url for api' second is function 

app.get('/api/v1/getproduct', (req,res)=>{
    res.status(200).json({
        length : product.length,
        data : product
    })
//   res.status(200).send(product)
})

//NOTE fetching single product data 
//NOTE how to send the id in url and retrieve it.

app.get('/api/v1/getproduct/:id',(req,res)=>{
    console.log(req.params)
    const id = parseInt(req.params.id)
    const filterProduct = product.filter((product)=> {
        return product.id === id
    })
    res.json({
        data : filterProduct
    })
})

//NOTE creating new product - POST METHOD

app.post('/api/v1/addproduct',(req,res)=>{
const newData = req.body ;
newData.id = product.length + 1 ;
 product.push(newData) ;
 res.json({
  data :  product
 })
})

app.delete('/api/v1/deleteproduct/:id',(req,res)=>{
    const id = parseInt(req.params.id);
    const filterProduct = product.filter((product)=>{
        return product.id !== id
    })
    res.json({
       data : filterProduct
    })
})

app.listen(port,()=>{
console.log(`server is running on ${port}`)
})


