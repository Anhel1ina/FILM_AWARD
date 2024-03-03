import { useTabsState } from '../../store/tabs/selector'
import { HomePage } from '../../pages/HomePage/HomePage'
import { HomePageContentHolder } from '../HomePageContentHolder/HomePageContentHolder'
import styles from './page_content.module.scss'
import { OpenFilmCardPage } from '../../pages/OpenFilmCardPage/OpenFilmCardPage'
import { FavoritesPage } from '../../pages/FavoritesPage/FavoritesPage'
import { TrendsPage } from '../../pages/TrendsPage/TrendsPage'

export const PageContent = () => {
    const {activeIndex} = useTabsState()
    return (
        <div className={styles.page_content}>
            {
                activeIndex === 0 ? (
                    <HomePage/>
                ) : activeIndex === 1 ? (
                    <FavoritesPage/>
                ) : <TrendsPage/>
            }
        </div>
    )
}
