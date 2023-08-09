const PORT = 4000;

const express = require("express");
const indexRouter = require("./routes/index");

// configurations
const app = express();
require("dotenv").config();

app.get("/food_app", (req, res) => {
    res.status(200).sendFile(__dirname + "/public/index.html")
})

app.use("/", indexRouter);

app.listen(PORT, () => console.log(`listenning on port ${PORT}`));
