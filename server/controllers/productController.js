require('../model/mongooseConnection')
const Product = require('../model/Product')

let products = [{
    id: 1,
    title: 'Floral skirt',
    price: 35,
    quantity: 10,
    description: 'Look beautiful this summer'
},
{
    id: 2,
    title: 'Polka dot dress',
    price: 35,
    quantity: 10,
    description: 'Look beautiful this summer'
},
{
    id: 3,
    title: 'Black and white striped shirt',
    price: 35,
    quantity: 10,
    description: 'Look beautiful this summer'
},
]

/**
 * function to return an auto increment id
 * 1. Check if id = 0/null
 * 2. Increase by one
 */
// var id = 3
// const uid = () => id +=1 

const serverResponse = (status = 200) => ({
    success: true,
    message: "",
    data: [],
    status: status
})

exports.index = async(req, res) => {
    let response = serverResponse()
    // displaying products
    const products = await Product.find({})
    response.data = products;
    return res.status(response.status).json(response)
}

exports.read =async(req, res) => {
    console.log("Hello")
    try {
        let response = serverResponse()
        const product = await Product.findById(req.params.id)
        response.data = product;
        return res.status(response.status).json(response)
    } catch (error) {
        console.log(error)
    }
    
}

exports.save = async(req, res) => {
    let response = serverResponse(201);
    // storing products
    const product = new Product(req.body)
    await product.save()
    // let body = req.body
    // let id = {id:uid()}
    // products.push({...id,...body})
    response.data = product
    console.log(product)
    return res.status(response.status).json(response)
}

exports.update = async(req, res) => {
    let response = serverResponse();
    let product = await Product.updateOne({_id: req.params.id}, 
            {title:req.body.title,
            price:req.body.price,
            description:req.body.description,
            qty:req.body.qty})
        response.data = product;    
    return res.status(response.status).json(response)
}

exports.delete = async(req, res) => {
    let response = serverResponse();
    const product = await Product.deleteOne({_id: req.params.id});
    response.data = product
    return res.status(response.status).json(response)
}