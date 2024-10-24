const cors = require('cors');
const http = require("http");
const express = require('express');
const bodyParser = require('body-parser');
const { connectToDatabase } = require('./database');
const path = require('path');

// Create an instance of Express app
const app = express();
const adminRouter = require('./route/admin');
const blogRouter = require('./route/admin');


// CORS configuration
app.use(cors({
    origin: '*',
    allowedHeaders: ['Authorization', 'Origin', 'X-Requested-With', 'Accept', 'Content-Type'],
    credentials: true,
    methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT'],
}));

app.use(bodyParser.json());

// Routes
app.use('/admin', adminRouter);
app.use('/blog', blogRouter);

// Serve static files from the React app build folder
app.use(express.static(path.join(__dirname, '..', 'build')));

// Serve the React frontend for any unknown routes
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'build', 'index.html'));
});

const port = process.env.PORT || 3000;

// Create HTTP Server
const server = http.createServer(app);

// Start server function
async function startServer() {
    try {
        await connectToDatabase();
        console.log('Connected to MySQL successfully.');

        server.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });

        server.setTimeout(2000);
    } catch (error) {
        console.error('Error connecting to MySQL:', error.message);
    }
}

startServer()
    .then(() => {
        console.log(`Server startup complete. http://localhost:${port}`);
    })
    .catch((error) => {
        console.error('Failed to start server:', error);
    });
