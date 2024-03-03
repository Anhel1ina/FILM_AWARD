import { AllData, Film } from "../../helpers/filmsTypes";
import { AppThunk } from "../store";
import { CardFilmAction } from "./types";
import { options } from "../../helpers/getPagesData";
import { getUrlForFiltersSearch } from "../../helpers/customPages";


export const LoadFilmsForPageAction = (films: Film[], page: number = 1, total: number): CardFilmAction => ({
    type: 'LOAD_FILMS_FOR_PAGE',
    amountOfFilms: films,
    page: page,
    total: total
})

export const SetPageAction = (page: number = 1): CardFilmAction => ({
    type: 'SET_PAGE',
    page: page
})


export const LoadFilmsForPageAsyncAction = (page: number): AppThunk => {
    const limit = 16
    // const url = `https://api.kinopoisk.dev/v1.4/movie?page=${page}&limit=${limit}`
    const url = `https://api.kinopoisk.dev/v1.4/movie?page=${page}&limit=${limit}&selectFields=facts&selectFields=similarMovies&selectFields=sequelsAndPrequels&selectFields=id&selectFields=name&selectFields=description&selectFields=type&selectFields=year&selectFields=rating&selectFields=ageRating&selectFields=genres&selectFields=poster&selectFields=backdrop&selectFields=persons&selectFields=countries&selectFields=budget&selectFields=isSeries&selectFields=movieLength&selectFields=top250&selectFields=slogan`
    return (dispatch) => {
        fetch(url, options)
            .then(res => res.json())
            .then(res => {
                dispatch(LoadFilmsForPageAction(res.docs, page, res.total))
            })
    }
}

export const LoadFilmsWithFiltersForPage = (page: number = 1): AppThunk => {
    const limit = 16
    return (dispatch, getState) => {
        const filters = getState().filters
        const movieTypes = Object.values(filters.addedGenres!).map(item => item.genre)
        const url = getUrlForFiltersSearch(movieTypes, filters.years!, filters.rating!, filters.countryValue!, filters.sortby!) + `&limit=${limit}&page=${page}`
        fetch(url, options)
            .then(res => res.json())
            .then(res => {
                dispatch(LoadFilmsForPageAction(res.docs, page, res.total))
            })
    }
}
