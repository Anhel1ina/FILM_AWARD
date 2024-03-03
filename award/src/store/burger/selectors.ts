import { useSelector } from "react-redux"
import { AppState } from "../store"

export const useMenuState = () => {
    const selector = useSelector(
        (globalState: AppState) => globalState.menu
    )
    return selector
}