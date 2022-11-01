
import express, {Request, Response} from "express";
import cors from "cors";
import * as types from "./types";
import * as datas from "./data";
import { send } from "process";

const app = express();
app.use(express.json());
app.use(cors());

app.get("/test", (req: Request, res: Response) => {
    res.status(200).send("Server is running on port 3000")
});

//return all products
app.get("/products", (req: Request, res: Response) => {
    res.status(200).send(datas.products);
});

//change the price of a product
app.put("/product/:id", (req: Request, res: Response) => {
    try {
        const productId = req.params.id;
        const newPrice = req.body.price;
        const productIndex = datas.products.findIndex(product => product.id === productId);
 
        if(productIndex < 0) {
            const error = new Error("Id do produto não encontrado na base de dados.");
            error.name = "NotFound";
            throw error;
        }
        if (newPrice <= 0) {
            const error = new Error("O preço do produto precisa ser maior que R$0");
            error.name = "IncompleteData";
            throw error;
        }
        if (!newPrice) {
            const error = new Error("Precisa informar o preço do produto!");
            error.name = "IncompleteData";
            throw error;
        }
        if (typeof newPrice !== "number") {
            const error = new Error("O preço precisa ser informado em formato númerico!");
            error.name = "IncompleteData";
            throw error;
        }

        //return
        datas.products[productIndex].price = newPrice
        res.status(200).send(datas.products);
        // res.status(400).send("Id não encontrado na base de dados.")
        
    } catch(err:any) {
        if(err.name === 'NotFound') {
            res.status(404).send(err.message);
        } else if(err.name === 'IncompleteData') {
            res.status(422).send(err.message);
        } else {
            res.send(500).send(err.message);
        }
    }

})

// add a product to the list of products
app.post("/products/add", (req: Request, res: Response) => {
    try {
        const body = req.body
        if(!body.name) {
            const error = new Error("Precisa informar o nome do produto!");
            error.name = "IncompleteData";
            throw error;
        } 
        if (!body.price) {
            const error = new Error("Precisa informar o preço do produto!");
            error.name = "IncompleteData";
            throw error;
        }
        if(typeof body.name !==  "string") {
            const error = new Error("O nome do produto precisa ser passado em formato string...");
            error.name = "IncompleteData";
            throw error;
        }
        if (typeof body.price !==  "number") {
            const error = new Error("O preço do produto deve ser passado em formato numérico...");
            error.name = "IncompleteData";
            throw error;
        }
        if (body.price <= 0) {
            const error = new Error("O preço do produto precisa ser maior que R$0.");
            error.name = "IncompleteData";
            throw error;
        }

        // return
        datas.products.push({
            id: Math.floor(Date.now() * Math.random()).toString(6),
            name: body.name,
            price: body.price
        })
        res.status(201).send(datas.products);

    } catch(err:any) {

        if(err.name === 'IncompleteData') {
            res.status(422).send(err.message);
        } else {
            res.send(500).send(err.message);
        }
    }
});

// delete a product of the list
app.delete("/product/:id", (req: Request, res: Response) => {
    const productId = req.params.id;
    const productIndex = datas.products.findIndex(product => product.id === productId);
    datas.products.splice(productIndex, 1)
    res.status(200).send(datas.products);
});



app.listen(3000, () => {
    console.log("Server is running in http://localhost:3000");
})