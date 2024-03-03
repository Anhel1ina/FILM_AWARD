import { useDispatch, useSelector } from 'react-redux'
import styles from './favorite_content.module.scss'
import { setFavs } from '../../store/favs/selector'
import { FilmCard } from '../FilmCard/FilmCard'
import image from '../../assets/images/auto.png'
import { NoFavsContent } from '../../assets/images/NoFavsContent'
import { PagesNavigation } from '../PagesNavigation/PagesNavigation'
import { useFilmsState } from '../../store/cards/selector'
import { getCustomFilmCardsPages } from '../../helpers/customPages'
import { getPages } from '../../helpers/getPagesData'
import { AppDispatch } from '../../store/store'
import { useEffect } from 'react'
import { SetPageAction } from '../../store/cards/action'
import { NoFavsContentDark } from '../../assets/images/NoFavsContentDark'
import { useThemeState } from '../../store/theme/selectors'

export const FavoritesContentHolder = () => {
    const favState = useSelector(setFavs)
    const {page} = useFilmsState()
    const {theme} = useThemeState()
    const dispatch = useDispatch<AppDispatch>()

    useEffect(() => {
        dispatch(SetPageAction())
    }, [dispatch])

    const favFilms = Object.values(favState).filter(item => item.isAdded)
    const favFilmsShowed = getCustomFilmCardsPages(favFilms, page!, 16)
    let pages: string[] = getPages(favFilms.length, 16, 16, page!)

    useEffect(() => {
        if (favFilmsShowed.length === 0 && page !== 1) {
            dispatch(SetPageAction(+page! - 1));
        }
    }, [favFilmsShowed, page, dispatch])

    const onFavPage = (page: number) => {
        dispatch(SetPageAction(page))
    }

    return (
        <>
            {
                favFilms.length ? (
                    <>
                        <div className={styles.favorites_content}>
                            {
                                favFilms.map((item, index) => (
                                    <div key={index}>
                                        <FilmCard film={item.film!} film_poster={(item.film!.backdrop?.url || item.film!.poster?.url || image) ?? image} card_size='small' />
                                    </div>
                                ))
                            }
                        </div>    
                        <PagesNavigation onPageClick={onFavPage} page={page!} pages={pages} />
                    </>
                ) : (
                    <div className={`${styles.favorites_no_content}`}>
                        {
                            theme === 'LIGHT' ?
                            <NoFavsContent /> :
                            <NoFavsContentDark/>
                        }
                        <p>ADD FAVORITE FILMS...</p>
                    </div>
                )
            }
        </>
    )
}
