import { GoBackButton } from '../../components/GoBackButton/GoBackButton'
import { MainTitle } from '../../components/MainTitle/MainTitle'
import { SearchPageContent } from '../../components/SearchPageContent/SearchPageContent'
import { useSearchState } from '../../store/search/selector'
import styles from './search_page.module.scss'

export const SearchPage = () => {
    const { searchText } = useSearchState()

    return (
        <div>
            <div className={styles.search_page_title}>
                <MainTitle title='SEARCH RESULTS' />
            </div>
            <div className={styles.search_page_result_wrapper}>
                <span>{`-' ${searchText} '-`}</span>
            </div>
            <SearchPageContent />
            <GoBackButton/>
        </div>
    )
}
