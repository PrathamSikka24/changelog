import { Client } from 'pg';

const client = new Client({
    user: 'root', 
    host: 'localhost',
    database: 'changelog', 
    password: 'your_password', 
    port: 26257,
  });
  

client.connect().then(() => console.log("Connected to CockroachDB")).catch(e => console.error("Connection error", e));

    export async function getChangelogs() {
    const res = await client.query('SELECT * FROM changelog ORDER BY id');
    return res.rows;
}

    export async function getChangelogById(id: any) {
    const res = await client.query('SELECT * FROM changelog WHERE id = $1', [id]);
    return res.rows[0];
}
export async function insertChangelog(author: string, date: string, heading: string, description: string) {
    const query = 'INSERT INTO changelog (author, date, heading, description) VALUES ($1, $2, $3, $4) RETURNING *';
    const values = [author, date, heading, description];
    try {
        const res = await client.query(query, values);
        console.log('Insert successful:', res.rows[0]);
        return res.rows[0];
    } catch (err) {
        if (err instanceof Error) {
            console.error('Insert error:', err.message);
        } else {
            console.error('An unexpected error occurred');
        }
    }
}

