import express from 'express'
import { datos } from './conexion.js'
var app = express()

app.get("/listar",(req,res)=>{
    datos().then((datos)=>{
        res.send(datos)
    }).catch((datos)=>console.log("ha ocurrido el siguiente error: ",datos))
})

app.listen(3000,()=>{
    console.log("servidor levantado: http://localhost:3000/")
})