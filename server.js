const mongoose = require("mongoose");
const color = require("colors");
const app = require("./app");
require("dotenv").config();
const PORT = process.env.PORT || 8080;

// connect to mongoose
mongoose.connect(process.env.DATABASE_LOCAL)
    .then(() => {
        console.log("database connected successfully".bgGreen);
    })

// connect to port
app.listen(PORT, () => {
    console.log(`listening from port ${PORT}`.bgYellow)
})