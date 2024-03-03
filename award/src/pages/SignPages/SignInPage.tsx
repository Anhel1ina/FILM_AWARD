import { useDispatch } from 'react-redux'
import { GoBackButton } from '../../components/GoBackButton/GoBackButton'
import { MainTitle } from '../../components/MainTitle/MainTitle'
import { SignInForm } from '../../components/SignForms/SignInForm'
import { useAuthState } from '../../store/auth/selectors'
import styles from './sign_page.module.scss'
import { setAuthAlert } from '../../store/auth/actions'
import { useEffect, useState } from 'react'
import { Alert } from '../../components/Alert/Alert'

export const SignInPage = () => {

    const {showAuthError, errors} = useAuthState()
    const dispatch = useDispatch()
    const closePage = () => dispatch(setAuthAlert(false))
    const [hide, setHide] = useState<boolean>(false)

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
    }, [showAuthError, dispatch])

    return (
        <div className={styles.sign_content}>
            <div>
                <div className={styles.sign_page_title}>
                    <MainTitle title='sign in' />
                </div>
                <div className={styles.sign_page_form}>
                    <SignInForm
                        underTitle="Don't have an account?"
                        underLink='Sign Up'
                        linkTo='signup'
                        submitLink='registrationconfirm'
                        buttonName='Sign In'
                        forgetLink='forgotpassword'
                    />
                    {
                        showAuthError ? (
                            <Alert isError={true} isHide={hide} closeAlert={closePage} errorText={`[${JSON.stringify(errors).slice(11, -2)}]`}/>
                        ) : (
                            null
                        )
                    }
                </div>
            </div>
            <GoBackButton sign_pos={true}/>
        </div>
    )
}
