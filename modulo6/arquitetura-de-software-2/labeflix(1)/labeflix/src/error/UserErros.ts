import { CustomError } from "./customError";

export class IncompleteData extends CustomError {
    constructor() {
        super(422, "Dados incompletos. Informar: email, name, password.")
    }
}