import { Film } from '../../helpers/filmsTypes'
import styles from './add_info.module.scss'

type Props = {
    film: Film
}

export const AddInfoCardHolder = ({ film }: Props) => {
    return (
        <div className={styles.add_info}>
            {film.slogan ?
                <p>
                    <span>Cлоган:</span>
                    {` ${film.slogan}`}
                </p>
                : null}
            {film.countries ? (
                <p>
                    <span>Страна:</span>
                    {` ${film.countries.map(country => country.name).join(', ')}`}
                </p>
            ) : null}
            {film.ageRating ?
                <p>
                    <span>Возрастное ограничение:</span>
                    {` ${film.ageRating}+`}
                </p>
                : null}
            {film.budget.value && film.budget.currency ? (
                <p>
                    <span>Бюджет:</span>
                    {` ${film.budget.value} ${film.budget.currency}`}
                </p>
            ) : null}
        </div>
    )
}
