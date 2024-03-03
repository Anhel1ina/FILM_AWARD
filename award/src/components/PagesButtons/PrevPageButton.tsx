import styles from './pages_buttons.module.scss'
import { PrevButtonIcon } from './PrevButtonIcon'

type Props = {
    disabled: boolean
    page: number
    onPageClick: (page: number) => void
}

export const PrevPageButton = ({disabled = false, onPageClick, page}:Props) => {
    return (
        <div onClick={() => onPageClick(+page! - 1)} className={`${styles.pages_button} ${disabled ? styles.disabled : null}`}>
            <div>
                <PrevButtonIcon/>
                <span>PREV</span>
            </div>
        </div>
    )
}
