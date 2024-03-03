import { AllData, Film } from "../../helpers/filmsTypes";
import { AppThunk } from "../store";
import { SearchResFilmAction } from "./types";
import { options } from "../../helpers/getPagesData";
import { url } from "inspector";


export const LoadFilmsForSearchPageAction = (films: Film[], page: number = 1, total: number): SearchResFilmAction => ({
    type: 'LOAD_FILMS_FOR_SEARCH_PAGE',
    amountOfFilms: films,
    searchPage: page,
    total: total
})

export const SetSearchPageAction = (page: number = 1): SearchResFilmAction => ({
    type: 'SET_SEARCH_PAGE',
    searchPage: page
})

export const SearchFilmsAsyncAction = (page: number, forSearch: string): AppThunk => {
    const limit = 16
    const url = `https://api.kinopoisk.dev/v1.4/movie/search?page=${page}&limit=${limit}&query=${forSearch}`
    return (dispatch) => {
        fetch(url, options)
            .then(res => res.json())
            .then(res => {
                dispatch(LoadFilmsForSearchPageAction(res.docs, page, res.total))
            })
    }
}

export const SearchFilmsWithFiltersAsyncAction = (page: number = 1, forSearch: string): AppThunk => {
    const limit = 250
    return (dispatch, getState) => {
        let url = getState().filters.urlForSearch ? getState().filters.urlForSearch + `&page=${page}&limit=${limit}` : '';
        debugger
        fetch(url, options)
            .then(res => res.json())
            .then(res => {
                const usedRes: Film[] = res.docs
                .filter((item: Film) => item.name!.toLowerCase().includes(forSearch.toLowerCase()))
                console.log('used', usedRes)
                dispatch(LoadFilmsForSearchPageAction(usedRes.slice(0, 16), page, res.total))
            })
    }
}