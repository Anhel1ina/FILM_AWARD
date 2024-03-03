import { Film } from "../../helpers/filmsTypes"

export type TrendsFilmState = {
    amountOfFilms: Film[]
    total?: number
    limit?: number
    page?: number
}

export type TrendsFilmAction = {
    type: string
    amountOfFilms?: Film[]
    total?: number
    page?: number
}