//verify token
const jwt = require("jsonwebtoken");
function verifyToken(req, res, next) {
    // Get auth header value
    const bearerHeader = req.headers["authorization"];
    // Check if bearer is undefined

    if (typeof bearerHeader !== "undefined") {
        // Split at the space
        console.log(typeof bearerHeader !== "undefined")
        const bearer = bearerHeader.split(" ");
        // Get token from array
        const bearerToken = bearer[1];
        // Set the token
        req.token = bearerToken;
        // Next middleware
        next();
    } else {
        // Forbidden
        res.sendStatus(403);
    }
}

module.exports = verifyToken