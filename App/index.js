const express = require('express');
const { Pool } = require('pg');

const app = express();
const pool = new Pool ({ connectionString: process.env.DATABASE_URL })

app.get('/', async (req, res) => {
    const result = await pool.query('SELECT NOW() as time');
    res.json({ message: 'Hello from Docker!', db_time: result.rows[0].time });

});

app.listen(3000, () => console.log('App running on port 3000'));
