const jwt = require('jsonwebtoken');  // Assuming you're using JWT for token generation
// Authorization middleware to check if the request has a valid token
const authMiddleware = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];  // Extract the token from the Authorization header

    if (!token) {
        return res.status(403).json({ error: 'No token provided' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.admin = decoded;  // Add the decoded token data to the request object
        next();  // Move to the next middleware or route handler
    } catch (err) {
        return res.status(401).json({ error: 'Invalid or expired token' });
    }
};

module.exports = authMiddleware;