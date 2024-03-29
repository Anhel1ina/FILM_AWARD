import { useState } from 'react'
import { SignUpType } from '../../store/signUp/types'
import { AuthState } from '../../store/auth/types'
import styles from './input.module.scss'
import openedEye from '../../assets/images/inputIcons/open_eye.svg'
import closedEye from '../../assets/images/inputIcons/closed_eye.svg'
import { ActivationStateType } from '../../store/activation/types'
import { ResetPasswordType } from '../../store/reset_passwd/types'

type Props = {
    label?: string
    placeholder?: string
    type?: string

    index?: number
    reference?: React.RefObject<HTMLInputElement>
    isTextArea?: boolean

    value?: string
    errorType?: string
    errorsData?: SignUpType | AuthState | ActivationStateType 
    | ResetPasswordType
    onChange?: (text: string) => void
}

export const Input = (props: Props) => {
    const { label = 'Title', placeholder = 'Enter your text', type, index,
        reference, isTextArea = false, value, onChange, errorType = 'username',
        errorsData } = props

    const [text, setText] = useState(value)
    const getText = (e: React.FormEvent<HTMLInputElement> | React.FormEvent<HTMLTextAreaElement>) => {
        setText(e.currentTarget.value)
        onChange && onChange(e.currentTarget.value)
    }

    const [eyeState, setEyeState] = useState<boolean>(false)
    const setOpen = () => setEyeState(true)
    const setClosed = () => setEyeState(false)

    return (
        <>
            <div className={styles.box}>
                <p>{label}</p>
                {
                    isTextArea ? (
                        <textarea placeholder={placeholder} onInput={getText} value={text}
                            className={`${styles.textarea} ${errorsData?.errors && (errorsData?.errors[errorType as keyof typeof errorsData.errors]) ? styles.error : null}`}></textarea>
                    ) : (
                        <input onChange={getText} ref={index === 0 ? reference : null} value={text} placeholder={placeholder}
                            className={`${errorsData?.errors && (errorsData?.errors[errorType as keyof typeof errorsData.errors]) ? styles.error : null} ${styles.input}`} type={type === 'password' && eyeState ? 'text' : type} />
                    )
                }
                {
                    type === 'password' && label != 'Confirm password' ? (
                        // <button onClick={eyeState ? setClosed : setOpen} className={styles.eye_button}>
                        //     <img src={eyeState ? openedEye : closedEye} alt="closed eye" />
                        // </button>
                        <input onClick={eyeState && text ? setClosed : setOpen} className={styles.eye_button} type='image' src={eyeState ? openedEye : closedEye} />
                    ) : (null)
                }
            </div>
        </>
    )
}
