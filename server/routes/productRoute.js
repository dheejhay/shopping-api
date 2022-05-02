const express = require('express');

//Getting our routes
const router = require('express').Router();

const controller = require('../controllers/productController')

router.get('/api/products', controller.index)

router.get('/api/products/:id', controller.read)

router.post('/api/products', controller.save)

router.put('/api/products/:id', controller.update)

router.delete('/api/products/:id', controller.delete)

module.exports = router;