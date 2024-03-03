import { BurgerState, BurgerAction } from "./types"

export const burgerInitState: BurgerState = {//burger inintial state
    isOpened: false
}

export const burgerReducer = (state = burgerInitState, action: BurgerAction): BurgerState => {
    switch (action.type) {
        case 'OPEN':
            return {
                isOpened: true,
                isHide: false
            }
        case 'CLOSE':
            return {
                isHide: false,
                isOpened: false
            }
        case 'HIDE':
            return {
                ...state,
                isHide: true
            }
        default:
            return state
    }
}