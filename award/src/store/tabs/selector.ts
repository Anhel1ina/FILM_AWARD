import { useSelector } from "react-redux"
import { AppState } from "../store"

export const useTabsState = () => {
    const selector = useSelector(
        (globalState: AppState) => globalState.tabs
    )
    return selector
}