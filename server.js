const { food_data_route, users_route, auth_route } = require("./routes");

//configurations
const express = require("express");
const app = express();
const cors = require("cors");
const { PORT } = require("./services/constants");

// major middle wares
app.use(express.json()) // used like bodyparser.json() from "body-parser". it ensures the req.body data is not lost
app.use(express.urlencoded());
app.use(cors({
    origin: "*"
}))

app.use(express.static(__dirname + "/views/"))

// application routes
app.get("/", (_, res) => {
    res.status(200).sendFile("index.html")
})

app.use("/api/auth", auth_route);
app.use("/api/food_data", food_data_route);
app.use("/api/users", users_route);

app.listen(PORT, () => console.log(`listenning on port ${PORT}`));
