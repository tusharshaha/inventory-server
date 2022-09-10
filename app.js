const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());
app.use(cors());

// schema design
const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please provide a name"],
        trim: true,
        unique: true,
        minLength: [3, "Name must be at least 3 character"]
    }
})

// check server
app.get("/", (req, res) => {
    res.send("Server working");
})

module.exports = app;