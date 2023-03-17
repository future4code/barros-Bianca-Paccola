import { characterDTO } from "./model/characterDTO";

export const validateCharacter = (character: characterDTO):boolean => {
    if (!character.name || !character.life || !character.defense || !character.strength ) {
        return false;
    } 
    if (character.defense <= 0 || character.life <= 0 || character.strength <= 0) {
        return false;
    }
    
    return true;
}

export const performAttack = (
    attacker: characterDTO, 
    defender: characterDTO, 
    validator: (input: characterDTO) => boolean
    ):characterDTO => {
    if (!validator(attacker) || !validator(defender)) {
        throw new Error("Invalid character")
    }
    if (attacker.strength > defender.defense) {
        defender.life -= attacker.strength - defender.defense
    }

    return defender;
}