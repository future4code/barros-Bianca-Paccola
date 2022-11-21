import express, {Request, Response} from 'express';
import cors from 'cors';
import { getActorById, getActorByName, getAllActors, getCountGender, changeSalaryActor, deleteActor, avgSalaryByGender, insertActor,  } from './functions';

const app = express();
app.use(express.json());
app.use(cors());


app.get('/actor', async (req: Request, res: Response) => {
  const id = req.query.id as string;
 const name = req.query.name as string;
 const gender = req.query.gender as string;
 let result;

 if(id) {
   result = await getActorById(id);
  } else if (name) {
    result = await getActorByName(name);
  } else if (gender) {
    result = await getCountGender(gender);
  } else {
    result = await getAllActors();
  }
  
  res.status(200).send(result);
});

app.get('/actor/:id', async (req: Request, res: Response) => {
  const actorId = req.params.id as string;
  const result = await getActorById(actorId);
  res.status(200).send(result);
})

app.get('/actor/average', async (req: Request, res: Response) => {
  const gender = req.query.gender as string;
  const result = await avgSalaryByGender(gender)
  res.status(200).send(result);
})

app.post('/actor', async(req: Request, res: Response) => {
  const {id, name, salary, birthDate, gender} = req.body
  await insertActor(id, name, salary, birthDate, gender)
  res.status(200).send("Ator inserido na base de dados!")
})

app.patch('/actor/salary', async (req: Request, res: Response) => {
  const {actorId, newSalary} = req.body;
  await changeSalaryActor(actorId, newSalary);
  res.status(201).send("Salário Alterado com sucesso!");
})

app.delete('/actor/:id', async (req: Request, res: Response)=> {
  const actorId = req.params.id as string;
  await deleteActor(actorId)
  res.status(200).send("Ator apagado da base de dados!");
})

app.listen(3000, () => {
  console.log("Server is running in http://localhost:3000");
});