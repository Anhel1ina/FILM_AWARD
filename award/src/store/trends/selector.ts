import { useSelector } from "react-redux"
import { AppState } from "../store"

export const useTrendsState = () => {
    const selector = useSelector(
        (globalState: AppState) => globalState.trends
    )
    return selector
}