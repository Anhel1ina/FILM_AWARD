import styles from './sub_title.module.scss'

type Props = {
    name: string
    isMain: boolean
}

export const SubTitle = ({name, isMain}: Props) => {
    return (
        <p className={`${styles.sub_title} ${isMain ? styles.main : null}`}>{name}</p>
    )
}
