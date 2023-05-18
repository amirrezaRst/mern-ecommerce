const jwt = require('jsonwebtoken');


module.exports = (req, res, next) => {
    const token = req.header("x-auth-token")
    if (!token) return res.status(401).send("You do not have permission to access the information")

    try {
        const user = jwt.verify(token, process.env.JWT_SECRET)
        req.user = user
        // res.send(user)
        next()
    } catch (ex) {
        return res.status(401).json({ text: "You do not have permission to access the information" })
    }
}