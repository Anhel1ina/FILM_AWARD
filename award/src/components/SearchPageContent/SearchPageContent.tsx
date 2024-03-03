import { useDispatch } from 'react-redux'
import styles from './search_page_content.module.scss'
import { AppDispatch } from '../../store/store'
import { useEffect } from 'react'
import { getPages } from '../../helpers/getPagesData'

import { FilmCard } from '../FilmCard/FilmCard'
import image from '../../assets/images/auto.png'
import { PagesNavigation } from '../PagesNavigation/PagesNavigation'
import { useSearchState } from '../../store/search/selector'
import { useSearchResState } from '../../store/showSearchRes/selector'
import { SearchFilmsAsyncAction, SearchFilmsWithFiltersAsyncAction, SetSearchPageAction } from '../../store/showSearchRes/action'
import { useFiltersState } from '../../store/filters/selector'

export const SearchPageContent = () => {
    const {amountOfFilms, searchPage, total} = useSearchResState()
    const {searchText} = useSearchState()
    const {urlForSearch} = useFiltersState()
    const dispatch = useDispatch<AppDispatch>()

    let pages: string[] = getPages(total!, 16, 16, searchPage!)
    
    const onPageClick = (page: number) =>{
        dispatch(SetSearchPageAction(page!))
        window.scrollTo(0, 0)
    }

    useEffect(() => {
        if(urlForSearch){
            dispatch(SearchFilmsWithFiltersAsyncAction(searchPage!, searchText!))
        }
        else{
            dispatch(SearchFilmsAsyncAction(searchPage!, searchText!))
        }
        window.scrollTo(0, 0)
    }, [dispatch, searchPage, searchText])

    return (
        <>
            <div className={styles.search_page_content}>
                {
                    amountOfFilms && amountOfFilms.map((film, index) => (
                        <div key={index}> 
                            <FilmCard film={film} film_poster={(film.backdrop?.url || film.poster?.url || image) ?? image} card_size='small_card' />
                        </div>
                    ))
                }
            </div>
            <PagesNavigation page={searchPage!} onPageClick={onPageClick} pages={pages}/>
        </>
    )
}
