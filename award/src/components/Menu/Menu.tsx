import { useDispatch } from 'react-redux'
import { useMenuState } from '../../store/burger/selectors'
import styles from './menu.module.scss'
import { setCloseAction, setHideAction } from '../../store/burger/action'
import { useEffect, useRef, useState } from 'react'
import { useTabsState } from '../../store/tabs/selector'
import { Home } from '../../assets/images/menuIcons/Home'
import { Favorites } from '../../assets/images/menuIcons/Favorites'
import { Trends } from '../../assets/images/menuIcons/Trends'
import { setTabAction } from '../../store/tabs/action'
import { HeaderMenuItem } from '../HeaderMenuItem/HeaderMenuItem'
import mainLogo from '../../assets/images/logo_award.svg'

export const Menu = () => {
    const icons: JSX.Element[] = [<Home />, <Favorites />, <Trends />]
    const { isOpened, isHide } = useMenuState()
    const { tabs, activeIndex } = useTabsState()
    const [isLogo, setIsLogo] = useState<boolean>(window.innerWidth < 980)
    const dispatch = useDispatch()

    useEffect(() => {
        const setLogo = () => {
            setIsLogo(window.innerWidth < 980)
        }
        window.addEventListener('resize', setLogo)
        return () => {
            window.removeEventListener('resize', setLogo)
        }
    }, [window.innerWidth])

    const setCloseMenu = () => {
        dispatch(setHideAction())
        setTimeout(() => {
            dispatch(setCloseAction())
        }, 700)
    }

    const menuRef = useRef<HTMLDivElement>(null)

    const handleClickInsideMenu = (e: MouseEvent) => {
        const isBurgerOpen = (e.target as HTMLElement).id === 'burger_open'
        const isBurgerClosed = (e.target as HTMLElement).id === 'burger_closed'

        if (isOpened && menuRef.current && !menuRef.current.contains(e.target as HTMLElement) && !isBurgerOpen && !isBurgerClosed) {
            setCloseMenu()
        }
    }

    const openTab = (e: React.MouseEvent<HTMLDivElement>) => {
        const indexButton = e.currentTarget.id;
        if (indexButton) {
            const index = +indexButton;

            if (!isNaN(index)) {
                dispatch(setTabAction(index))
            }
        }
    }

    useEffect(() => {
        if (isOpened) {
            setTimeout(() => {
                document.addEventListener('click', handleClickInsideMenu)
            }, 700);
        }
        else {
            dispatch(setCloseAction())
        }
    }, [isOpened])


    if (!isOpened) {
        return null
    }

    return (
        <div id='menu' className={`${styles.menu} ${isHide ? styles.set_close : null}`} ref={menuRef}>
            <div className={styles.menu__content}>
                <ul>
                    {
                        isLogo ? (
                            <div className={styles.menu_logo}>
                                <img src={mainLogo} alt="logo" />
                            </div>
                        ) : null
                    }
                    {
                        tabs.map((tab, index) => (
                            <div onClick={(e) => openTab(e)} id={index.toString()} key={index}>
                                <HeaderMenuItem isMenuItem={true} activeIndex={activeIndex} index={index} icon={icons[index]} item_title={tab} />
                            </div>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}
