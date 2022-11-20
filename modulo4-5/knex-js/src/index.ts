import express, {Request, Response} from 'express';
import cors from 'cors';
import knex from 'knex';
import dotenv from 'dotenv';

const app  = express();
app.use(express.json());
app.use(cors);
dotenv.config();

// estabelecer a conexão com o banco 
export const connection = knex({
	client: "mysql",
	connection: {
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
  }
});


app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
});