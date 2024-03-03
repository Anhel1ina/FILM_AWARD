import { useState } from 'react'
import styles from './settings_input.module.scss'

type Props = {
    label?: string
    placeholder?: string
    type?: string

    index?: number
    isTextArea?: boolean

    value?: string
}

export const SettingsInput = (props: Props) => {
    const { label = 'Title', placeholder = 'Enter your text', type, index, value } = props

    const [text, setText] = useState(value)
    const getText = (e: React.FormEvent<HTMLInputElement> | React.FormEvent<HTMLTextAreaElement>) => {
        setText(e.currentTarget.value)
    }

    return (
        <>
            <div className={styles.box}>
                <p>{label}</p>
                <input readOnly onChange={getText}  value={text} placeholder={placeholder}
                    className={`${styles.input}`} type={type} />
            </div>
        </>
    )
}