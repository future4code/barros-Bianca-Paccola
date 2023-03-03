import { characterDTO } from "./model/characterDTO";

export const validateCharacter = (character: characterDTO) => {
    if (!character.name || !character.life || !character.defense || !character.strength ) {
        return false;
    } 
    if (character.defense <= 0 || character.life <= 0 || character.strength <= 0) {
        return false;
    }
    
    return true;
}