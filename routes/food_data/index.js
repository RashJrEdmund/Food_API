
const express = require("express")
const router = express.Router();

const data = require("../../data/food/")

router.get("/", (req, res) => {
    console.log(req.query)
    res.status(200).send({ data })
})

module.exports = router
