const express = require('express');
const { Pool } = require('pg');
const Redis = require('ioredis');

const app = express();
const pool = new Pool ({ connectionString: process.env.DATABASE_URL })
const redis = new Redis ({ host: process.env.REDIS_HOST || 'redis', port: 6379});

app.get('/', async (req, res) => {
    const cached = await redis.get('last_visit');

    if (cached) {
        return res.json({
            message: 'Hello from Docker!',
            last_visit: cached,
            served_from: 'Redis cache'
        });
    }

    const result = await pool.query('SELECT NOW() as time');
    const time = result.rows[0].time;

    await redis.set('last_visit', time, 'EX', 30);

    res.json({ 
        message: 'Hello from Docker!', 
        last_visit: time,
        served_from: 'Postgres database'
    });
});

app.listen(3000, () => console.log('App running on port 3000'));
