import styles from '../Header/header.module.scss'
import mainLogo from '../../assets/images/logo_award.svg'
import { HeaderMenuItem } from '../HeaderMenuItem/HeaderMenuItem'
import { Home } from '../../assets/images/menuIcons/Home'
import { Favorites } from '../../assets/images/menuIcons/Favorites'
import { Trends } from '../../assets/images/menuIcons/Trends'
import { HeaderButton } from '../HeaderButton/HeaderButton'
import { HeaderSettingsButton } from '../HeaderSettingsButton/HeaderSettingsButton'
import { HeaderSearchForm } from '../HeaderSearchForm/HeaderSearchForm'
import { useTabsState } from '../../store/tabs/selector'
import { useDispatch } from 'react-redux'
import { setTabAction } from '../../store/tabs/action'
import { AuthorizedIcon } from '../AuthorizedIcon/AuthorizedIcon'
import { FilterModal } from '../FilterModal/FilterModal'
import { useFiltersState } from '../../store/filters/selector'
import { SetFilterModalOpened } from '../../store/filters/action'
import { useAuthState } from '../../store/auth/selectors'
import { useEffect, useState } from 'react'
import { Burger } from '../Burger/Burger'
import { useMenuState } from '../../store/burger/selectors'
import { Menu } from '../Menu/Menu'
import { HeaderFilterButton } from '../HeaderFilterButton/HeaderFilterButton'


export const Header = () => {
    const icons: JSX.Element[] = [<Home />, <Favorites />, <Trends />]
    const [isMenuAdded, setIsMenuAdded] = useState<boolean>(window.innerWidth < 1270)
    const [isLogoHide, setLogoHide] = useState<boolean>(window.innerWidth < 980)
    const { tabs, activeIndex } = useTabsState()
    const { isFilterOpened } = useFiltersState()
    const { isOpened } = useMenuState()
    const { isLoged } = useAuthState()
    const dispatch = useDispatch()

    const open = () => dispatch(SetFilterModalOpened(true))
    const close = () => {
        dispatch(SetFilterModalOpened(false))
        // dispatch(ClearFilters())
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
        const handleResize = () => {
            setIsMenuAdded(window.innerWidth < 1270)
        }
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [window.innerWidth])

    useEffect(() => {
        const hideLogo = () => {
            setLogoHide(window.innerWidth < 980)
        }
        window.addEventListener('resize', hideLogo)
        return () => {
            window.removeEventListener('resize', hideLogo)
        }
    }, [window.innerWidth])

    return (
        <>
            <header>
                <div className={styles.header_menu}>
                    <div className={styles.header_main}>
                        <div className={styles.header_menu__logo_holder}>
                            {isMenuAdded ? <Burger /> : null}
                            {
                                isLogoHide ? null : <img src={mainLogo} alt="logo-award" />
                            }
                        </div>
                        {
                            isMenuAdded ? (null) : (
                                <ul className={styles.header_menu__list}>
                                    {
                                        tabs.map((tab, index) => (
                                            <div onClick={(e) => openTab(e)} id={index.toString()} key={index}>
                                                <HeaderMenuItem activeIndex={activeIndex} index={index} icon={icons[index]} item_title={tab} />
                                            </div>
                                        ))
                                    }
                                </ul>
                            )
                        }
                    </div>
                    <div className={styles.header_buttons}>
                        <HeaderSearchForm />
                        <div className={styles.header_buttons__auth}>
                            {isLoged ? (
                                <div onClick={open}>
                                    <HeaderFilterButton />
                                </div>
                            ) : null}
                            {
                                isLoged ? (
                                    <>
                                        <AuthorizedIcon />
                                        <HeaderSettingsButton />
                                    </>
                                ) : (
                                    <HeaderButton buttonTitle='Sign in' />
                                )
                            }
                        </div>
                    </div>
                </div>
            </header>
            {isOpened ? <Menu /> : null}
            {
                isFilterOpened ? <FilterModal closeFilter={close} /> : null
            }
        </>
    )
}
