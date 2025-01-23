import pgPromise from 'pg-promise';


const initOptions = {
  ssl:{
    rejectUnauthorized: true
  }
};

const pgp = pgPromise(initOptions); 
const connectionString = process.env.DATABASE_URL; 
const db = pgp(connectionString);


export async function datos() {
  return await db.query("select * from usuarios")
    .then((data) => data)
    .catch((error) => error);
}