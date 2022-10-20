// Type Aliases
// Enum

type Person = {
    name: string,
    age: number,
    favoriteColor: string;
}

enum RainbowColors {
    RED = "red",
    ORANGE = "orange",
    YELLOW = "yellow",
    GREEN = "green",
    BLUE = "blue",
    INDIGO = "indigo",
    VIOLET = "violet",
}

const person1: Person = {
    name: 'John',
    age: 31,
    favoriteColor: RainbowColors.INDIGO,
}

const person2: Person = {
    name: 'Anna',
    age: 29,
    favoriteColor: RainbowColors.VIOLET,
}

const person3: Person = {
    name: 'Rick',
    age: 22,
    favoriteColor: RainbowColors.GREEN,
}

const person4: Person = {
    name: 'Mary',
    age: 41,
    favoriteColor: RainbowColors.YELLOW,
}

console.table([person1, person2, person3, person4]);