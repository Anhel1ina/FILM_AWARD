import styles from './sort_button.module.scss'

type Props = {
    name: string
    isLeftSided: boolean
}

export const SortButton = ({name, isLeftSided}: Props) => {
    return (
        <button className={`${styles.sort_button} ${isLeftSided ? styles.left_side : null}`}>
            {name}
        </button>
    )
}
