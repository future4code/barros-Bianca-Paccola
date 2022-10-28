import express, {Request, Response} from "express"
import cors from 'cors'

const app = express()
app.use(express.json())
app.use(cors())

app.get("/", (req: Request, res: Response) => {
    res.status(201).send("Hello from Express!")
})

app.listen(3000, () => {
    console.log("Server is running in http://localhost:3003");
});