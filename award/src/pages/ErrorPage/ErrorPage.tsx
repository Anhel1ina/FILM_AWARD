import { Footer } from '../../components/Footer/Footer'
import { GoBackButton } from '../../components/GoBackButton/GoBackButton'
import styles from './error_page.module.scss'
import error from '../../assets/images/error_img.png'

export const ErrorPage = () => {
    return (
        <div className={styles.error_page}>
            <GoBackButton up={true}/>
            <div className={styles.error_page__img}>
                <img src={error} alt="error_image" />
            </div>
            <Footer/>
        </div>
    )
}
