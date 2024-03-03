import { Film } from "../../helpers/filmsTypes";
import { AddToFavsActionType } from "./types";
import { AddToFavsType } from "./types";

export const AddToFavsInitState: AddToFavsType = {
    ['1']: {
        isAdded: false,
        film: {} as Film
    }
}

export const addToFavsReducer = (state = AddToFavsInitState, action: AddToFavsActionType): AddToFavsType => {
    switch (action.type){
        case 'ADD':
            return{
                ...state,
                [action.filmId]: {
                    ...state[action.filmId],
                    isAdded: true
                }
            }
        case 'UNDO':
            return{
                ...state,
                [action.filmId]: {
                    ...state[action.filmId],
                    isAdded: false
                }
            }
        case 'SET_FILM':
            return{
                ...state,
                [action.filmId]: {
                    ...state[action.filmId],
                    film: action.film
                }
            }
        default: return state
    }
}