//Explique, com as suas palavras, as diferenças entre as duas implementações ( que utilize a função de validação diretamente na implementação e com inversão de dependências)
//RESPOSTA: a inversão de dependências torna possível fazer a versão mockada da função que é chamada na função principal que está sendo testada

//De qual das duas funções (validateCharacter ou performAttack)  deveremos criar um Mock nos próximos testes?
//REPOSTA: deve-se criar o mock da função validateCharacter pois a função performeAttack quem está sendo testada neste arquivo e ele chama a função validateCharacter que já está sendo testada no outro arquivo

import { performAttack } from "../src/functionsCharacter";
import { characterDTO } from "../src/model/characterDTO";

describe("Tests for the performe attack function", () => {
    test("Should perform attack", () => {
        const characterDefender:characterDTO = {
            name: "Bubassour",
            life: 1500,
            defense: 500,
            strength: 150
        } 
        const characterAttacker:characterDTO = {
            name: "Bubassour",
            life: 1500,
            defense: 120,
            strength: 700
        } 
        const validateCharacterMock = jest.fn(()=>{
            return true;
        })
        const result = performAttack(characterAttacker, characterDefender, validateCharacterMock as any)
        expect(result.life).toBe(1300)
        expect(validateCharacterMock).toHaveBeenCalled() //se foi chamada
        expect(validateCharacterMock).toHaveBeenCalledTimes(2) //se foi chamada 2 vezes, 1 para cada character
        expect(validateCharacterMock).toHaveReturnedTimes(2) // se retornou 2 vezes, 1 para cada character 
    });
    
    test("Should return Invalid character", () => {
        expect.assertions(4)
        const characterDefender:characterDTO = {
            name: "Bubassour",
            life: 1500,
            defense: 500,
            strength: 150
        } 
        const characterAttacker:characterDTO = {
            name: "Bubassour",
            life: 0,
            defense: 120,
            strength: 700
        } 
        const validateCharacterMock = jest.fn(()=>{
            return false;
        })
        try {
            performAttack(characterAttacker, characterDefender, validateCharacterMock as any)
        } catch (error:any) {
            expect(error.message).toBe("Invalid character")
            expect(validateCharacterMock).toHaveBeenCalled() //se foi chamada
            expect(validateCharacterMock).toHaveBeenCalledTimes(1)
            expect(validateCharacterMock).toHaveReturnedTimes(1)
        }
    })
})