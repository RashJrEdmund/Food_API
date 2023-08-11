const PORT = 5000;

const express = require("express");
const { food_data_route, users_route, auth_route } = require("./routes")

//configurations
const app = express();
require("dotenv").config();


app.get("/", (_, res) => {
    res.status(200).sendFile(__dirname + "/public/index.html")
})

app.use("/auth", auth_route);
app.use("/food_data", food_data_route);
app.use("/users", users_route);

app.listen(PORT, () => console.log(`listenning on port ${PORT}`));
