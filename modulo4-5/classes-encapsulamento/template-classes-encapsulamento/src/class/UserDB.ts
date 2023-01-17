import { Knex } from "knex";
import { TABLE_USERS } from "../database/tableNames";
import { User } from "./User";

export class UserDB {
    constructor(private connection: Knex) {
        this.connection = connection;
    }

    public insertProduct = async (newUser: User) => {
        const result = await this.connection(TABLE_USERS).insert(newUser);
        return result;
    }

    public getUsers = async () => {
        const result = await this.connection(TABLE_USERS).select();
        return result;
    }
}