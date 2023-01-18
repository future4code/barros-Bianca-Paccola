import { app } from "./app";
import { UserController } from "./controller/UserController";

const userController = new UserController()

app.get("/", function(){
    console.log("eu vou vencer!")
})

app.post("/createUser", userController.createUser)