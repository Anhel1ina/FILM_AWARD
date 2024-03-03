import styles from './footer.module.scss'
import logo from '../../assets/images/page-logo-icon.svg'

export const Footer = () => {
    return (
        <div className={styles.footer}>
            <p>©2024 Award</p>
            <img src={logo} alt="award-mini-logo" />
            <p>All rights reserved</p>
        </div>
    )
}
