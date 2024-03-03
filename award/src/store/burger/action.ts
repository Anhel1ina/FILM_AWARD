import { BurgerAction } from "./types"

export const setOpenAction = (): BurgerAction => ({
    type: 'OPEN'
})

export const setCloseAction = (): BurgerAction => ({
    type: 'CLOSE'
})

export const setHideAction = (): BurgerAction => ({
    type: 'HIDE'
})
