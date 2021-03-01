const rateLimit = require("express-rate-limit")

// 100 Requests Every 15 Minutes
const rateLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
    message: "Rate Limit Exceeded",
    headers: true
})

module.exports = rateLimiter