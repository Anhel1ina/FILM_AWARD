import { Header } from '../Header/Header'
import { Outlet } from 'react-router-dom'
import { Footer } from '../Footer/Footer'
import { useFiltersState } from '../../store/filters/selector'
import { useThemeState } from '../../store/theme/selectors'

export const Layout = () => {
    const baseStyle = 'base_style'
    const minInnerCotextStyle = 'min_inner_style'
    const modalFilters = 'modal_window_state'

    const { isFilterOpened } = useFiltersState()
    const {theme} = useThemeState()
    return (
        <div className={`${isFilterOpened ? modalFilters : null}`}>
            <div className={`${baseStyle} ${theme}`}>
                <Header />
                <div className={`${minInnerCotextStyle}`}>
                    <Outlet />
                </div>
                <Footer />
            </div>
        </div>
    )
}
