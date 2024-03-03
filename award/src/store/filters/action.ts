import { options } from "../../helpers/getPagesData";
import { AppThunk } from "../store";
import { FiltersAction } from "./types";

export const SetFilterModalOpened = (value: boolean): FiltersAction => ({
    type: 'SET_FILTER_MODAL_OPENED',
    isFilterOpened: value
})

export const SetAllGenres = (genres: { name: string }[]): FiltersAction => ({
    type: 'SET_ALL_FILTERS',
    genres: genres
})

export const SetAllCountries = (countries: { name: string }[]): FiltersAction => ({
    type: 'SET_ALL_COUNTRIES',
    countries: countries
})

export const LoadAllGenres = (): AppThunk => {
    const url = `https://api.kinopoisk.dev/v1/movie/possible-values-by-field?field=genres.name`
    return (dispatch, getState) => {
        fetch(url, options)
            .then(res => res.json())
            .then(res => dispatch(SetAllGenres(res)))
    }
}

export const LoadAllCountries = (): AppThunk => {
    const url = `https://api.kinopoisk.dev/v1/movie/possible-values-by-field?field=countries.name`
    return (dispatch, getState) => {
        fetch(url, options)
            .then(res => res.json())
            .then(res => dispatch(SetAllCountries(res)))
    }
}

export const SetCountryValue = (value: string): FiltersAction => ({
    type: 'SET_COUNTRY_VALUE',
    countryValue: value
})

export const SetFilterValue = (value: string): FiltersAction => ({
    type: 'SET_FILTER_VALUE',
    filterValue: value
})

export const SetFilterForAdd = (genre: string) => ({
    type: 'SET_FILTER_FOR_ADD',
    addGenre: genre
})

export const RemoveFilterForAdd = (genre: string) => ({
    type: 'REMOVE_FILTER_FOR_ADD',
    removeGenre: genre,
})

export const SetSortByRating = () => ({
    type: 'SET_SORT_BY_RATING'
})

export const SetSortByYear = () => ({
    type: 'SET_SORT_BY_YEAR'
})

export const ClearSortBy = () => ({
    type: 'CLEAR_SORT_BY'
})

export const SetFromYear = (from: string) => ({
    type: 'SET_FROM_YEAR',
    fromYear: from
})

export const SetToYear = (to: string) => ({
    type: 'SET_TO_YEAR',
    toYear: to
})

export const SetFromRating = (from: string) => ({
    type: 'SET_FROM_RATING',
    fromRating: from
})

export const SetToRating = (to: string) => ({
    type: 'SET_TO_RATING',
    toRating: to
})

export const SetUrlForSearch = (url: string) => ({
    type: 'SET_URL_FOR_SEARCH',
    urlForSearch: url
})

export const ClearFilters = () => ({
    type: 'CLEAR_FILTERS'
})

