//Crie uma função que receba um parâmetro qualquer e que imprima no console o tipo da variável. 

function typeOfVariable (element: any) : void {
    console.log(typeof element);
}

typeOfVariable(32);
typeOfVariable("string");
typeOfVariable(true);