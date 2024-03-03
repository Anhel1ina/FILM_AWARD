import confStyles from './confirmation_form.module.scss'
import styles from '../sign_forms.module.scss'
import { SignMainButton } from '../../SignMainButton/SignMainButton'
import { FormEvent } from 'react'

type MsgType = string
type Props = {
    msg: MsgType[]
    disabled?: boolean
    buttonName?: string

    onClick: (e: FormEvent<HTMLFormElement>) => void
}


export const ConfirmationForm = ({ msg, disabled, buttonName = 'go to home', onClick }: Props) => {
    return (
        <form className={`${styles.sign_form} ${confStyles.confirm_form}`} onClick={onClick}>
            {msg.map((message, i) => (
                message.includes('@') ? (
                    null
                ) : (
                    <p key={i}>
                        {msg[i + 1] && msg[i + 1].includes('@') ? (
                            <>
                                {message}
                                <span key={i + 1}>{msg[i + 1]}</span>
                            </>
                        ) : (
                            message
                        )}
                    </p>
                )

            ))}
            <SignMainButton title={buttonName}/>
        </form>
    )
}
