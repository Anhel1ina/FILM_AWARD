import { useDispatch } from "react-redux"
import { useMenuState } from "../../store/burger/selectors"
import { setCloseAction, setHideAction, setOpenAction } from "../../store/burger/action"
import styles from './burger.module.scss'
import { OpenMenuIcon } from "./OpenMenuIcon"
import { BurgerIcon } from "./BurgerIcon"

export const Burger = () => {
    const {isOpened} = useMenuState()
    const dispatch = useDispatch()

    const setOpenMenu = () => dispatch(setOpenAction())
    const setCloseMenu = () => {
        dispatch(setHideAction())
        setTimeout(() => {
            dispatch(setCloseAction())
        }, 700);
    } 
    
    return (
        <div onClick={isOpened ? setCloseMenu : setOpenMenu}>
            {isOpened ? (
                <button id='burger_open' className={styles.open_icon}>
                    <OpenMenuIcon />
                </button>
            ) : (
                <button id='burger_close' className={styles.burger}>
                    <BurgerIcon />
                </button>
            )}
        </div>
    )
}
