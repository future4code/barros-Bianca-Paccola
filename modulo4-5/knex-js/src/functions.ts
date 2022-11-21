import connection from "./database/connection";

export const getActorById = async (id: string): Promise<void> => {
  const result = await connection.raw(`SELECT * FROM Actor WHERE id = ${id};`);

  return result[0];
};

export const getActorByName = async (name: string): Promise<void> => {
  const result = await connection.raw(
    `SELECT * FROM Actor WHERE name = "${name}";`
  );

  return result[0];
};

export const getAllActors = async (): Promise<void> => {
  const result = await connection.raw(`SELECT * FROM Actor;`);
  return result[0];
};

export const getCountGender = async (gender: string): Promise<string> => {
  const result = await connection.raw(
    `SELECT COUNT(*) as count FROM Actor WHERE gender = "${gender}";`
  );

  return result[0][0].count + '';
};

export const changeSalaryActor = async (
  actorId: string,
  newSalary: number
): Promise<any> => {
  await connection("Actor")
    .where({ id: actorId })
    .update({ salary: newSalary });
};

export const deleteActor = async (id: string): Promise<any> => {
  //Desativando a checagem de chave estrangeira
  await connection.raw(`SET foreign_key_checks = 0`);
  // Deletando registro
  await connection("Actor").where({ id: id }).del();
};

export const avgSalaryByGender = async (actorGender: string): Promise<any> => {
  const result = await connection("Actor")
  .avg("salary as average")
  .where({ gender: actorGender })
  return result[0];
};

export const insertActor = async (
  id: string,
  name: string,
  salary: number,
  birth_date: string,
  gender: string
): Promise<any> => {
  await connection.raw(`
      INSERT INTO Actor
      VALUES (
        "${id}",
        "${name}",
        ${salary},
        "${birth_date}",
        "${gender}"
      )
    `);
};
