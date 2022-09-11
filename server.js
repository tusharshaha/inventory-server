const mongoose = require("mongoose");
const app = require("./app");
const PORT = process.env.PORT || 8080;
require("dotenv").config();
require("colors");

// connect to mongoose
mongoose.connect(process.env.DATABASE_LOCAL)
    .then(() => {
        console.log("database connected successfully".bgGreen);
    })

// connect to port
app.listen(PORT, () => {
    console.log(`listening from port ${PORT}`.bgYellow)
})