import pgPromise from 'pg-promise';



const pgp = pgPromise({
  ssl:{
    rejectUnauthorized: false
  }
}); 
const connectionString = process.env.DATABASE_URL; 
const db = pgp(connectionString);


export async function datos() {
  return await db.query("select * from usuarios")
    .then((data) => data)
    .catch((error) => error);
}