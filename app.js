const express = require("express");
const {rateLimit} = require("express-rate-limit");
const {format} = require('timeago.js')

// Because this is a small application 
// i am not going to implement the MVC pattern of writing nodejs

const app = express();

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Headers", "Content-Type")
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("Access-Control-Allow-Methods", "GET")
    next()
})

// The API call controller
const callLimiter = rateLimit({
    windowMs: 1000,
    max: 3,
    message: "Try again after one second"
});

app.get("/", (req, res) => {
    res.send("Hello consumer, welcome to this API")
})

// The route for returning persons age
app.get("/howold/:timestamp", callLimiter, (req, res, next) => {
    try {
        const dob = req.params.timestamp;
        // check if parameter is in a valid date format
        if(isNaN(Date.parse(dob))) {
            let error = new Error("Invalid date parameter");
            error.statusCode = 401;
            throw error
        }
        const time = format(dob)
        console.log(time)
        res.send(time)
    } catch (err) {
        next(err)
    }
})

// Error middleware
app.use((error, req, res, next) => {
    res.status(error.statusCode || 500).json(error.message)
})

// Create port
const PORT = process.env.PORT || 8080;

app.listen(PORT, (err) => console.log(`connected to port ${PORT}`));
