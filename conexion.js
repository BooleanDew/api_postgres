import pgPromise from 'pg-promise';

const connectionString = process.env.DATABASE_URL; 


const pgp = pgPromise({}); 
const db = pgp(connectionString);


export async function datos() {
  return await db.query("select * from usuarios")
    .then((data) => data)
    .catch((error) => error);
}