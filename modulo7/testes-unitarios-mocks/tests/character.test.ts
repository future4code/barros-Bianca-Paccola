import { validateCharacter } from "../src/functionsCharacter"
import { characterDTO } from "../src/model/characterDTO"

describe("Tests for the character", () => {
    
    test("Should return false", () =>{
        const character: characterDTO = {
            name: "",
            life: 1500,
            defense: 20,
            strength: 30
        }
        expect(validateCharacter(character)).toBe(false)
    })

    test("Should return false for empty name", () => {
        const character: characterDTO = {
            name: "Pikachu",
            life: 0,
            defense: 20,
            strength: 30
        }
        expect(validateCharacter(character)).toBe(false)
    })

    test("Should return false for defense 0", () => {
        const character: characterDTO = {
            name: "Pikachu",
            life: 1500,
            defense: 0,
            strength: 30
        }
        expect(validateCharacter(character)).toBe(false)
    })

    test("Should return false for strenght 0", () => {
        const character: characterDTO = {
            name: "Pikachu",
            life: 1500,
            defense: 20,
            strength: 0
        }
        expect(validateCharacter(character)).toBe(false)
    })

    test("Should return false for life with negative value", () => {
        const character: characterDTO = {
            name: "Pikachu",
            life: -1500,
            defense: 20,
            strength: 30
        }
        expect(validateCharacter(character)).toBe(false)
    })

    test("Should return true", () => {
        const character: characterDTO = {
            name: "Pikachu",
            life: 1500,
            defense: 20,
            strength: 30
        }
        expect(validateCharacter(character)).toBe(true)
    })
})