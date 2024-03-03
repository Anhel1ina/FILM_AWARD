import styles from './scroll.module.scss'
import { Arrow } from '../../assets/images/addIcons/Arrow'

export const ScrollElement = () => {
    return (
        <div className={styles.scroll_elem}>
            <div className={styles.scroll_elem__line_box}>
                <p>scroll</p>
            </div>
            <div className={styles.move_container}>
                <Arrow />
            </div>
        </div>
    )
}
