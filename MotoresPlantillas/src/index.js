import express from 'express'
import { productRouter } from "./routers/ProductRouter.js"
import handlebars from "express-handlebars"
import { ViewsRouter } from './routers/ViewsRouter.js'
const PORT=8080
const app=express()
app.use (express.json())
app.engine(
    "hbs",
    handlebars.engine({
        extname: '.hbs',
        defaultLayout: "main.hbs"
    }))
app.use(express.urlencoded({extended:true}))
app.set ('view engine', 'hbs')
app.set ('views', './views')
app.use('/api/productos', productRouter)
app.use('/', ViewsRouter)
const server=app.listen(PORT,()=>console.log(`server escuchado en el puerto ${server.address().port}`))
server.on('error', error=> console.log(`error de servidor ${error}`))
