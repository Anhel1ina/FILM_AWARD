import { useDispatch } from 'react-redux'
import { MainTitle } from '../../components/MainTitle/MainTitle'
import { NewPasswordForm } from '../../components/SignForms/NewPasswordForm/NewPasswordForm'
import styles from './sign_page.module.scss'
import { useResetPasswordState } from '../../store/reset_passwd/selector'
import { setResetAlert } from '../../store/reset_passwd/action'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { GoBackButton } from '../../components/GoBackButton/GoBackButton'
import { Alert } from '../../components/Alert/Alert'

export const NewPasswordPage = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const resetData = useResetPasswordState()
    const closePage = () => dispatch(setResetAlert(false))
    const [hide, setHide] = useState<boolean>(false)

    useEffect(() => window.scrollTo(0, 0))
    useEffect(() => {
        if(resetData.isResetAlert){
            setTimeout(() => {
                dispatch(setResetAlert(false))
            }, 4000)
            setTimeout(() => {
                setHide(true)
            }, 3500)
        }
        else{
            setHide(false)
        }
    }, [resetData.isResetAlert])
    
    return (
        <div>
            <div>
                <div className={styles.new_passwd_title}>
                    <MainTitle title='new password' />
                </div>
                <div className={styles.new_passwd_form}>
                    <NewPasswordForm/>
                    {
                        resetData.isResetAlert ? (
                            <Alert isError={true} isHide={hide} closeAlert={closePage} errorText={`[${JSON.stringify(resetData.errors).slice(11, -2)}]`}/>
                        ) : null
                    }
                </div>
            </div>
            <GoBackButton link={() => navigate('/auth')} sign_pos={true}/>
        </div>
    )
}
