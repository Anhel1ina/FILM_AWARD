import { FiltersAction, FiltersState } from "./types"

export const FiltersInitState: FiltersState = {
    genres: [],
    countries: [],
    isFilterOpened: false,

    years: {
        from: '',
        to: ''
    },

    rating: {
        from: '',
        to: ''
    }
}

export const filtersReducer = (state = FiltersInitState, action: FiltersAction): FiltersState => {
    switch (action.type) {
        case 'SET_FILTER_MODAL_OPENED':
            return {
                ...state,
                isFilterOpened: action.isFilterOpened!
            }
        case 'SET_ALL_FILTERS':
            return {
                ...state,
                genres: action.genres!
            }
        case 'SET_ALL_COUNTRIES':
            return {
                ...state,
                countries: action.countries!
            }
        case 'SET_FILTER_VALUE':
            return {
                ...state,
                isFiltersSet: true,
                filterValue: action.filterValue!
            }
        case 'SET_COUNTRY_VALUE':
            return {
                ...state,
                isFiltersSet: true,
                countryValue: action.countryValue!
            }
        case 'SET_FILTER_FOR_ADD':
            const { addGenre } = action;

            return {
                ...state,
                isFiltersSet: true,
                addedGenres: {
                    ...state.addedGenres,
                    [addGenre!]: {
                        ...(state.addedGenres && state.addedGenres[addGenre!]
                            ? state.addedGenres[addGenre!]
                            : {}),
                        genre: addGenre!,
                    },
                },
            }
        case 'REMOVE_FILTER_FOR_ADD':
            const updatedAddedGenres = { ...state.addedGenres }
            delete updatedAddedGenres[action.removeGenre!]
            return {
                ...state,
                addedGenres: updatedAddedGenres,
            }
        case 'SET_SORT_BY_RATING':
            return {
                ...state,
                isFiltersSet: true,
                sortby: 'rating.kp'
            }
        case 'SET_SORT_BY_YEAR':
            return {
                ...state,
                isFiltersSet: true,
                sortby: 'year'
            }
        case 'CLEAR_SORT_BY':
            return {
                ...state,
                isFiltersSet: false,
                sortby: ''
            }
        case 'SET_FROM_YEAR':
            return {
                ...state,
                isFiltersSet: true,
                years: {
                    ...state.years!,
                    from: action.fromYear!
                }
            }
        case 'SET_TO_YEAR':
            return {
                ...state,
                isFiltersSet: true,
                years: {
                    ...state.years!,
                    to: action.toYear!
                }
            }
        case 'SET_FROM_RATING':
            return {
                ...state,
                isFiltersSet: true,
                rating: {
                    ...state.rating!,
                    from: action.fromRating!
                }
            }
        case 'SET_TO_RATING':
            return {
                ...state,
                isFiltersSet: true,
                rating: {
                    ...state.rating!,
                    to: action.toRating!
                }
            }
        case 'SET_URL_FOR_SEARCH':
            return {
                ...state,
                isFiltersSet: true,
                urlForSearch: action.urlForSearch
            }
        case 'CLEAR_FILTERS':
            return {
                ...state,
                isFiltersSet: false,
                filterValue: '',
                countryValue: '',
                addedGenres: {},

                sortby: '',
                years: {
                    from: '',
                    to: ''
                },
                rating: {
                    from: '',
                    to: ''
                },
                urlForSearch: ''
            }
        default: return state
    }
}