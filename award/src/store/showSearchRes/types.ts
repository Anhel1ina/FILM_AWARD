import { Film } from "../../helpers/filmsTypes"

export type SearchResFilmState = {
    amountOfFilms: Film[]
    total?: number
    searchPage?: number
}

export type SearchResFilmAction = {
    type: string
    amountOfFilms?: Film[]
    total?: number
    searchPage?: number
}