import pkg from 'pg';
const { Pool } = pkg;
import { config } from 'dotenv';
config()

let pool = new Pool({
	port: process.env.DB_PORT,
	host: process.env.DB_HOST,
	user: process.env.DB_USERNAME,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_DATABASE,
})
console.log(pool);


export { pool }
