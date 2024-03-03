import { FormEvent, useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { AppDispatch } from '../../store/store'
import { useAuthState } from '../../store/auth/selectors'
import { setSignInEmailAction, setSignInPasswordAction, signInAction } from '../../store/auth/actions'
import styles from './sign_forms.module.scss'
import { Input } from '../Input/Input'
import { SignMainButton } from '../SignMainButton/SignMainButton'

type Props = {
  disabled?: boolean
  buttonName?: string
  underTitle?: string
  underLink?: string
  submitLink?: string

  forgetLink?: string
  linkTo?: string
}

export const SignInForm = ({ buttonName, underTitle, underLink, forgetLink, linkTo, disabled = false }: Props) => {

  const inputRef = useRef<HTMLInputElement>(null)
  const navigate = useNavigate()
  const dispatch = useDispatch<AppDispatch>()
  const signInData = useAuthState()

  useEffect(() => {
    if (signInData.isLoged) {
      navigate('/')
    }
  }, [signInData])

  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  useEffect(() => {
    if (signInData.isLoged) {
      // dispatch(setSignInEmailAction(''))
      dispatch(setSignInPasswordAction(''))
      dispatch({
        type: 'SET_CLIENT_ERRORS',
        errors: {}
      })
    }
  }, [signInData.isLoged])

  const signIn = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if ((e.target as HTMLInputElement)?.type !== 'submit') {
      return
    }
    dispatch(signInAction(signInData.email!, signInData.password!))
  }

  return (
    <form className={styles.sign_form} onClick={signIn}>
      {
        <>
          <Input value={signInData.email || ''}
            label="Email"
            onChange={(text: string) => {
              dispatch(setSignInEmailAction(text))
            }}
            reference={inputRef}
            index={0}
            placeholder='Your email'
            type='email'
            errorsData={signInData}
            errorType='email' />
          {signInData.isLoged === false && signInData.errors?.email && (
            <p className={styles.error_fields}>
              {JSON.stringify(signInData.errors.email).replace(/^\["(.+)"\]$/, '$1')}
            </p>
          )}
          <Input value={signInData.password || ''}
            label="Password"
            onChange={(text: string) => {
              dispatch(setSignInPasswordAction(text))
            }}
            placeholder='Your password'
            errorType='password'
            errorsData={signInData}
            type='password' />
          {signInData.isLoged === false && signInData.errors?.password && (
            <p className={styles.error_fields}>
              {JSON.stringify(signInData.errors.password).replace(/^\["(.+)"\]$/, '$1')}
            </p>
          )}
        </>
      }
      {
        forgetLink ? (
          <Link to={forgetLink} className={styles.forget_link}>
            <p>Forgot password ?</p>
          </Link>
        ) : (
          null
        )
      }
      <SignMainButton title='Sign in'/>
      {
        underTitle && underLink ? (
          <div className={styles.sign_text}>
            <p>{underTitle + " "}
              {
                linkTo ? (
                  <Link to={linkTo}>{underLink}</Link>
                ) : (
                  null
                )
              }
            </p>
          </div>
        ) : (
          null
        )
      }
    </form>
  )
}
