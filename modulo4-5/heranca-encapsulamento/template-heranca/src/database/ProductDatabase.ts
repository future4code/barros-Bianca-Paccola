import { BaseDatabase } from "./BaseDatabase";
import {TABLE_PRODUCTS} from "./tableNames"

export class ProductDatabase extends BaseDatabase {

    public static async getProducts () {
        const result = await BaseDatabase.connection(TABLE_PRODUCTS).select();
        return result;
    }

    public static async getProductById (id: string) {
        const result = await BaseDatabase.connection(TABLE_PRODUCTS).where('id', id).select();
        return result;
    }
    
    public static async createProduct(id: string, name: string, price: number) {
        await BaseDatabase.connection(TABLE_PRODUCTS).insert({id, name, price})
    }
}