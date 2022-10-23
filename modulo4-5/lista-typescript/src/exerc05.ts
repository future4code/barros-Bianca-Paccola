//Considerando o array de usuários abaixo, crie uma função que receba este array como parâmetro e retorne uma lista com apenas os emails dos usuários “admin”. 

type User = {
    name: string,
    email: string,
    role:  string
}

let users = [
	{name: "Rogério", email: "roger@email.com", role: "user"},
	{name: "Ademir", email: "ademir@email.com", role: "admin"},
	{name: "Aline", email: "aline@email.com", role: "user"},
	{name: "Jéssica", email: "jessica@email.com", role: "user"},  
	{name: "Adilson", email: "adilson@email.com", role: "user"},  
	{name: "Carina", email: "carina@email.com", role: "admin"}      
] 

function getAdminsEmails(array: User[]): string[] {
return array.filter((user) => user.role === "admin").map((user) => user.email)
}

console.log(getAdminsEmails(users));