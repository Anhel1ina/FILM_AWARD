import { Film } from "../../helpers/filmsTypes";
import { AppThunk } from "../store";
import { TrendsFilmAction } from "./types";
import { options } from "../../helpers/getPagesData";


export const LoadFilmsForTrendsPageAction = (films: Film[], page: number = 1, total: number): TrendsFilmAction => ({
    type: 'LOAD_FILMS_FOR_TRENDS_PAGE',
    amountOfFilms: films,
    page: page,
    total: total
})

export const SetTrendsPageAction = (page: number = 1): TrendsFilmAction => ({
    type: 'SET_TRENDS_PAGE',
    page: page
})


export const LoadFilmsForTrendsPageAsyncAction = (page: number): AppThunk => {
    const limit = 16
    const rating = '7.5-10'
    const url = `https://api.kinopoisk.dev/v1.4/movie?page=${page}&limit=${limit}&selectFields=id&selectFields=name&selectFields=alternativeName&selectFields=description&selectFields=type&selectFields=isSeries&selectFields=year&selectFields=rating&selectFields=movieLength&selectFields=genres&selectFields=countries&selectFields=poster&selectFields=backdrop&selectFields=persons&selectFields=facts&selectFields=similarMovies&selectFields=sequelsAndPrequels&rating.kp=${rating}`
    return (dispatch) => {
        fetch(url, options)
            .then(res => res.json())
            .then(res => {
                dispatch(LoadFilmsForTrendsPageAction(res.docs, page, res.total))
            })
    }
}
