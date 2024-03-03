import { PrevPageButton } from '../PagesButtons/PrevPageButton'
import { NextPageButton } from '../PagesButtons/NextPageButton'
import styles from './pages_navigation.module.scss'
import { PagesNumbersNavigation } from '../PagesNumbersNavigation/PagesNumbersNavigation'
import { useFilmsState } from '../../store/cards/selector'

type Props = {
    pages: string[]
    page: number
    onPageClick: (page: number) => void
}

export const PagesNavigation = ({page, pages, onPageClick}: Props) => {
    return (
        <div className={styles.pages_navigation}>
            <PrevPageButton page={page!} onPageClick={onPageClick} disabled={+page! === 1}/>
            <PagesNumbersNavigation page={page!} onPageClick={onPageClick} pages={pages}/>
            <NextPageButton page={page!} onPageClick={onPageClick} disabled={+page! === +pages[pages.length - 1]}/>
        </div>
    )
}
