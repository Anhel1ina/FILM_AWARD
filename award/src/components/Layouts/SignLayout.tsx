import React from 'react'
import { useFiltersState } from '../../store/filters/selector'
import { Outlet } from 'react-router-dom'
import { useThemeState } from '../../store/theme/selectors'

export const SignLayout = ({ children }: { children?: React.ReactNode }) => {
    const baseStyle = 'base_style'
    const minInnerCotextStyle = 'min_inner_style'
    const modalFilters = 'modal_window_state'

    const { isFilterOpened } = useFiltersState()
    const {theme} = useThemeState()
    return (
        <div className={`${isFilterOpened ? modalFilters : null}`}>
            <div className={`${baseStyle} ${theme}`}>
                <div className={`${minInnerCotextStyle}`}>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}
