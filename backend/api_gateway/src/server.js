const express = require("express")
const rateLimiter = require("./middleware/rateLimiter")
const httpProxy = require("express-http-proxy")

const app = express()
app.set('trust proxy', true)

// app.use((req, res, next) => {
//     console.log(req.headers)
//     next()
// })
// app.use(rateLimiter)

app.get("/", (req, res) => {
    console.log(req.ip)
    res.send("HI")
})

app.listen(process.env.PORT || 3000, () => {
    console.log(`API GATEWAY started on PORT: ${process.env.PORT || 3000}`)
})