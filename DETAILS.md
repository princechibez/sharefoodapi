## Hello :wave:

# Sharefood assessment API

## Contents


- # [Implementation detail](#implementation-detail)
- # [Built with](#built-with)


### Implementation detail

- Made a route with a GET request method to */howold*, which requires a query paramter 
with a valid timestamp.

- The above route checks the value of the timestamp to make sure it's in a valid date format

- Returns an error message via an error middleware whenever an invalid date format is detected

- After the validation, it uses a third party library called *timeago.js* to calculate the length of the timestamp to the current time the route was visited and returns it to the request source with a status code of 200.

- This application also makes use of a library called *express-rate-limit* to regulate how the route is visited by making sure there are no more than 3 requests made per second and also returns a message whenever the calls exceeds the regulated amount

### Built with

- Node/Express
- Timeago.js
- express-rate-limiter