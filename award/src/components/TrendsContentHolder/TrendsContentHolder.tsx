import { useDispatch } from 'react-redux'
import { useTrendsState } from '../../store/trends/selector'
import styles from './trends_content_holder.module.scss'
import { AppDispatch } from '../../store/store'
import { getPages } from '../../helpers/getPagesData'
import { LoadFilmsForTrendsPageAsyncAction, SetTrendsPageAction } from '../../store/trends/action'
import { useEffect, useState } from 'react'
import { gridHomeResizeConfig, trendsGridConfig } from '../../helpers/cardsHelpers'
import { FilmCard } from '../FilmCard/FilmCard'
import image from '../../assets/images/auto.png'
import { PagesNavigation } from '../PagesNavigation/PagesNavigation'

export const TrendsContentHolder = () => {
    const { amountOfFilms, total, page } = useTrendsState()
    const dispatch = useDispatch<AppDispatch>()
    const [isGrid, setGrid] = useState<boolean>(window.innerWidth < 730)

    let pages: string[] = getPages(total!, 15, 15, page!)
    const onPageClick = (page: number) => {
        dispatch(SetTrendsPageAction(page!))
        window.scrollTo(0, 0)
    }

    useEffect(() => {
        const resizeGrid = () => {
            setGrid(window.innerWidth < 730)
        }
        window.addEventListener('resize', resizeGrid)
        return () => {
            window.removeEventListener('resize', resizeGrid)
        }
    }, [window.innerWidth])

    useEffect(() => {
        dispatch(LoadFilmsForTrendsPageAsyncAction(page!))
        window.scrollTo(0, 0)
    }, [dispatch, page])

    if (!amountOfFilms) {
        return null
    }

    return (
        <>
            <div className={styles.trends_content_holder}>
                {
                    !isGrid ? (
                        trendsGridConfig.map((config, index) => (
                            <div key={index} style={{ gridColumn: config.columns, gridRow: config.rows }}>
                                {
                                    amountOfFilms
                                        .filter((film) => amountOfFilms.indexOf(film).toString() === index.toString())
                                        .map((filteredFilm, index) => (
                                            <div key={index}>
                                                <FilmCard isTrend={true} film={filteredFilm} film_poster={filteredFilm.backdrop?.url ? filteredFilm.backdrop?.url : filteredFilm.poster?.url ? filteredFilm.poster?.url : image} card_size={config.size} />
                                            </div>
                                        ))
                                }
                            </div>
                        ))
                    ) : (
                        gridHomeResizeConfig.map((config, index) => (
                            <div key={index} style={{ gridColumn: config.columns, gridRow: config.rows }}>
                                {
                                    amountOfFilms
                                        .filter((film) => amountOfFilms.indexOf(film).toString() === index.toString())
                                        .map((filteredFilm, index) => (
                                            <div key={index}>
                                                <FilmCard isTrend={true} film={filteredFilm} film_poster={filteredFilm.backdrop?.url ? filteredFilm.backdrop?.url : filteredFilm.poster?.url ? filteredFilm.poster?.url : image} card_size={config.size} />
                                            </div>
                                        ))
                                }
                            </div>
                        ))
                    )
                }
            </div>
            <PagesNavigation page={page!} onPageClick={onPageClick} pages={pages} />
        </>
    )
}
