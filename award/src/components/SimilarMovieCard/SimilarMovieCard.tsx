import { Link, useNavigate } from 'react-router-dom'
import { Movie } from '../../helpers/filmsTypes'
import styles from './similar_movie.module.scss'

type Props = {
    film: Movie
}

export const SimilarMovieCard = ({ film }: Props) => {
    const navigate = useNavigate()

    return (
        <div onDoubleClick={() => navigate(`/openfilmcard/${film.id}`)} className={styles.similar_movie}>
            <img src={film.poster.url} alt="film-poster" />
        </div>
    )
}
