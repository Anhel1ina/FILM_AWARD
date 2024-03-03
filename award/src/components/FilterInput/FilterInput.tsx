import { useEffect, useState } from 'react'
import styles from './filter_input.module.scss'

type Props = {
    placeholder: string
    value: string
    onChange: (text: string) => void
}

export const FilterInput = ({placeholder, onChange, value}: Props) => {
    // const [text, setText] = useState<string>(value)

    const getText = (e: React.FormEvent<HTMLInputElement>) => {
        // setText(e.currentTarget.value)
        onChange && onChange(e.currentTarget.value)
    }
    
    return (
        <input value={value} onChange={getText} placeholder={placeholder} className={styles.filter_input} type="text" />
    )
}
