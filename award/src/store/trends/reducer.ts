import { TrendsFilmState, TrendsFilmAction } from "./types";

export const CardFilmInitState: TrendsFilmState = {
    amountOfFilms: [],
    page: 1,
    limit: 16
}

export const trendsReducer = (state = CardFilmInitState, action: TrendsFilmAction): TrendsFilmState => {
    switch (action.type) {
        case 'LOAD_FILMS_FOR_TRENDS_PAGE':
            return {
                ...state,
                amountOfFilms: action.amountOfFilms!,
                page: action.page!,
                total: action.total!
            }
        case 'SET_TRENDS_PAGE':
            return {
                ...state,
                page: action.page!
            }
        default: return state
    }
}