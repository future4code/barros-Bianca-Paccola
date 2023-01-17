import { BaseDatabase } from "./BaseDatabase";
import { TABLE_PRODUCTS, TABLE_PURCHASES, TABLE_USERS } from "./tableNames";

export class PurchasesDataBase extends BaseDatabase {

    public static async getPurchasesByUser(id: string) {
        const result = await BaseDatabase.connection.raw(`
            SELECT
            ${TABLE_USERS}.email,
            ${TABLE_PRODUCTS}.name AS product_name,
            ${TABLE_PRODUCTS}.price AS product_price,
            ${TABLE_PURCHASES}.quantity AS product_quantity,
            ${TABLE_PURCHASES}.total_price
            FROM ${TABLE_PURCHASES}
            JOIN ${TABLE_USERS}
            ON ${TABLE_PURCHASES}.user_id = ${TABLE_USERS}.id
            JOIN ${TABLE_PRODUCTS}
            ON ${TABLE_PURCHASES}.product_id = ${TABLE_PRODUCTS}.id
            WHERE ${TABLE_PURCHASES}.user_id = ${id};
        `)
        
        return result;
    }

    public static async createPurchase (id:string, userId:string, productId:string, quantity:number, totalPrice:number) {
        await BaseDatabase.connection(TABLE_PURCHASES).insert({
            id, 
            user_id: userId, 
            product_id: productId, 
            quantity, 
            total_price: totalPrice})
    }
}