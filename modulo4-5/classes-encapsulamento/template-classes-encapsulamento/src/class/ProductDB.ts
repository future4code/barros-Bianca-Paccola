import { Knex } from "knex";
import { TABLE_PRODUCTS } from "../database/tableNames";
import { Product } from "./Product";

export class ProductDB {
    constructor(private connection: Knex) {
        this.connection = connection;
    }

    public insertProduct = async (newProduct: Product) => {
        const result = await this.connection(TABLE_PRODUCTS).insert(newProduct);
        return result;
    }

    public getProduct = async () => {
        const result = await this.connection(TABLE_PRODUCTS).select();
        return result;
    }
}