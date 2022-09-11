const express = require("express");
const cors = require("cors");
const productRoute = require('./routes/v1/product.route');
const globalErrorHandler = require("./middleware/globalErrorHandler");

const app = express();

app.use(express.json());
app.use(cors());

// global error handler
app.use(globalErrorHandler);

// product route
app.use("/api/v1/products", productRoute);

// check server
app.get("/", (req, res) => {
    res.send("Server working");
})

module.exports = app;