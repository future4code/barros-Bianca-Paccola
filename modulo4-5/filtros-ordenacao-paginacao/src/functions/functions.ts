import connection from "../database/connection"

export default async function selectAllUsers(name: string, type: string, sort: string, order: string, offset: number):Promise<any> {
    const result = await connection.raw(`
       SELECT id, name, email, type
       FROM aula48_exercicio
       WHERE name like "%${name}%"
       AND type like "%${type}%"
       ORDER BY ${sort} ${order}
       LIMIT 5
       OFFSET ${offset};
    `)
 
    return result[0]
 }