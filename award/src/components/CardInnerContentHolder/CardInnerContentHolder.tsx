import { useParams } from 'react-router-dom'
import { AddInfoCardHolder } from '../AddInfoCardHolder/AddInfoCardHolder'
import { CastInfo } from '../CastInfo/CastInfo'
import { RatingBlock } from '../RatingBlock/RatingBlock'
import { TimeBlock } from '../TimeBlock/TimeBlock'
import styles from './card_inner_content.module.scss'
import { Hexagon } from '../Hexagon/Hexagon'
import { useEffect, useState } from 'react'
import { SimilarMovieSlider } from '../SimilarMovieSlider/SimilarMovieSlider'
import { Film } from '../../helpers/filmsTypes'
import { options } from '../../helpers/getPagesData'
import { AddToFavFullButton } from '../AddToFavFullButton/AddToFavFullButton'
import { FactsHolder } from '../FactsHolder/FactsHolder'
import { ScrollElement } from '../ScrollElement/ScrollElement'

export const CardInnerContentHolder = () => {
    const { id } = useParams()
    const [film, setFilm] = useState<Film>()

    useEffect(() => {
        window.scrollTo(0, 0)
        const url = `https://api.kinopoisk.dev/v1.4/movie/${id}`
        fetch(url, options)
            .then(res => res.json())
            .then(res => setFilm(res))
    }, [id])

    useEffect(() => {
        console.log(film)
    }, [film])


    if (!film) {
        return null
    }

    return (
        <>
            <div className={styles.card_inner_content_holder}>
                <div className={styles.card_inner_content_holder__main_block}>
                    <div className={styles.main_img}>
                        <img src={film.poster.url} alt="film-poster" />
                    </div>
                    <div className={styles.title_text_block}>
                        <div className={styles.genres}>
                            {
                                film!.genres.map((genre, index) => (
                                    <div key={index}>
                                        <span>{genre.name}</span>
                                    </div>
                                ))
                            }
                        </div>
                        <div className={styles.title_rating}>
                            <RatingBlock rating={film.rating.imdb} />
                            {film.isSeries ? null : (
                                <TimeBlock time={film.movieLength} />
                            )}
                            <div>{film.year}</div>
                        </div>
                        <div className={styles.film_title}>
                            <span>{`[${film.name}]`}</span>
                        </div>
                        <div className={styles.film_description}>
                            <p>{film!.description}</p>
                        </div>
                        <div className={styles.film_add_info}>
                            <div>
                                <AddInfoCardHolder film={film} />
                                <AddToFavFullButton filmId={film.id} />
                            </div>
                            <CastInfo persons={film.persons} />
                        </div>
                    </div>
                </div>
                {/* additional inf */}
                <div>
                    {
                        film.similarMovies.length ?
                            (
                                <div className={styles.similar_movies}>
                                    {/* <Hexagon pos={{ left: hexagonPosition.x, top: hexagonPosition.y }}/> */}
                                    <div className={styles.similar_movies__title}>
                                        SIMILAR MOVIES
                                    </div>
                                    <div id='block' className={styles.similar_movies__cards}>
                                        <SimilarMovieSlider film={film} />
                                    </div>
                                </div>
                            ) : null
                    }
                    {
                        film.facts.length ? (
                            <div className={styles.facts}>
                                <div className={styles.facts__title}>
                                    FACTS
                                </div>
                                <div id='facts' className={styles.facts__holder}>
                                    <FactsHolder facts={film.facts}/>
                                </div>
                            </div>
                        ) : null
                    }
                </div>
            </div>
            {
                film.similarMovies.length ?
                <ScrollElement/> : 
                null
            }
        </>
    )
}
