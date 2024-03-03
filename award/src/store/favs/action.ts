import { options } from "../../helpers/getPagesData"
import { AppThunk } from "../store"
import { AddToFavsActionType } from "./types"
import { Film } from "../../helpers/filmsTypes"

export const AddToFavsAction = (filmId: string): AddToFavsActionType => ({
    type: 'ADD',
    filmId: filmId
})

export const UndoAddToFavs = (filmId: string): AddToFavsActionType => ({
    type: 'UNDO',
    filmId: filmId
})

export const SetFavsFilm = (film: Film) => ({
    type: 'SET_FILM',
    filmId: film.id,
    film: film
})

export const LoadFilmByIdToAddToFavs = (id: string): AppThunk => {
    const url = `https://api.kinopoisk.dev/v1.4/movie/${id}`
    return (dispatch, getState) => {
        fetch(url, options)
            .then(res => res.json())
            .then(res => {
                dispatch(SetFavsFilm(res))
                console.log('load_fav_film', res)
            })
    }
}