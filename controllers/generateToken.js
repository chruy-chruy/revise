
require('dotenv').config()
const jwt = require('jsonwebtoken')

function generateToken({ result }) {
    const jsonwebtoken = jwt.sign({ result }, process.env.SECRET_KEY, { expiresIn: '1h' })
    return jsonwebtoken
}

module.exports = generateToken