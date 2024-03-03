import { CardFilmAction, CardFilmState } from "./types";

export const CardFilmInitState: CardFilmState = {
    amountOfFilms: [],
    page: 1,
    limit: 13
}

export const filmReducer = (state = CardFilmInitState, action: CardFilmAction): CardFilmState => {
    switch (action.type) {
        case 'LOAD_FILMS_FOR_PAGE':
            return {
                ...state,
                amountOfFilms: action.amountOfFilms!,
                page: action.page!,
                total: action.total!
            }
        case 'SET_PAGE':
            return {
                ...state,
                page: action.page!
            }
        default: return state
    }
}