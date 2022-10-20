const express = require("express");
const { rateLimit } = require("express-rate-limit");
const { format } = require("timeago.js");

// Because this is a small application
// i am not going to implement the MVC pattern of writing nodejs

const app = express();

// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Headers", "Content-Type");
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader("Access-Control-Allow-Methods", "GET");
//   next();
// });

// The API call controller
const callLimiter = rateLimit({
  windowMs: 1000,
  max: 3,
  message: "Try again after one second",
});

app.get("/howold", callLimiter, (req, res, next) => {
  try {
    const dob = req.query.dob;
    if (dob === undefined) {
      return res.status(400).send("Please add a query parameter with a valid timestamp to it");
    }

    // Put them in proper format
    let formattedDOB1 = dob.split(" ")[0];
    let formattedDOB2 = dob.split(" ")[1];
    const final = `${formattedDOB1}+${formattedDOB2}`;

    // check if query is in a valid date format
    if (new Date(final).toString() === "Invalid Date") {
      let error = new Error("Invalid date parameter");
      error.statusCode = 429;
      throw error;
    }

    const time = format(final);
    res.status(200).send(time);
  } catch (err) {
    next(err);
  }
});

// Error middleware
app.use((error, req, res, next) => {
  res.status(error.statusCode || 500).json(error.message);
});

// Create port
const PORT = process.env.PORT || 8080;

app.listen(PORT, (err) => console.log(`connected to port ${PORT}`));
