import {Router} from 'express'
import { ProductApi } from '../Api/ProductApi.js'
const productRouter = Router()
// aca pongo los router.get en este caso "productRouter"
//mis rutas en el buscador empiezan asi: 'api/productos'

productRouter.get('/', (req, res)=>{
    const product = ProductApi.getAll()
    res.send({product})
})

productRouter.get('/:id', (req, res)=>{
    const {id}= req.params
    const product= ProductApi.getById(Number(id))
    res.send({product})
})

productRouter.post('/', (req,res)=>{
    const {title,price,thumbnail} = req.body
    console.log({title,price,thumbnail})
    const product= ProductApi.save({title,price,thumbnail})
    res.send({id:product.id})
})

productRouter.put('/:id', (req,res)=>{
    const {id}= req.params
    const {title,price,thumbnail}=req.body
    const product= ProductApi.updateById(id,{title,price,thumbnail,})
    res.send({updated: product})
})

productRouter.delete('/:id', (req,res)=>{
    const {id}= req.params
    const product= ProductApi.delateById(id)
    res.json(product)
})


export {productRouter}