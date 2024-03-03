import { TabAction } from "./types";

export const setTabAction = (tabIndex: number): TabAction => ({
    type: 'SET_TAB',
    tabIndex: tabIndex
})
