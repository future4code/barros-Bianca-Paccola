export enum ROLE {
    NORMAL = 'NORMAL',
    ADMIN = 'ADMIN'
}

export interface userDTO {
    id: string,
    name: string,
    email: string,
    role: ROLE
}