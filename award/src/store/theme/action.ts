import { ThemeAction } from "./types"

export const setLightMode = (): ThemeAction => ({
    type: 'SET_LIGHT_MODE'
})

export const setDarkMode = (): ThemeAction => ({
    type: 'SET_DARK_MODE'
})