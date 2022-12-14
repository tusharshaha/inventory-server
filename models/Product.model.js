const mongoose = require("mongoose");

// schema design
const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please provide a name"],
        trim: true,
        unique: true,
        minLength: [3, "Name must be at least 3 character"],
        maxLength: [100, "Name too large"]
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
        min: [0, "Price can't be negative"]
    },
    unit: {
        type: String,
        required: true,
        enum: {
            values: ["kg", "litre", "pcs"],
            message: "Unit value can't be {VALUE}, must be kg/litre/pcs"
        }
    },
    quantity: {
        type: Number,
        required: true,
        min: [0, "Quantity can't be negative"]
    },
    status: {
        type: String,
        required: true,
        enum: {
            values: ["in-stock", "out-of-stock", "discontinued"],
            message: "Unit value can't be {VALUE}, must be in-stock/out-of-stock/discontinued"
        }
    },
    supplier: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Supplier"
    },
    categories: [{
        name: {
            type: String,
            required: true,
        },
        _id: mongoose.Schema.Types.ObjectId
    }]
}, {
    timestamps: true
})

// middlewares
productSchema.pre("save", function (next) {
    if (this.quantity <= 0) {
        this.status = "out-of-stock"
    }
    next()
})

// methods
productSchema.methods.logger = function () {
    console.log("successfully saved data")
}

// Create modal
const Product = mongoose.model("Product", productSchema)

module.exports = Product;