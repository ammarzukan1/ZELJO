// db.js
const mysql = require('mysql2/promise');

async function connectToDatabase() {
    try {
        const connection = await mysql.createConnection({
            host: 'localhost', // MySQL server (can also be an IP address)
            user: 'root', // MySQL username
            password: '4444', // MySQL password
            database: 'Zeljeznicar' // MySQL database name
        });

        console.log('MySQL Connection established!');
        return connection;
    } catch (error) {
        console.error('Error connecting to MySQL:', error.message);
        throw error;
    }
}

const getDatabase = async () => {
    try {
        const connection = await mysql.createConnection({
            host: 'localhost',       // Host na kojem se baza nalazi
            user: 'root',            // MySQL korisničko ime
            password: 'your_password', // MySQL lozinka
            database: 'admin_db'     // Ime baze podataka
        });

        console.log('Database connection established');
        return connection;
    } catch (error) {
        console.error('Error connecting to the database:', error);
        throw error;
    }
};
module.exports = { connectToDatabase,getDatabase };
