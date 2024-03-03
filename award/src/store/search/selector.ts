import { useSelector } from "react-redux"
import { AppState } from "../store"

export const useSearchState = () => {
    const selector = useSelector(
        (globalState: AppState) => globalState.search
    )
    return selector
}