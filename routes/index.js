
const express = require("express")
const route = express.Router();

const data = require("../data/index.json")

route.get("/", (req, res) => {
    console.log(req.query)
    res.send({ data })
})

module.exports = route
