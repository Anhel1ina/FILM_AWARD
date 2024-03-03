import { GoBackButton } from '../../components/GoBackButton/GoBackButton'
import { MainTitle } from '../../components/MainTitle/MainTitle'
import { SignUpForm } from '../../components/SignForms/SignUpForm'
import styles from './sign_page.module.scss'

export const SignUpPage = () => {
    return (
        <div>
            <div>
                <div className={styles.sign_up_title}>
                    <MainTitle title='sign up' />
                </div>
                <div className={styles.sign_up_page_form}>
                <SignUpForm 
                    underTitle='Already have an account?'
                    underLink='Sign In'
                    linkTo='/auth'
                    buttonName='Sign Up'/>
                </div>
            </div>
            <GoBackButton sign_pos={true}/>
        </div>
    )
}
