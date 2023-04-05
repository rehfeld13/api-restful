const router = require('express').Router()
const ProductsController = require('../controllers/products')

//VERBOS HTTP(4 TIPOS)
//GET - OBTER DADOS
//POST - ENVIAR OU RECEBER DADOS
//PUT - ATUALIZAR DADOS
//DELETE - REMOVER DADOS


router.get('/products/:id?', ProductsController.get)
//router.post('/products', ProductsController.post)
//router.put('/products/:id', ProductsController.put)
//router.delete('/products/:id', ProductsController.delete)

module.exports = router