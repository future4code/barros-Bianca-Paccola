import * as jwt from 'jsonwebtoken'
import { AuthenticationData } from "../model/user";

export abstract class Authenticator {

    static generateToken({id}: AuthenticationData):string {
        const token = jwt.sign(
            {id},
            process.env.JWT_KEY as string,
            {expiresIn: "1h"}
        )
        return token;
    }

    static getToken(token: string):AuthenticationData {
        const payload = jwt.verify(
            token,
            process.env.JWT_KEY as string
        ) as AuthenticationData
        return payload;
    }
}