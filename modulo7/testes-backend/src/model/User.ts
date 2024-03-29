export class User {
    constructor(
        private id: string,
        private name: string,
        private email: string,
        private password: string,
        private role: ROLE
    ) {}

    public getId(): string {
        return this.id;
    }

    public getName(): string {
        return this.name;
    }

    public getEmail(): string {
        return this.email;
    }

    public getPassword(): string {
        return this.password;
    }

    public getRole(): ROLE {
        return this.role;
    }
}

export enum ROLE {
    NORMAL = 'NORMAL',
    ADMIN = 'ADMIN'
}