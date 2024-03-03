import { FavoritesContentHolder } from '../../components/FavoritesContentHolder/FavoritesContentHolder'
import { MainTitle } from '../../components/MainTitle/MainTitle'
import styles from './favorites_page.module.scss'

export const FavoritesPage = () => {
    return (
        <div className={styles.favorites_page}>
            <div className={styles.favorites_page__title}>
                <MainTitle title='Favorites' />
            </div>
            <FavoritesContentHolder />
        </div>
    )
}
