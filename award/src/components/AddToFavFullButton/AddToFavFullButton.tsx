import styles from './add_to_fav_full.module.scss'
import { Favorites } from '../../assets/images/menuIcons/Favorites'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, AppState } from '../../store/store'
import { AddToFavsAction, LoadFilmByIdToAddToFavs, UndoAddToFavs } from '../../store/favs/action'
import { useAuthState } from '../../store/auth/selectors'

type Props = {
    filmId: number
}

export const AddToFavFullButton = ({filmId}: Props) => {
    const favState = useSelector((state: AppState) => state.favs[filmId])
    const signInData = useAuthState()

    const dispatch = useDispatch<AppDispatch>()

    const {isAdded} = favState || {}
    const addToFav = async () => {
        await dispatch(AddToFavsAction(filmId.toString()))
        await dispatch(LoadFilmByIdToAddToFavs(filmId.toString()))
    }

    const undo = () => dispatch(UndoAddToFavs(filmId.toString()))
    return (
        <button disabled={signInData.isLoged ? false : true} onClick={isAdded ? undo : addToFav} className={`${styles.ful_fav_button} ${isAdded ? styles.added_to_favs : null}`}>
            <Favorites/>
        </button>
    )
}
