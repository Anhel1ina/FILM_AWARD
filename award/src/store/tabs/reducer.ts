import { TabState, TabAction } from "./types"

export const TabInitState: TabState = {
    activeTab: 'HOME',
    activeIndex: 0,
    tabs: ['HOME', 'FAVORITES', 'TRENDS'],
}

export const tabReducer = (state = TabInitState, action: TabAction): TabState => {
    switch(action.type){
        case 'SET_TAB':
            return {
                ...state,
                activeIndex: action.tabIndex,
                activeTab: state.tabs[action.tabIndex]
            }
        default: return state
    }
}