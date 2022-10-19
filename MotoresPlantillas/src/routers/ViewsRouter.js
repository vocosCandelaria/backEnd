import { Router } from "express";
import { ProductApi } from "../Api/ProductApi.js";
const ViewsRouter= Router()


ViewsRouter.get('/', (req,res)=>{
    res.render('view/formulario')
})
ViewsRouter.get('/productos', (req,res)=>{
    const products = ProductApi.getAll()
    res.render('view/table', {productos: products})
})


export {ViewsRouter}