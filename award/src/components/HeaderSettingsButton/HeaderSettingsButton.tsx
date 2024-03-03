import styles from './settings.module.scss'
import { Settings } from '../../assets/images/menuIcons/Settings'
import { useNavigate } from 'react-router-dom'

export const HeaderSettingsButton = () => {
    const navigate = useNavigate()
    return (
        <button onClick={() => navigate('settings')} className={styles.settings}>
            <Settings/>
        </button>
    )
}
