import { useDispatch } from 'react-redux'
import { MainTitle } from '../../components/MainTitle/MainTitle'
import { ResetPasswordForm } from '../../components/SignForms/ResetPasswordForm/ResetPasswordForm'
import styles from './sign_page.module.scss'
import { AppDispatch } from '../../store/store'
import { useAuthState } from '../../store/auth/selectors'
import { useEffect } from 'react'
import { getAccessAction } from '../../store/auth/actions'
import { GoBackButton } from '../../components/GoBackButton/GoBackButton'
import { useNavigate } from 'react-router-dom'

export const ResetPasswordPage = () => {

    const dispatch = useDispatch<AppDispatch>()
    const navigate = useNavigate()
    const auth = useAuthState()
    
    useEffect(() => {
        window.scrollTo(0, 0)
        dispatch(getAccessAction())
    }, [])

    return (
        <div>
            <div>
                <div className={styles.reset_passwd}>
                    <MainTitle title='reset password' />
                </div>
                <div className={styles.reset_passwd_form}>
                    <ResetPasswordForm/>
                </div>
            </div>
            <GoBackButton link={() => navigate('/auth')} sign_pos={true}/>
        </div>
    )
}
