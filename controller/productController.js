const ProductSchema = require('../model/productSchema');

const create = async (req, res) => {
    try{
        const{productName, unitPrice, description, qtyOnHand} = req.body;
        if(!productName || !unitPrice || !description || !qtyOnHand){
            return res.status(400).json({'message': 'Please enter valid information'});
        }
        const product = new ProductSchema({
            productName:productName,
            unitPrice:unitPrice,
            description:description,
            image: {
                resourceUrl:'https://lasermobile.lk/wp-content/uploads/2024/12/1-9.jpg',
                hash:'fdsdfdsg',
                directory:'/products/images',
                fileName:'product name'
            },
            status: true,
            qtyOnHand:qtyOnHand
        });

        const saveData = await product.save();
        return res.status(201).json({'message':'Success', data : saveData});

    }catch (e) {
        return res.status(500).json({'message':'Try Again',error:e});
    }
}

const findByID = async (req, res) => {
    const {id} = req.params;
    const product = await ProductSchema.findById(id);
    if(!product){
        return res.status(404).json({'message':'Product not found'});
    }
    return res.status(200).json({'message':'Product Found', data : product});
}

const findAll = async (req, res) => {
    try{
        const products = await ProductSchema.find();
        return res.status(200).json({'message':'Success', data : products});

    }catch (e) {
        return res.status(500).json({'message':'Try Again',error:e});
    }
}

const updateProduct = async (req, res) => {
    const {id} = req.params;
    const {updateProduct} = req.body;
    const product = await ProductSchema.findByIdAndUpdate(id, updateProduct, {new: true});
    if(!product){
        return res.status(404).json({'message':'Product not found'});
    }
    return res.status(200).json({'message':'Product Updated',data : product});
}

const deleteProduct = async (req, res) => {
    const {id} = req.params;
    const deletedProduct = await ProductSchema.findByIdAndDelete(id);
    if(!deletedProduct){
        return res.status(404).json({'message':'Product not found'});
    }
    return res.status(200).json({'message':'Product Deleted',data : deletedProduct});
}

module.exports = {
    create,
    findByID,
    findAll,
    updateProduct,
    deleteProduct
}