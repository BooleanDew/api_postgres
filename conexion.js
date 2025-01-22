import pgp from 'pg-promise';

const connectionString = process.env.DATABASE_URL;

const db = pgp({
  ssl: {
    rejectUnauthorized: false 
  }
})(connectionString);

export async function datos() {
  return await db.query("select * from usuarios")
    .then((data) => data)
    .catch((error) => error);
}