import { useSelector } from "react-redux"
import { AppState } from "../store"

export const useFiltersState = () => {
    const selector = useSelector(
        (globalState: AppState) => globalState.filters
    )
    return selector
}