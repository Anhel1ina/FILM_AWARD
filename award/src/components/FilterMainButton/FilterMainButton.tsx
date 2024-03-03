import { FormEvent } from 'react'
import styles from './filter_main.module.scss'

type Props = {
    name: string
    onChange: () => void
    isMain: boolean
}

export const FilterMainButton = ({name, onChange, isMain}: Props) => {

    const onClickEvent = (e: FormEvent<HTMLButtonElement>) => {
        e.preventDefault()
        onChange && onChange()
    }
    return (
        <button onClick={onClickEvent} className={`${styles.filter_main_button} ${isMain ? styles.show_res : null}`}>
            {name}
        </button>
    )
}
