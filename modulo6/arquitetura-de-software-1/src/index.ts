import { app } from "./app";
import { UserController } from "./controller/UserController";

const userController = new UserController()

app.get("/all", userController.getAllUsers)

app.post("/createUser", userController.createUser)

app.delete("/:id", userController.deleteUser)