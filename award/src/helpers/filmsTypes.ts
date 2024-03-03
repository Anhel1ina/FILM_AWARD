//film types
export type Country = {
    name: string
}

export type Fact = {
    value: string
    type: string
    spoiler: boolean
}

export type Genre = {
    name: string
}

export type Movie = {
    id: number;
    name: string;
    alternativeName: string;
    enName: string;
    type: string;
    poster: {
        url: string;
        previewUrl: string;
    };
    rating: {
        kp: number;
        imdb: number;
        filmCritics: number;
        russianFilmCritics: number;
        await: number;
    };
    year: number;
};

export type SequelOrPrequel = Movie;
export type SimilarMovie = Movie;



export type Person = {
    id: number
    photo: string
    name: string
    enName: string
    description: string
    profession: string
    enProfession: string
}

export type Images = {
    url: string
    previewUrl: string
}

export type Poster = Images
export type Backdrop = Images

export type Rating = {
    kp: number
    imdb: number
    filmCritics: number
    russianFilmCritics: number
    await: number
}

export type Budget = {
    value: number
    currency: string
}

export type Film = {
    id: number
    countries: Country[]
    facts: Fact[]
    genres: Genre[]
    persons: Person[]
    sequelsAndPrequels: SequelOrPrequel[]
    similarMovies: SimilarMovie[]
    description: string
    movieLength: number
    name: string
    poster: Poster
    rating: Rating
    type: string
    year: number
    slogan: string
    top250: number,
    ageRating: number
    backdrop: Backdrop
    isSeries: boolean
    budget: Budget
}

export type AllData = {
    docs: Film[]
    total: number
    limit: number
    page: number
    pages: number
}

//all data type
