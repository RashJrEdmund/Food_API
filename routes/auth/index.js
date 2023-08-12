const express = require("express")
const router = express.Router();

router.get("/", (_, __) => __.send(`
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="shortcut icon" href="./favicon.png" type="image/x-icon">
            <title>Food recipe API</title>
        </head>
        <body style="font-family: sans-serif;">
            <h1 style="font-weight: 700;">Food API</h1>
            <p>by: <span style="font-weight: 600;">Rash</span></p>
        </body>
    </html>
`))

router.post('/register', (req, res) => {
    res.send("registering users... done!")
})

router.post('/login', (req, res) => {
    try {
        console.clear()
        console.log("body:", req.headers)

        // if (!req.body.email || !req.body.password) return res.status(400).send({ message: "Missing user info" })

        res.send("login in")
    } catch (err) {
        console.log("an error occured", err)
        res.status(500).send("and error occured")
    }
})

module.exports = router
