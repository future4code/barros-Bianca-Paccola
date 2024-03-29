export enum POST_TYPES {
    NORMAL = "normal",
    EVENT = "event",
}

export interface postDTO {
    id: string,
    photo: string,
    description: string,
    type: POST_TYPES,
    createdAt: Date,
    authorId: string
}