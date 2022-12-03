# EXERCÍCIOS COM KNEX

> Exercícios desenvolvidos para fixar os aprendizados da aula introdutória de como usar o Knex para requisições ao banco de dados sql. <br>
> Tecnocologias usadas: 
- Node.JS, 
- Typescript, 
- Express, 
- Knex, 
- MySql.

## -------- Exercício 01 --------

a) *Explique como é a resposta que temos quando usamos o `raw`.* 

**RESPOSTA:** Além do resultado da pesquisa, é retornado algumas informações e configuraçãoes do banco de dados.

b) *Faça uma função que busque um ator pelo nome;*

```
const getActorByName = async (name: string): Promise<any> => {
  const result = await connection.raw(
    `SELECT * FROM Actor WHERE name = "${name}";`
    )
    return resul[0];
}
```

c) *Faça uma função que receba um `gender` retorne a quantidade de itens na tabela Actor com esse `gender`. Para atrizes, `female` e para atores `male`.*

```
const getCountGender = async (gender: string): Promise<any> => {
  const result = await connection.raw(
    `SELECT COUNT(*) as count FROM Actor WHERE gender = "${gender}";`
  )
  
  return result[0][0];
}
```

## -------- Exercício 02 ---------

a) *Uma função que receba um salário e um id e realiza a atualização do salário do ator em questão*

```
const patchSalaryOfActor = async (actorId: string, newSalary: number): Promise<any> => {
  const result =  await connection('Actor').where({'id': actorId}).update({'salary': newSalary});
  return result;
}
```

b) *Uma função que receba um id e delete um ator da tabela*

```
const deleteActor = async (id: string): Promise<any> => {
  await connection('Actor').where({'id': id}).del();
}
```

c) *Uma função que receba um `gender` e devolva a média dos salários de atrizes ou atores desse `gender`*

```
const avgSalaryByGender = async (gender: string): Promise<any> => {
  const result = await connection('Actor').where({'gender': gender}).avg('salary as average');
  return result;
}
```

## -------- Exercício 03 ---------

*Crie um método GET que receba como path param o id do ator cujas informações queremos pegar*

```
app.get('/actor/:id', async (req: Request, res: Response) => {
  const actorId = req.params.id as string;
  const result = await getActorById(actorId);
  res.status(200).send(result);
})
```

## -------- Exercício 04 --------

Para finalizar o estudo, você vai criar mais um endpoint. Só que, antes, queremos dar mais um exemplo. Vamos fazer um endpoint para criar um novo ator. Para isso, devemos:

- Definir o método como `POST`
- Criar um path: `/actor`
- Receber os parâmetros pelo body

```
app.post('/actor', async(req: Request, res: Response) => {
  const {id, name, salary, birthDate, gender} = req.body
  await insertActor(id, name, salary, birthDate, gender)
  res.status(200).send("Ator inserido na base de dados!")
})
```

