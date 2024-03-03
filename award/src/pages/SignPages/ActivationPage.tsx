import { useEffect, useState } from 'react'
import { MainTitle } from '../../components/MainTitle/MainTitle'
import { ActivationForm } from '../../components/SignForms/ActivationForm'
import { useActivationState } from '../../store/activation/selector'
import { useAuthState } from '../../store/auth/selectors'
import styles from './sign_page.module.scss'
import { useDispatch } from 'react-redux'
import { setAuthAlert } from '../../store/auth/actions'
import { Alert } from '../../components/Alert/Alert'
import { setActivationAlert } from '../../store/activation/action'

export const ActivationPage = () => {
    const dispatch = useDispatch()
    const {errors, showActivationAlert} = useActivationState()
    const showAuthError = useAuthState()
    const [hide, setHide] = useState<boolean>(false)
    const closePage = () => dispatch(setActivationAlert(false))

    useEffect(() => {
        if(showAuthError){
            setTimeout(() => {
                dispatch(setAuthAlert(false))
            }, 4000)
            setTimeout(() => {
                setHide(true)
            }, 3500)
        }
        else{
            setHide(false)
        }
    }, [showAuthError, hide, dispatch])

    return (
        <div>
            <div>
                <div className={styles.sign_page_title}>
                    <MainTitle title='activation' />
                </div>
                <div className={styles.sign_page_form}>
                    <ActivationForm/>
                    {
                        showActivationAlert ? (
                            <Alert isError={true} isHide={hide} closeAlert={closePage} errorText={`[${JSON.stringify(errors).slice(11, -2)}]`}/>
                        ) : (
                            null
                        )
                    }
                </div>
            </div>
        </div>
    )
}


