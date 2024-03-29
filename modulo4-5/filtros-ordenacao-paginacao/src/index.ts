import express from "express";
import cors from 'cors';
import { getAllUsers } from "./endpoints/getAllUsers";

const app = express();
app.use(express.json());
app.use(cors());

app.get("/users", getAllUsers);
app.get("/users/:type", getAllUsers);

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
});