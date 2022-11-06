import express, {Request, Response} from 'express';
import cors from 'cors';
import { users } from './data';
import { User } from './types';

const app = express();
app.use(express.json());
app.use(cors());

// return all users from list or user by name
app.get('/users', (req: Request, res: Response) => {
    const nameSearch = req.query.name
    if (nameSearch) {
        res.status(200).send(users.filter(user => user.name === nameSearch))
    } else {
        res.status(200).send(users)
    }
})

// return user by type
app.get('/users/:type', (req: Request, res: Response) => {
    const typeUser = req.params.type.toUpperCase();
    res.status(200).send(users.filter(user => user.type === typeUser))
});

// create a new user and add to the list of users
app.post('/users/create', (req: Request, res: Response) => {
    const {id, name, email, type, age} = req.body;
    users.push({
        id,
        name, 
        email,
        type: type.toUpperCase(),
        age
    })
    res.status(201).send(users);
});

//change the name of an user
app.put('/users/:id', (req: Request, res: Response) => {
    const userId = Number(req.params.id);
    const newName = req.body.name;

    for (let user of users) {
        if(user.id === userId) {
            user.name = newName;
            break;
         }   
    }

    res.status(201).send(users.find(user => user.id === userId));
});

// change the name of an user
app.patch('/users/:id', (req: Request, res: Response) => {
    const userId = Number(req.params.id);
    const newName = req.body.name;

    for (let user of users) {
        if(user.id === userId) {
            user.name = newName;
            break;
         }   
    }

    res.status(201).send(users.find(user => user.id === userId));
})

// delete an user
app.delete('/users/:id', (req: Request, res: Response) => {
    const userId = Number(req.params.id);
    const userIndex = users.findIndex(user => user.id === userId);

    users.splice(userIndex, 1)
    res.status(200).send(users);

})

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
})