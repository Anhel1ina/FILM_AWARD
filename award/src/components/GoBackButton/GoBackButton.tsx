import { useNavigate } from 'react-router-dom'
import styles from './go_back_button.module.scss'
import { useEffect, useState } from 'react'

type Props = {
    link?: () => void
    up?: boolean
    sign_pos?: boolean
}

export const GoBackButton = ({ link, up, sign_pos }: Props) => {
    const navigate = useNavigate()
    const [showGoBackButton, setShowGoBackButton] = useState<boolean>(false)

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setShowGoBackButton(true)
        }, 3000)

        return () => clearTimeout(timeoutId)
    }, [])

    return (
        showGoBackButton ? <div onClick={link ? link : () => navigate('/')} className={`${styles.go_back_button_wrapper} ${up ? styles.up_position : null} ${sign_pos ? styles.sign_position : null}`}>
            <div className={styles.go_back_button}>
                <span>{'<- GO BACK - '}</span>
            </div>
        </div> : <></>
    )
}
