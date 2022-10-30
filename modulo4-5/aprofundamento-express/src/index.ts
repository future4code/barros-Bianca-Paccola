import express, {Response, Request} from 'express';
import cors from 'cors';
import {Todo} from './types'
import { toDos } from './data';

const app = express();
app.use(express.json());
app.use(cors());

//Read file sync Node - Lógica para ler um arquivo e converter de json para objeto js
const fs = require('fs');

//Test
app.get("/ping", (req: Request, res: Response) => {
    res.status(200).send("Pong! 🏓")
});

//Get To do List with status true or false
app.get("/todos", (req: Request, res: Response) => {
    const toDoStatus = req.body.completed
    const toDoListStatus = toDos.filter((item)=> item.completed === toDoStatus);
    res.status(200).send(toDoListStatus);
});

//Get list by userId
app.get("/todos/:userId", (req: Request, res: Response) => {
    const id = Number(req.params.userId);
    const userList = toDos.filter((item) => item.userId === id);
    const otherList = toDos.filter((item) => item.userId !== id);
    const list = toDos.map(()=> {
        return {
            todos: {
                selectedUser: [
                    ...userList
                ],
                others: [
                    ...otherList
                ]
            }
        }
    })
    res.status(200).send(list);
});

//Add to do list
// Request => headers: authorization = number, body = "titles": ["Levar o dog passear", "Fazer almoço", "Pagar contas"]
app.put("/todo/add", (req: Request, res: Response) => {
    const userId = Number(req.headers.authorization)
    const body = req.body.titles
    const id = toDos[toDos.length -1].id
    body.forEach((item: string, index: number) => {
        return toDos.push({
            userId: userId, 
            id: id+index+1, 
            title: item, 
            completed: false
        })
    })
    fs.writeFileSync("./src/todolist.ts", JSON.stringify(toDos)); //Write file sync Node - Lógica para gravar contéudo no arquivo em formato Json
    const list: Todo[] = JSON.parse(fs.readFileSync('./src/todolist.ts', 'utf-8'));
    res.status(200).send(list);
});

//Change the status
app.put("/todo/:id",  (req: Request, res: Response) => {
    const itemId = Number(req.params.id)
    const itemStatus = req.body.completed
    const itemIndex = toDos.findIndex((item) => item.id === itemId);
    toDos[itemIndex].completed = itemStatus;

    res.status(200).send(toDos[itemIndex]);
});

//Delete item
app.delete("/todo/:id",  (req: Request, res: Response) => {
    const itemId = Number(req.params.id)
    const userIdParam = Number(req.headers.authorization)
    const itemIndex = toDos.findIndex((item) => item.id === itemId && item.userId === userIdParam);
    if(itemIndex > 0) {
        toDos.splice(itemIndex,1)
        res.status(200).send("Post excluído da base da dados.");
    } else {
        res.status(400).send("Post não encontrado.");
    }
});

//Build an to do list
// Request => headers: authorization = number, body = "titles": ["Levar o dog passear", "Fazer almoço", "Pagar contas"]
app.post("/todo/post", (req: Request, res: Response) => {
    const userId = Number(req.headers.authorization)
    const body = req.body.titles
    const toDoList = body.map((item: string, index: number) => {
        return {userId: userId, id: index, title: item, completed: false}
    })
    fs.writeFileSync("./src/todolist.ts", JSON.stringify(toDoList));
    res.status(200).send(toDoList);
});


app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
})