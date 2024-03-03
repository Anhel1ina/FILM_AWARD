import { useEffect, useState } from 'react'
import { useAuthState } from '../../store/auth/selectors'
import styles from './authorized_icon.module.scss'

export const AuthorizedIcon = () => {
    const signInData = useAuthState()
    const [isLogoHide, setLogoHide] = useState<boolean>(window.innerWidth < 980)

    useEffect(() => {
        const hideLogo = () => {
            setLogoHide(window.innerWidth < 830)
        }
        window.addEventListener('resize', hideLogo)
        return () => {
            window.removeEventListener('resize', hideLogo)
        }
    }, [window.innerWidth])
    
    return (
        <div className={styles.auth_icon}>
            <div>{signInData.userName![0].toUpperCase()}</div>
            {isLogoHide ? null : <p>{signInData.userName!.toUpperCase()}</p>}
        </div>
    )
}
