import styles from './filter_modal.module.scss'
import { SubTitle } from '../SubTitle/SubTitle'
import { Cross } from '../../assets/images/menuIcons/Cross'
import { GenresDropdown } from '../GenresDropdown/GenresDropdown'
import { FilterInput } from '../FilterInput/FilterInput'
import { CountriesDropdown } from '../CountriesDropdown/CountriesDropdown'
import { FilterMainButton } from '../FilterMainButton/FilterMainButton'
import { useFiltersState } from '../../store/filters/selector'
import { useDispatch } from 'react-redux'
import { ClearFilters, ClearSortBy, SetFromRating, SetFromYear, SetSortByRating, SetSortByYear, SetToRating, SetToYear } from '../../store/filters/action'
import { AppDispatch } from '../../store/store'
import { useNavigate } from 'react-router-dom'
import { LoadFilmsWithFiltersForPage } from '../../store/cards/action'

type Props = {
    closeFilter: () => void
}

export const FilterModal = ({ closeFilter }: Props) => {

    const { sortby, years, rating, isFiltersSet} = useFiltersState()
    const dispatch = useDispatch<AppDispatch>()
    const navigate = useNavigate()
    const setSortRating = () => dispatch(SetSortByRating())
    const setSortYear = () => dispatch(SetSortByYear())


    const searchWithFilters = () => {
        dispatch(LoadFilmsWithFiltersForPage())
        closeFilter()
        navigate('/')
    }

    const clearSortBy = () => dispatch(ClearSortBy())
    const clear = () => dispatch(ClearFilters())


    return (
        <div className={styles.filter_modal_wrapper}>
            <div className={styles.filter_modal}>
                <div className={styles.filter_modal__bar}>
                    <SubTitle name='Filters' isMain={true} />
                    <div onClick={closeFilter}>
                        <Cross />
                    </div>
                </div>
                <div className={styles.sort}>
                    <SubTitle name='Sort by' isMain={false} />
                    <div className={styles.sort_buttons}>
                        <div onClick={sortby === 'rating.kp' ? clearSortBy : setSortRating} className={`${sortby === 'rating.kp' ? styles.selected_sort : null}`}>
                            Rating
                        </div>
                        <div onClick={sortby === 'year' ? clearSortBy : setSortYear} className={`${sortby === 'year' ? styles.selected_sort : null}`}>
                            Year
                        </div>
                    </div>
                </div>
                <div className={styles.genres}>
                    <SubTitle name='Add filter' isMain={false} />
                    <div className={styles.genres__dropdown}>
                        <GenresDropdown />
                    </div>
                </div>
                <div className={styles.years}>
                    <SubTitle name='Years' isMain={false} />
                    <div className={styles.years__input}>
                        <FilterInput
                            placeholder='From'
                            value={years?.from || ''}
                            onChange={(text: string) => {
                                dispatch(SetFromYear(text));
                            }}
                        />
                        <FilterInput
                            placeholder='To'
                            value={years?.to || ''}
                            onChange={(text: string) => {
                                dispatch(SetToYear(text));
                            }}
                        />
                    </div>
                </div>
                <div className={styles.rating}>
                    <SubTitle name='Rating' isMain={false} />
                    <div className={styles.rating__input}>
                        <FilterInput
                            placeholder='From'
                            value={rating?.from || ''}
                            onChange={(text: string) => {
                                dispatch(SetFromRating(text));
                            }}
                        />
                        <FilterInput
                            placeholder='To'
                            value={rating?.to || ''}
                            onChange={(text: string) => {
                                dispatch(SetToRating(text));
                            }}
                        />
                    </div>
                </div>
                <div className={styles.countries}>
                    <SubTitle name='Country' isMain={false} />
                    <CountriesDropdown />
                </div>
                <div className={styles.main_buttons}>
                    <FilterMainButton isMain={false} onChange={clear} name='Clear filters' />
                    <FilterMainButton isMain={true} onChange={searchWithFilters} name='Show results' />
                </div>
            </div>
        </div>
    )
}
