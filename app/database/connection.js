require('dotenv').config(); // npm install dotenv
const { Pool } = require('pg');

const pool = new Pool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    max: 10,           // máximo de conexões simultâneas
    idleTimeoutMillis: 30000,
});