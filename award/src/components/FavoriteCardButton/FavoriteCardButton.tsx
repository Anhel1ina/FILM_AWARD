import { useDispatch } from 'react-redux'
import { Favorites } from '../../assets/images/menuIcons/Favorites'
import styles from './favorite_card_button.module.scss'
import { UndoAddToFavs } from '../../store/favs/action'
import { FormEvent, MouseEventHandler } from 'react'

type Props = {
    filmId: string
}

export const FavoriteCardButton = ({filmId}: Props) => {
    const dispatch = useDispatch()
    const undoFavs = (e: FormEvent<HTMLButtonElement>) => {
        e.stopPropagation()
        dispatch(UndoAddToFavs(filmId.toString()))
    }
    return (
        <button onClick={undoFavs} className={styles.favorites_button}>
            <Favorites/>
        </button>
    )
}
