import { FilmCard } from '../FilmCard/FilmCard'
import styles from './home_page_content.module.scss'
import { gridConfig, gridHomeResizeConfig } from '../../helpers/cardsHelpers';
import { useFilmsState } from '../../store/cards/selector';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store/store';
import { useEffect, useState } from 'react';
import { LoadFilmsForPageAsyncAction, LoadFilmsWithFiltersForPage, SetPageAction } from '../../store/cards/action';
import { getPages } from '../../helpers/getPagesData';
import { PagesNavigation } from '../PagesNavigation/PagesNavigation';
import image from '../../assets/images/auto.png'
import element from '../../assets/images/backgrounds/element.svg';
import elementDark from '../../assets/images/backgrounds/element_dark.svg'
import { useThemeState } from '../../store/theme/selectors';
import { useFiltersState } from '../../store/filters/selector';


export const HomePageContentHolder = () => {
    const emptyIndexes = [2, 5, 13]
    const resizeEmptyIndex = [2, 5, 13]
    const [isGrid, setGrid] = useState<boolean>(window.innerWidth < 730)
    const { amountOfFilms, page, total } = useFilmsState()
    const { theme } = useThemeState()
    const { isFiltersSet } = useFiltersState()
    const dispatch = useDispatch<AppDispatch>()

    let pages: string[] = getPages(total!, 16, 16, page!)
    const onPageClick = (page: number) => {
        dispatch(SetPageAction(page!))
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
        if (isFiltersSet) {
            dispatch(LoadFilmsWithFiltersForPage(page!))
        }
        else {
            dispatch(LoadFilmsForPageAsyncAction(page!))
        }
        window.scrollTo(0, 0)
    }, [dispatch, page])

    if (!amountOfFilms) {
        return null
    }

    return (
        <>
            <div className={styles.home_page_content}>
                {
                    !isGrid ? (
                        (
                            gridConfig.map((config, index) => (
                                <div key={index} style={{ gridColumn: config.columns, gridRow: config.rows }}>
                                    {emptyIndexes.includes(index) ? (
                                        <div key={index}>
                                            {
                                                theme === 'LIGHT' ?
                                                    <img src={element} alt="element" /> :
                                                    <img src={elementDark} alt="element" />
                                            }
                                        </div>
                                    ) : (
                                        amountOfFilms
                                            .filter((film) => amountOfFilms.indexOf(film).toString() === index.toString())
                                            .map((filteredFilm, index) => (
                                                <div key={index}>
                                                    <FilmCard film={filteredFilm} film_poster={filteredFilm.backdrop?.url ? filteredFilm.backdrop?.url : filteredFilm.poster?.url ? filteredFilm.poster?.url : image} card_size={config.size} />
                                                </div>
                                            ))
                                    )
                                    }
                                </div>
                            ))
                        )
                    ) : (
                        gridHomeResizeConfig.map((config, index) => (
                            <div key={index} style={{ gridColumn: config.columns, gridRow: config.rows }}>
                                {resizeEmptyIndex.includes(index) ? (
                                    <div key={index}>
                                        {
                                            theme === 'LIGHT' ?
                                                <img src={element} alt="element" /> :
                                                <img src={elementDark} alt="element" />
                                        }
                                    </div>
                                ) : (
                                    amountOfFilms
                                        .filter((film) => amountOfFilms.indexOf(film).toString() === index.toString())
                                        .map((filteredFilm, index) => (
                                            <div key={index}>
                                                <FilmCard film={filteredFilm} film_poster={filteredFilm.backdrop?.url ? filteredFilm.backdrop?.url : filteredFilm.poster?.url ? filteredFilm.poster?.url : image} card_size={config.size} />
                                            </div>
                                        ))
                                )
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