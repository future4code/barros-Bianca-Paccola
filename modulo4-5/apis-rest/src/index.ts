import express, {Request, Response} from 'express';
import cors from 'cors';
import { users } from './data';
import { User, USER_TYPE } from './types';
import { send } from 'process';
import { error } from 'console';

const app = express();
app.use(express.json());
app.use(cors());

// return all users from list or user by name
app.get('/users', (req: Request, res: Response) => {
    const nameSearch = req.query.name as string;
    if (nameSearch) {
        const usersSearch = users.filter(user => user.name.includes(nameSearch));
        if (usersSearch.length === 0) {
            res.status(404).send("Nome não encontrado na base de dados.")
        } else {
            res.status(200).send(usersSearch)
        }
    } else {
        res.status(200).send(users)
    }
})

// return user by type
app.get('/users/:type', (req: Request, res: Response) => {
    const typeUser = req.params.type.toUpperCase();
    let errorCode = 400;
    try {
        if (typeUser !== USER_TYPE.ADMIN && typeUser !== USER_TYPE.NORMAL) {
            errorCode = 422
            throw new Error("Tipo do usuário deve ser admin ou normal.")
        }
    } catch (err: any) {
    res.status(errorCode).send(err.message)
    }

    res.status(200).send(users.filter(user => user.type === typeUser))
});

// create a new user and add to the list of users
app.post('/users/create', (req: Request, res: Response) => {
    const {name, email, type, age} = req.body;
    let errorCode = 400;
    try {
        if (!name || !email || !type || !age) {
            errorCode = 422;
            throw new Error ("Dados incompletos. Precisa informar name, email, type e age.")
        }

        users.push({
            id: Date.now(),
            name, 
            email,
            type: type.toUpperCase(),
            age
        })
        res.status(201).send(users);

    } catch (err: any) {
        res.status(errorCode).send(err.message);
    }

});

// change the name of an user
app.patch('/users/:id', (req: Request, res: Response) => {
    const userId = Number(req.params.id);
    const newName = req.body.name;
    let errorCode = 400;
    
    try {
        if (!userId) {
            errorCode = 422;
            throw new Error("Precisa informar o id do usuário que quer modificar.");
        }
        if (!users.find(user => user.id === userId)) {
            errorCode = 404;
            throw new Error("Usuário Não encontrado na base de dados.");
        }
        if (!newName) {
            errorCode = 422;
            throw new Error("Informe o nome a ser modificado.");
        }
    
        for (let user of users) {
            if(user.id === userId) {
                user.name = newName;
                break;
             }   
        }
        res.status(201).send(users.find(user => user.id === userId));
    } catch (err: any) {
        res.status(errorCode).send(err.message);
    }
})

// delete an user
app.delete('/users/:id', (req: Request, res: Response) => {
    const userId = Number(req.params.id);
    const userIndex = users.findIndex(user => user.id === userId);
    let errorCode = 400;

    try {
        if (!userId) {
            errorCode = 422;
            throw new Error("Precisa informar o id do usuário a ser deletado."); 
        }
        if(userIndex < 0) {
            errorCode = 404;
            throw new Error("Usuário não encontrado na base de dados.");
        }
    
        users.splice(userIndex, 1)
        res.status(200).send(users);
    } catch (err: any) {
        res.status(errorCode).send(err.message);
    }

})

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
})