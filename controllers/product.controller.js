const productService = require("../services/product.services")

module.exports.getProduct = async (req, res, next) => {
    try {
        const products = await productService.getProductService();
        res.status(200).json({
            success: true,
            message: "Product get successfully",
            data: products
        })
    } catch (err) {
        next(err)
    }
}

module.exports.createProduct = async (req, res, next) => {
    try {
        const result = await productService.createProductService(req.body);
        res.status(200).json({
            success: true,
            message: "product saved successfully",
        })
        result.logger();
    } catch (err) {
        next(err)
    }
}