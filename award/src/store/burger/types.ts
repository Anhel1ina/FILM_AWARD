export type BurgerState = {
    isOpened?: boolean
    isHide?: boolean
}

export type BurgerAction = {
    type: 'OPEN' | 'CLOSE' | 'HIDE'
}