export type User = {
    id: number;
    name: string;
    phone: string;
    email: string;
    website: string;
}

export type Post = {
    id: number;
    title: string;
    body: string;
    userId: number;
}