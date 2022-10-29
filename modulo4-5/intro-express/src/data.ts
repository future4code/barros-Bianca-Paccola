import * as typ from "./types";

export const users: typ.User[] = [
    {
        id: 1,
        name:  'John',
        phone: "123-555",
        email: 'john@example.com',
        website: "postit.com/john123"
    },
    {
        id: 2,
        name:  'Anna',
        phone: "183-553",
        email: 'anna@example.com',
        website: "postit.com/anna123"
    },
    {
        id: 3,
        name:  'Maria',
        phone: "143-455",
        email: 'maria@example.com',
        website: "postit.com/maria123"
    },
    {
        id: 4,
        name:  'Richard',
        phone: "159-158",
        email: 'richard@example.com',
        website: "postit.com/richard123"
    },
    {
        id: 5,
        name:  'Mike',
        phone: "158-214",
        email: 'mike@example.com',
        website: "postit.com/mike123"
    },
    {
        id: 6,
        name:  'Helena',
        phone: "159-414",
        email: 'helena@example.com',
        website: "postit.com/helena123"
    },
    {
        id: 7,
        name:  'Robert',
        phone: "155-996",
        email: 'robert@example.com',
        website: "postit.com/robert123"
    },
    {
        id: 8,
        name:  'Alex',
        phone: "122-458",
        email: 'alex@example.com',
        website: "postit.com/alex123"
    },
    {
        id: 9,
        name:  'Grace',
        phone: "133-559",
        email: 'grace@example.com',
        website: "postit.com/grace123"
    },
    {
        id: 10,
        name:  'Laura',
        phone: "155-889",
        email: 'laura@example.com',
        website: "postit.com/laura123"
    },

]

export const posts: typ.Post[] = [
    {
        id: 1,
        title: 'The show must go on',
        body: 'My soul is painted like a wings of butterflies. Fairy tales of yesterday, grow but never die. I can flu my friends',
        userId: 1
    },
    {
        id: 2,
        title: 'I want to break free',
        body: "Gog knows! God knows how I want to break free. It's strange but it's true, I can't get over the way you love me like you do.",
        userId: 2 
    },
    {   id: 3,
        title: 'Confortably numb',
        body: "When I was a child, I had a fever. My hands felt just like two balloons. Now I've got that feeling once again. I can't explain, you would not understand, this is not how I am.",
        userId: 3
    },
    {
        id: 4,
        title: 'Wish you were here',
        body: "We're just two lost souls swimming in a fish bowl year after year. Running over the same old ground. What have we found? The same old fears. Wish you were here.",
        userId: 4
    },
    {
        id: 5,
        title: 'Wanna be free',
        body: "And my time was my own, and my heart felt so free. I don't mind a little rain, but it doesn't seem the same.",
        userId: 1
    }
]