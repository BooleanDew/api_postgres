import pgPromise from 'pg-promise';
import { config } from 'dotenv'
config()
const pgp = pgPromise({});
const connectionString = (process.env.DEVELOPER) ? process.env.DATABASE_URL_DEV:process.env.DATABASE_URL
const db = pgp(connectionString);


export async function datos() {
  return await db.query("select * from chats")
    .then((data) => data)
    .catch((error) => error);
}