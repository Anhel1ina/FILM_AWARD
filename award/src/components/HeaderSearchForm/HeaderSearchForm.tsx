import styles from './header_search.module.scss'
import search from '../../assets/images/search.svg'
import cross from '../../assets/images/cross.svg'
import { useState } from 'react'
import { useSearchState } from '../../store/search/selector'
import { useDispatch } from 'react-redux'
import { ClearTextAction, SearchTextAction, SetSearchTextAction } from '../../store/search/action'
import { useNavigate } from 'react-router-dom'
import { AppDispatch } from '../../store/store'
import { HeaderFilterButton } from '../HeaderFilterButton/HeaderFilterButton'

export const HeaderSearchForm = () => {
    const [showSearch, setShowSearch] = useState<boolean>(false)
    const [hide, setHide] = useState<boolean>(false)
    const {forSearch} = useSearchState()
    const dispatch = useDispatch<AppDispatch>()
    const navigate = useNavigate()

    const clear = () => dispatch(ClearTextAction(''))
    const inputChange = (e: React.FormEvent<HTMLInputElement>) => {
        dispatch(SearchTextAction(e.currentTarget.value))
    }

    const closeSearch = () => {
        setHide(true)
        setTimeout(() => {
            setShowSearch(false)
        }, 1000);
    }

    const openSearch = () => {
        setShowSearch(true)
        setHide(false)
    }

    const searchRes = () => {
        dispatch(SetSearchTextAction())
        navigate('search')
    }

    return (
        <form className={`${styles.search_form} ${showSearch ? styles.open_form : styles.search_form_hidden} ${hide ? styles.hide_form : null}`}>
            <img onClick={showSearch && forSearch ? searchRes : openSearch} className={`${styles.search_button}`} src={search} alt="search-icon" />
            { showSearch ? (
                <>
                    <input autoComplete='off' onInput={inputChange} value={forSearch || ''} type="text" />
                    <img src={cross} onClick={showSearch && forSearch ? clear : closeSearch} className={`${styles.cross_button} ${hide ? styles.hide_cross_button : null}`} alt="cross-icon"/>
                    
                </>
            ) : ( null )}
        </form>
    )
}
