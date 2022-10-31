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

//Delete post
app.delete("/posts/:id", (req: Request, res: Response) => {
    const userIdParam = Number(req.headers.authorization)
    const postIdParam = Number(req.params.id)
    const postIndex = posts.findIndex((post)=> post.id === postIdParam && post.userId === userIdParam)
    if(postIndex < 0) {
        res.status(400).send("Post não encontrado.")
    } else {
        posts.splice(postIndex, 1)
        res.status(200).send("Post excluído da base de dados.")
    }
});

//Delete user
app.delete("/user", (req: Request, res: Response) => {
    const userIdParam = Number(req.headers.authorization)
    const postIndex = users.findIndex((post)=> post.id === userIdParam)
    if(postIndex < 0) {
        res.status(400).send("Usuário não encontrado.")
    } else {
        users.splice(postIndex, 1)
        res.status(200).send("Usuário excluído da base de dados.")
    }
});

app.listen(3000, () => {
    console.log("Server is running in http://localhost:3000");
});