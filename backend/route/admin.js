const Admin = require('../model/admin');
const express = require("express");
const router = express.Router();
const { getDatabase } = require('../database');  // Import the MySQL database connection
const jwt = require('jsonwebtoken');  // Assuming you're using JWT for token generation
const bcrypt = require('bcrypt');     // Assuming bcrypt for password hashing

// Login route
router.post('/admin/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        // Establish connection to MySQL database
        const db = await getDatabase();

        // Query to find admin via email
        const [rows] = await db.execute('SELECT * FROM admin WHERE email = ?', [email]);

        const admin = rows[0];  // Get the first admin from the query result

        if (!admin) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        // Validate password using bcrypt
        const isPasswordValid = await bcrypt.compare(password, admin.password);
        if (!isPasswordValid) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        // Generate JWT (assuming you have a secret key in your environment variables)
        const token = jwt.sign({ email: admin.email, id: admin.id, role: admin.role }, process.env.JWT_SECRET, {
            expiresIn: '1h'  // Token expires in 1 hour
        });

        res.status(200).json({ token });

        // Close the database connection after operation
        db.end();
    } catch (error) {
        console.error('Error logging in:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;
