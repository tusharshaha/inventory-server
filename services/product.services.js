const Product = require("../models/Product.model");

module.exports.getProductService = async () => {
    const products = await Product.find({})
    return products
}
module.exports.createProductService = async (body) => {
    const result = await Product.create(body);
    return result
}