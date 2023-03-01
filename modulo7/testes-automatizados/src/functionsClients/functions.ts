import { userDto, userInputPurchaseDTO } from "../model/userDTO";

export const userPurchase =  (input: userInputPurchaseDTO):userDto | undefined => {

    const userInput: userInputPurchaseDTO = {
        user: {
            name: input.user.name,
            userBalance: input.user.userBalance
        },
        value: input.value
    }

    if(userInput.value <= userInput.user.userBalance) {
        return {
                name: userInput.user.name,
                userBalance: userInput.user.userBalance - userInput.value
        }
    } 
    return undefined;
};