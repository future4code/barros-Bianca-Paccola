import { Knex } from "knex";
import { TABLE_PRODUCTS, TABLE_PURCHASES, TABLE_USERS } from "../database/tableNames";
import { Purchase } from "./Purchase";

export class PurchaseDB {
    constructor(private connection: Knex) {
        this.connection = connection;
    }

    public insertPurchase = async (newPurchase: Purchase) => {
        const result = await this.connection(TABLE_PURCHASES).insert(newPurchase);
        return result;
    }

    public getPurchases = async (id:string) => {
        const result = await this.connection.raw(`
            SELECT
            ${TABLE_USERS}.email,
            ${TABLE_PRODUCTS}.name AS productName,
            ${TABLE_PRODUCTS}.price AS productPrice,
            ${TABLE_PURCHASES}.quantity,
            ${TABLE_PURCHASES}.total_price AS totalPrice
            FROM ${TABLE_PURCHASES}
            JOIN ${TABLE_USERS}
            ON ${TABLE_PURCHASES}.user_id = ${TABLE_USERS}.id
            JOIN ${TABLE_PRODUCTS}
            ON ${TABLE_PURCHASES}.product_id = ${TABLE_PRODUCTS}.id
            WHERE ${TABLE_PURCHASES}.user_id = ${id};
        `)

        return result[0];
    }
}