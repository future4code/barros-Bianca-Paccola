import express, {Request, Response} from "express"
import cors from 'cors'
import { posts, users } from "./data"

const app = express()
app.use(express.json())
app.use(cors())

//Url base
app.get("/", (req: Request, res: Response) => {
    res.status(201).send("Hello from Express!")
});

//Get users
app.get("/users", (req: Request, res: Response) => {
    res.status(200).send(users)
});

//Get posts
app.get("/posts", (req: Request, res: Response) => {
    res.status(200).send(posts)
});

//Get post of user
app.get("/posts/:userId", (req: Request, res: Response) => {
    const userIdParam = Number(req.params.userId);
    const filteredPosts = posts.filter((post)=> post.userId === userIdParam)
    res.status(200).send(filteredPosts)
});

app.listen(3000, () => {
    console.log("Server is running in http://localhost:3000");
});