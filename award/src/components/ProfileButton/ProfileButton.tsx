import styles from './profile_button.module.scss'

type Props = {
    buttonName: string
    onClick: () => void
    isLogout?: boolean
    isCancel?: boolean
    isSave?: boolean
}

export const ProfileButton = ({buttonName, onClick, isLogout, isSave, isCancel}: Props) => {
    return (
        <button onClick={onClick} className={`${styles.profile_button} ${isLogout ? styles.logout : isCancel ? styles.cancel : isSave ? styles.save : null }`}>
            {buttonName}
        </button>
    )
}
