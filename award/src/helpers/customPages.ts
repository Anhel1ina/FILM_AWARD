import { Film } from "./filmsTypes";

type favFilms = {
    isAdded: boolean;
    film?: Film | undefined;
}

type Years = {
    from?: string;
    to?: string;
}

type Rating = {
    from?: string;
    to?: string;
}

export const getCustomFilmCardsPages = (favFilms: favFilms[], page: number, numOfFilmCardsPerPage: number): favFilms[] => {
    const startIndex = (page - 1) * numOfFilmCardsPerPage
    const endIndex = startIndex + numOfFilmCardsPerPage
    return favFilms.slice(startIndex, endIndex)
}

export const getUrlForFiltersSearch = (movieTypes: string[], years: Years, rating: Rating, countryValue: string, sortby: string) => {
    let url = `https://api.kinopoisk.dev/v1.4/movie?selectFields=facts&selectFields=similarMovies&selectFields=sequelsAndPrequels&selectFields=id&selectFields=name&selectFields=description&selectFields=type&selectFields=year&selectFields=rating&selectFields=ageRating&selectFields=genres&selectFields=poster&selectFields=backdrop&selectFields=persons&selectFields=countries&selectFields=budget&selectFields=isSeries&selectFields=movieLength&selectFields=top250&selectFields=slogan`
        if(movieTypes.length){
            for(let i = 0; i < movieTypes.length; i++){
                url += `&genres.name=${movieTypes[i]}`
            }
        }
        if(years){
            url += `&year=${years.from ? years.from : '1874'}-${years.to ? years.to : 2050}`
        }
        if(rating){
            url += `&rating.kp=${rating.from ? rating.from : 0}-${rating.to ? rating.to : 10}`
        }
        if(countryValue){
            url += `&сountries.name=${countryValue}`
        }
        if(sortby){
            url += `&sortField=${sortby}&sortType=1&notNullFields=name&notNullFields=description`
        }
    return url
}