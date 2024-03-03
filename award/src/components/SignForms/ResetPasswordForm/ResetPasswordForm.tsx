import { FormEvent, useEffect, useRef } from 'react'
import styles from '../sign_forms.module.scss'
import { useResetPasswordState } from '../../../store/reset_passwd/selector'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../../../store/store'
import { useNavigate } from 'react-router-dom'
import { sentEmailForResetPassword, setEmailForResetAction } from '../../../store/reset_passwd/action'
import { Input } from '../../Input/Input'
import { SignMainButton } from '../../SignMainButton/SignMainButton'

export const ResetPasswordForm = () => {
    const inputRef = useRef<HTMLInputElement>(null)
    useEffect(() => {
        inputRef.current?.focus()
    }, [])

    const resetData = useResetPasswordState()
    const dispatch = useDispatch<AppDispatch>()
    const navigate = useNavigate()

    const sendData = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if((e.target as HTMLInputElement)?.type !== 'submit'){
            return
        }
        dispatch(sentEmailForResetPassword())
    } 

    const reset = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if((e.target as HTMLInputElement)?.type !== 'submit'){
            return
        }
        navigate('/auth/newpassword')
    } 
    
    return (
        <form className={styles.sign_form} onClick={resetData.isEmailValid ? reset : sendData}>
            {
                <>
                {
                    resetData.isEmailValid ? (
                        <p className={styles.reset_passwd_text}>You will receive an email <span>{resetData.email}</span> with a link to reset your password!</p>
                    ) : (null)
                }
                    <Input value={resetData.email || ''} 
                            label="Email" 
                            onChange={(text: string) => {
                                dispatch(setEmailForResetAction(text))
                            }}
                            reference={inputRef}
                            index={0}
                            placeholder='Your email' 
                            type='email'
                            errorsData={resetData}
                            errorType='email'/>
                    {resetData.isEmailValid === false && resetData.errors?.email && (
                        <p className={styles.error_fields}>
                            {JSON.stringify(resetData.errors.email).replace(/^\["(.+)"\]$/, '$1')}
                        </p>
                    )}
                </>
            }
            <SignMainButton title={resetData.isEmailValid ? 'Reset password' : 'Send'}/>
        </form>
    )
}


