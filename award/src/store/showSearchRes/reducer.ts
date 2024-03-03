import { SearchResFilmState, SearchResFilmAction } from "./types";

export const SearchResFilmInitState: SearchResFilmState = {
    amountOfFilms: [],
    searchPage: 1,
}

export const searchResReducer = (state = SearchResFilmInitState, action: SearchResFilmAction): SearchResFilmState => {
    switch(action.type){
        case 'LOAD_FILMS_FOR_SEARCH_PAGE':
            return{
                ...state,
                amountOfFilms: action.amountOfFilms!,
                searchPage: action.searchPage!,
                total: action.total!
            }
        case 'SET_SEARCH_PAGE':
            return {
                ...state,
                searchPage: action.searchPage!
            }
        default: return state
    }
}