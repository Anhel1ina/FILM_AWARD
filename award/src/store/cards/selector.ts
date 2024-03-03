import { useSelector } from "react-redux"
import { AppState } from "../store"

export const useFilmsState = () => {
    const selector = useSelector(
        (globalState: AppState) => globalState.films
    )
    return selector
}