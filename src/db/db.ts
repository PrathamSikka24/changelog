import { Client } from 'pg'; 

const client = new Client({
    connectionString: 'postgresql://user:gH9-PPBPHGr5gsaAetMvQQ@changelog-6069.6xw.aws-ap-southeast-1.cockroachlabs.cloud:26257/changelogdb?sslmode=verify-full',
});

client.connect();

export async function getChangelogs() {
    const res = await client.query('SELECT * FROM changelogs ORDER BY id');
    return res.rows;
}

export async function getChangelogById(id: any) {
    const res = await client.query('SELECT * FROM changelogs WHERE id = $1', [id]);
    return res.rows[0];
}
