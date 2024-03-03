import { FormEvent, useEffect } from 'react'
import { MainTitle } from '../../components/MainTitle/MainTitle'
import { ConfirmationForm } from '../../components/SignForms/ConfirmationForm/ConfirmationForm'
import { useSignUpState } from '../../store/signUp/selector'
import styles from './sign_page.module.scss'
import { useActivationState } from '../../store/activation/selector'
import { useNavigate } from 'react-router-dom'

export const RegistrationConfirmationPage = () => {
    const formData = useSignUpState()
    const message: string[] = ['Please activate your account with the activation link in the email ', `${formData.email}`, 'Please, check your email']
    useEffect(() => window.scrollTo(0, 0))

    const activation = useActivationState()
    const navigate = useNavigate()

    const goTo = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if ((e.target as HTMLInputElement)?.type !== 'submit') {
            return
        }
        navigate('/auth/signup/activate')
    }

    useEffect(() => {
        if(activation.isActivated){
            navigate('/auth')
        }
    }, [activation.isActivated])

    return (
        <div>
            <div>
                <div className={styles.confirmation_title}>
                    <MainTitle title='confirmation' />
                </div>
                <div className={styles.confirmation_form}>
                    <ConfirmationForm buttonName='Go to activation' onClick={goTo} msg={message}/>
                </div>
            </div>
        </div>
    )
}
