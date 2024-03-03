import { Film } from "../../helpers/filmsTypes"

export type AddToFavsType = {
    [filmId: string]: {
        isAdded: boolean
        film?: Film
    }
}

export type AddToFavsActionType = {
    type: 'ADD' | 'UNDO' | 'SET_FILM'
    filmId: string
    film?: Film
}