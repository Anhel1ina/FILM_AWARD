import { useState } from 'react'
import styles from './film_card.module.scss'
import { RatingBlock } from '../RatingBlock/RatingBlock'
import { FavoriteCardButton } from '../FavoriteCardButton/FavoriteCardButton'
import { useNavigate } from 'react-router-dom'
import { Film, Movie } from '../../helpers/filmsTypes'
import { useSelector } from 'react-redux'
import { AppState } from '../../store/store'
import { Trends } from '../../assets/images/menuIcons/Trends'

type Props = {
    film: Film
    card_size: string
    film_poster: string

    isTrend?: boolean
}

export const FilmCard = ({film, card_size, film_poster, isTrend}: Props) => {
    const [enter, setEnter] = useState<boolean | null>(null)
    const favState = useSelector((state: AppState) => state.favs[film.id])
    const {isAdded} = favState || {}

    const handleMouseEnter = () => setEnter(true)
    const handleMouseLeave = () => setEnter(false)
    const navigate = useNavigate()
    
    const openCard = (id: number) => {
        navigate(`openfilmcard/${id}`)
    }

    return (
            <div onClick={() => openCard(film.id)} className={`${styles.film_card} ${styles[card_size]} ${enter ? styles.enter : styles.hide}`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}>
                <div className={styles.film_card__title}>
                    <span>{film.name}</span>
                </div>
                
                <img src={film_poster} alt="film-card-image" />

                <div className={styles.card_buttons}>
                    <div className={styles.trend}>
                        <RatingBlock rating={+film.rating.kp.toFixed(1)} />
                        {
                            isTrend ? <Trends/> : null
                        }
                    </div>
                    {
                        isAdded ? <FavoriteCardButton filmId={film.id.toString()} /> : null
                    }
                </div>
            </div>
    )
}
