import { test, expect } from '@playwright/test';
import mysql from 'mysql2/promise';

test('Validate India exists in Sakila country table', async () => {

    // Connect to local MySQL
    const connection = await mysql.createConnection({
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: 'root',
        database: 'sakila'
    });

    try {
        // Query the database
        const [rows] = await connection.execute(
            `SELECT country
             FROM country
             WHERE country = ?`,
            ['India']
        );

        // Validate that India exists
        expect(rows.length).toBeGreaterThan(0);

        // Optional: validate the actual country value
        const result = rows as { country: string }[];
        
        expect(result[0].country).toBe('India');

        console.log('Country found:', result[0].country);

    } finally {
        // Always close DB connection
        await connection.end();
    }
});