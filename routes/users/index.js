const express = require("express")
const router = express.Router();

const users = require("../../data/users")

router.get("/", (_, res) => {
    res.status(200).send({ message: "sent all users", users })
})

module.exports = router
