import styles from './main_title.module.scss';


type Props = {
    title: string
}

export const MainTitle = ({ title }: Props) => {
    return (
        <div className={`${styles.main_title}`}>
            <p>{title.toUpperCase()}</p>
        </div>
    )
}
