import { FormEvent, useEffect, useRef } from 'react'
import { useActivationState } from '../../store/activation/selector'
import { useAuthState } from '../../store/auth/selectors'
import { useSignUpState } from '../../store/signUp/selector'
import { Input } from '../Input/Input'
import styles from './sign_forms.module.scss'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../../store/store'
import { activateAsyncAction, setTokenAction, setUidAction } from '../../store/activation/action'
import { SignMainButton } from '../SignMainButton/SignMainButton'
import { useNavigate } from 'react-router-dom'
import { setSignInEmailAction, setSignInPasswordAction } from '../../store/auth/actions'

export const ActivationForm = () => {
    const activationData = useActivationState()
    const userData = useSignUpState()
    const auth = useAuthState()
    const dispatch = useDispatch<AppDispatch>()
    const navigate = useNavigate()

    const inputRef = useRef<HTMLInputElement>(null)
    useEffect(() => {
        inputRef.current?.focus()
    }, [])

    const activate = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if ((e.target as HTMLInputElement)?.type !== 'submit') {
            return
        }
        dispatch(activateAsyncAction())
    }

    useEffect(() => {
        if(activationData.isActivated){
            dispatch(setSignInEmailAction(userData.email!))
            dispatch(setSignInPasswordAction(userData.password!))
            navigate('/auth/signup/success')
        }
    }, [activationData.isActivated])

    return (
        <form className={styles.sign_form} onClick={activate}>
            {
                <>
                    <Input reference={inputRef}
                        index={0}
                        value={activationData.uid || ''}
                        placeholder='Enter UID'
                        type='text'
                        label='UID'
                        errorType='uid'
                        errorsData={activationData}
                        onChange={(text: string) => {
                            dispatch(setUidAction(text))
                        }}
                    />
                    {activationData.isActivated === false && activationData.errors?.uid && (
                        <p className={styles.error_fields}>
                            {JSON.stringify(activationData.errors.uid).replace(/^\["(.+)"\]$/, '$1')}
                        </p>
                    )}
                    <Input value={activationData.token || ''}
                        placeholder='Enter token'
                        type='text'
                        label='Token'
                        errorType='token'
                        errorsData={activationData}
                        onChange={(text: string) => {
                            dispatch(setTokenAction(text))
                        }}
                    />
                    {activationData.isActivated === false && activationData.errors?.token && (
                        <p className={styles.error_fields}>
                            {JSON.stringify(activationData.errors.token).replace(/^\["(.+)"\]$/, '$1')}
                        </p>
                    )}

                <SignMainButton title='activate'/>
                </>
            }
        </form>
    )
}
