const express = require("express")
const v1 = express.Router()

v1.get("/", (req, res) => {
    return res.json({name: "Auth Service API", version: "1.0"})
})

module.exports = {v1}