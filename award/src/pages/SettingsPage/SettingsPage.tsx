import { Switch } from '@mui/material'
import { SettingsInput } from '../../components/SettingsInput/SettingsInput'
import { SubTitle } from '../../components/SubTitle/SubTitle'
import { useProfileState } from '../../store/profile/selector'
import styles from './settingss_page.module.scss'
import { ProfileButton } from '../../components/ProfileButton/ProfileButton'
import { useDispatch } from 'react-redux'
import { logoutAction } from '../../store/auth/actions'
import { useNavigate } from 'react-router-dom'
import { setDarkMode, setLightMode } from '../../store/theme/action'
import { useThemeState } from '../../store/theme/selectors'

export const SettingsPage = () => {
    const profile = useProfileState()
    const {theme} = useThemeState()
    const dispatch = useDispatch()
    const navigate = useNavigate()


    const changeToDarkMode = () => dispatch(setDarkMode())
    const changeToLightMode = () => dispatch(setLightMode()) 

    const logout = () => {
        dispatch(logoutAction())
        dispatch({
            type: 'RESET_DATA'
        })
        dispatch({
            type: 'RESET_SIGN_UP'
        })
        
        navigate('/')
    }

    const save = () => navigate('/')
    const cancel = () => {
        if(theme === 'DARK'){
            changeToLightMode()
        }
        navigate(-1)
    }

    return (
        <div className={styles.settings_wrapper}>
            <div className={styles.settings_page_content}>
                <div className={styles.settings_page_content__profile}>
                    <SubTitle name='Profile' isMain={true} />
                    <div className={styles.profile_content}>
                        <div className={styles.profile_content__pic}>
                            <p>{profile.username[0].toUpperCase()}</p>
                        </div>
                        <div className={styles.profile_content__data}>
                            <SettingsInput value={profile.username.toUpperCase()} placeholder='Username' label='Username' type='text' />
                            <SettingsInput value={profile.email} placeholder='Email' label='Email' type='email' />
                        </div>
                    </div>
                </div>
                <div className={styles.settings_page_content__theme}>
                    <div className={styles.theme_content}>
                        <p>Use Dark Mode</p>
                        <Switch checked={theme === 'DARK'} onChange={theme === 'LIGHT' ? changeToDarkMode : changeToLightMode} color="warning"/>
                    </div>
                </div>
                <div className={styles.settings_page_content__buttons}>
                    <ProfileButton buttonName='Log out' onClick={logout} isLogout={true}/>
                    <div>
                        <ProfileButton buttonName='Cancel' onClick={cancel} isCancel={true}/>
                        <ProfileButton buttonName='Save' onClick={save} isSave={true}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
