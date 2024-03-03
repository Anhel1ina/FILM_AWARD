import { useSelector } from "react-redux"
import { AppState } from "../store"

export const useThemeState = () => {
    const selector = useSelector(
        (globalState: AppState) => globalState.theme
    )
    return selector
}