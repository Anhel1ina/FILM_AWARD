import { ThemeState, ThemeAction } from "./types"

export const themeInitState: ThemeState = {
    theme: 'LIGHT'
}


export const themeReducer = (state = themeInitState, action: ThemeAction): ThemeState => {
    switch (action.type) {
        case 'SET_LIGHT_MODE':
            return ({
                theme: 'LIGHT'
            })
        case 'SET_DARK_MODE':
            return ({
                theme: 'DARK'
            })
        default:
            return state
    }
}