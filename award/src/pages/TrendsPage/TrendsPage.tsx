import { MainTitle } from '../../components/MainTitle/MainTitle'
import { TrendsContentHolder } from '../../components/TrendsContentHolder/TrendsContentHolder'
import styles from './trends_page.module.scss'

export const TrendsPage = () => {
    return (
        <div className={styles.trends}>
            <div className={styles.trends__title}>
                <MainTitle title='Trends'/>
            </div>
            <TrendsContentHolder/>
        </div>
    )
}
