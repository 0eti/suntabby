/*
AUTH SERVICE
*/

const express = require("express")
const app = express()

app.get("/", (req, res) => {
    return res.json({
        name: "Auth Service",
        version: "1.0",
    })
})

const {v1} = require("./api-routers/v1")

app.use("/v1", v1)

app.listen(process.env.PORT || 3000, () => {
    console.log(`AUTH SERVICE started on PORT: ${process.env.PORT || 3000}`)
})