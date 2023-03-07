import { UserRepository } from "../../src/business/UseRepository";
import { User } from "../../src/model/User";
import { userMock } from "./userMock";

export class userDatabaseMock implements UserRepository {
    public async getUserById(id: string): Promise<User | undefined> {
        return id === '555666' ? userMock : undefined;
    }
    
}