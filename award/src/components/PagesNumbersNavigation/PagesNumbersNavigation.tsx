import styles from './pages_numbers.module.scss'

type Props = {
    pages: string[]
    page: number
    onPageClick: (page: number) => void
}

export const PagesNumbersNavigation = ({pages, page, onPageClick}: Props) => {
    return (
        <div className={styles.pages_numbers}>
            {
                pages.map(item => (
                    <span key={item} className={page! == +item ? styles.active : ''} onClick={() => onPageClick(+item)}>{item}</span>
                ))
            }
        </div>
    )
}
