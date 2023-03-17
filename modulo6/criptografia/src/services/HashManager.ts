import * as bcrypt from "bcryptjs";

export abstract class HashManager {
    static async generateHash (plainText: string):Promise<string> {
        const cost:number = Number(process.env.BCRYPT_COST)
        const salt: string = await bcrypt.genSalt(cost)
        const hash = await bcrypt.hash(plainText, salt)
        return hash;
    }

    static async compareHash (plainText: string, hashText: string): Promise<boolean> {
        const result = await bcrypt.compare(plainText, hashText)
        return result;
    }
}