import { useNavigate } from 'react-router-dom'
import styles from './header_menu_item.module.scss'
import { useMenuState } from '../../store/burger/selectors'
import { useDispatch } from 'react-redux'
import { setCloseAction, setHideAction } from '../../store/burger/action'

type Props = {
    item_title: string
    icon: JSX.Element
    index: number
    activeIndex: number

    isMenuItem?: boolean
}

export const HeaderMenuItem = ({ item_title, icon, activeIndex, index, isMenuItem = false }: Props) => {
    const { isOpened } = useMenuState()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const clickTheItem = () => {
        navigate('/')
        if (isOpened) {
            dispatch(setHideAction())
            setTimeout(() => {
                dispatch(setCloseAction())
            }, 700);
        }
    }
    return (
        <div onClick={clickTheItem} className={`${styles.wrapper} ${isMenuItem ? styles.burger_menu_item : null} ${+activeIndex === +index && !isMenuItem ? styles.active : null} ${+activeIndex === +index && isMenuItem ? styles.burger_active : null}`}>
            <li className={styles.menu_item}>
                {icon}
                <p>{item_title.toUpperCase()}</p>
            </li>
            {isMenuItem ? null : <div className={styles.underline}></div>}
        </div>
    )
}

