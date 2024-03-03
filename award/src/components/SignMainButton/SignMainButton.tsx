import styles from './sign_main_button.module.scss'

type Props = {
    title: string
    onClick?: () => void 
}

export const SignMainButton = ({title, onClick}: Props) => {
    return (
        <button onClick={onClick} className={styles.sign_main_button}>
            {title}
        </button>
    )
}
