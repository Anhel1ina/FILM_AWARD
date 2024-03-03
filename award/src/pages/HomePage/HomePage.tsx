import { HomePageContentHolder } from '../../components/HomePageContentHolder/HomePageContentHolder'
import { MainTitle } from '../../components/MainTitle/MainTitle'
import styles from './homepage.module.scss'

export const HomePage = () => {
    return (
        <>
            <div className={styles.homepage}>
                <div className={styles.homepage__title}>
                    <MainTitle title='All films'/>
                </div>
                <HomePageContentHolder/>
            </div>
        </>
    )
}
