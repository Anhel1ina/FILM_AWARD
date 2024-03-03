import { Filter } from '../../assets/images/menuIcons/Filter'
import styles from './filter_button.module.scss'

export const HeaderFilterButton = () => {
    return (
        <div className={styles.filter_button}>
            <Filter/>
        </div>
    )
}
