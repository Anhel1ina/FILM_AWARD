import styles from './pages_buttons.module.scss'
import { NextButtonIcon } from './NextButtonIcon'

type Props = {
    disabled?: boolean
    onPageClick: (page: number) => void
    page: number
}

export const NextPageButton = ({disabled = false, onPageClick, page}: Props) => {
    return (
        <div onClick={() => onPageClick(+page + 1)} className={`${styles.pages_button} ${disabled ? styles.disabled : null}`}>
            <div>
                <span>NEXT</span>
                <NextButtonIcon/>
            </div>
        </div>
    )
}
