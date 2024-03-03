export type FiltersState = {
    isFilterOpened: boolean
    isFiltersSet?: boolean
    genres?: {name: string}[]
    countries?: {name: string}[]
    filterValue?: string
    countryValue?: string
    addedGenres?: { [num: string]: { genre: string }};

    sortby?: string
    years?: {
        from?: string
        to?: string
    }
    rating?: {
        from?: string
        to?: string
    }

    urlForSearch?: string
}

export type FiltersAction = {
    type: string
    isFilterOpened?: boolean
    genres?: {name: string}[]
    countries?: {name: string}[]
    filterValue?: string
    countryValue?: string
    addGenre?: string

    removeGenre?: string

    fromYear?: string
    toYear?: string

    fromRating?: string
    toRating?: string

    urlForSearch?: string
}