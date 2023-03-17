import { ROLE, User } from "../../src/model/User";

export const userMock = new User(
    "555666", 
    "User Teste", 
    "teste@email.com", 
    "123abc", 
    ROLE.NORMAL
);