const express = require("express")
const app = express()

app.get("/", (req, res) => {
    return res.json({
        success: "",
        service_name: "Auth",
        version: "0.1"
    })
})

app.listen(process.env.PORT || 3000, () => {
    console.log(`AUTH SERVICE started on PORT: ${process.env.PORT || 3000}`)
})