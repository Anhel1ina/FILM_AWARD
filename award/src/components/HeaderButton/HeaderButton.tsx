import { Link } from 'react-router-dom'
import styles from './header_button.module.scss'

type Props = {
    buttonTitle: string
}

export const HeaderButton = ({buttonTitle}: Props) => {
    return (
        <Link to={'auth'}>
            <input className={styles.header_button} type="button" value={buttonTitle.toUpperCase()} />
        </Link>
    )
}
