import { useNavigate } from 'react-router-dom'
import { MainTitle } from '../../components/MainTitle/MainTitle'
import { ConfirmationForm } from '../../components/SignForms/ConfirmationForm/ConfirmationForm'
import { useAuthState } from '../../store/auth/selectors'
import { useSignUpState } from '../../store/signUp/selector'
import styles from './sign_page.module.scss'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../../store/store'
import { FormEvent, useEffect } from 'react'
import { setSignInEmailAction, setSignInPasswordAction, signInAction } from '../../store/auth/actions'
import { setCheckPasswordAction, setEmailAction, setPasswordAction, setUsernameAction } from '../../store/signUp/action'
import { SetUsernameProfile } from '../../store/profile/action'

export const SuccessPage = () => {

    const message: string[] = ['Email confiremed.', 'Your registration is now completed']
    const auth = useAuthState()
    const signUp = useSignUpState()
    const navigate = useNavigate()
    const dispatch = useDispatch<AppDispatch>()

    useEffect(() => {
        window.scrollTo(0, 0)
        console.log(auth)
    }, [])


    const subLink = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if ((e.target as HTMLInputElement)?.type !== 'submit') {
            return
        }
        dispatch(signInAction(signUp.email!, signUp.password!))
    
        // dispatch({
        //     type: 'SIGN_UP_FAILED',
        //     payload: {}
        // })
        // dispatch(setEmailAction(''))
        // dispatch(setPasswordAction(''))
        // dispatch(setUsernameAction(''))
        // dispatch(setCheckPasswordAction(''))

        // dispatch(setSignInPasswordAction(''))
        // dispatch(setSignInEmailAction(''))
        navigate('/')
    }

    return (
        <div>
            <div>
                <div className={styles.sign_success_title}>
                    <MainTitle title='Success' />
                </div>
                <div className={styles.success_form}>
                    <ConfirmationForm onClick={subLink} msg={message} />
                </div>
            </div>
        </div>
    )
}


