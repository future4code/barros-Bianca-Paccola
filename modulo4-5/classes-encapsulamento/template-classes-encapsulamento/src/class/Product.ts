export class Product {

    constructor(private id: string, private name: string, public price: number) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}