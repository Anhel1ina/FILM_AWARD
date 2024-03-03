import { Film } from "../../helpers/filmsTypes"

export type CardFilmState = {
    amountOfFilms: Film[]
    total?: number
    limit?: number
    page?: number
    searchPage?: number
}

export type CardFilmAction = {
    type: string
    amountOfFilms?: Film[]
    total?: number
    page?: number
    searchPage?: number
}