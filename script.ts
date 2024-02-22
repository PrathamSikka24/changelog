import dotenv from 'dotenv';
import fs from 'fs/promises';
import pg from 'pg';
import yaml from 'js-yaml';

dotenv.config({ path: './.env' }); // Adjust the path to your .env file as needed
interface Post {
  author: string;
  date: string;
  title: string;
  description: string;
}
const { Client } = pg;
const databaseUrl = process.env.DATABASE_URL;

const client = new Client({
  connectionString: databaseUrl,
  ssl: {
    rejectUnauthorized: false,
  },
});

async function insertPosts() {
    await client.connect();

    const readmeContent = await fs.readFile('README.md', 'utf8');
    const readmes = yaml.load(readmeContent) as Post[]; // Asserting the type of `readmes`

    for (const post of readmes) {
        try {
            const query = 'INSERT INTO posts (author, date, title, description) VALUES ($1, $2, $3, $4)';
            const values = [post.author, post.date, post.title, post.description];
            await client.query(query, values);
            console.log('Inserted:', post);
        } catch (error) {
            console.error('Error:', error);
            break;
        }
    }

    await client.end();
}

insertPosts().catch(console.error);
