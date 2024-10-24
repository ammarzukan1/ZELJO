const jwt = require('jsonwebtoken');
require('dotenv').config();

const SECRET_KEY = process.env.SECRET_KEY;

function generateToken(user) {
    if (!SECRET_KEY) {
        throw new Error('SECRET_KEY is not defined in environment variables');
    }
    if (!user.email || !user.id) {
        throw new Error('User object is missing required properties');
    }
    const payload = {
        email: user.email,
        id: user.id,
        role: user.role,
    };
    return jwt.sign(payload, SECRET_KEY, { expiresIn: '5h' });
}

const verifyToken = (token) => {
    return new Promise((resolve, reject) => {
        jwt.verify(token, SECRET_KEY, (err, payload) => {
            if (err) {
                console.error('Token verification error:', err);
                reject(err);
            } else {
                const user = { id: payload.id, email: payload.email, role: payload.role };
                resolve(user);
            }
        });
    });
};

// Middleware for JWT protection
const authenticateToken = async (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader?.split(' ')[1];

    if (!token) {
        return res.status(401).json({ error: 'No token provided' });
    }

    try {
        const user = await verifyToken(token); // Verify token
        req.user = user; // Attach the user to the request

        // Continue to the next middleware or route handler
        next();

    } catch (err) {
        if (err.name === 'TokenExpiredError') {
            return res.status(401).json({ error: 'Token expired' });
        } else if (err.name === 'JsonWebTokenError') {
            return res.status(401).json({ error: 'Invalid token' });
        } else {
            console.error('Token verification error:', err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
    }
};

module.exports = {
    authenticateToken,
    generateToken
};
