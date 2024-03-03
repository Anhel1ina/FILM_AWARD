import { useSelector } from "react-redux"
import { AppState } from "../store"

export const useSearchResState = () => {
    const selector = useSelector(
        (globalState: AppState) => globalState.searchRes
    )
    return selector
}