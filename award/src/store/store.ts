import { Action, combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { ThunkAction } from "redux-thunk";
import { filmReducer } from "./cards/reducer";
import { tabReducer } from "./tabs/reducer";
import { searchReducer } from "./search/reducer";
import { searchResReducer } from "./showSearchRes/reducer";
import { filtersReducer } from "./filters/reducer";
import { authReducer } from "./auth/reducer";
import { signUpReducer } from "./signUp/reducer";
import { addToFavsReducer } from "./favs/reducer";
import { trendsReducer } from "./trends/reducer";
import { activationReducer } from "./activation/reducer";
import { resetPasswordReducer } from "./reset_passwd/reducer";
import { profileReducer } from "./profile/reducer";
import { themeReducer } from "./theme/reducer";
import { burgerReducer } from "./burger/reducer";

const rootReducer = combineReducers({
    films: filmReducer,
    tabs: tabReducer,
    search: searchReducer,
    searchRes: searchResReducer,
    filters: filtersReducer,
    auth: authReducer,
    signUp: signUpReducer,
    favs: addToFavsReducer,
    trends: trendsReducer,
    activation: activationReducer,
    resetPassword: resetPasswordReducer,
    profile: profileReducer,
    theme: themeReducer,
    menu: burgerReducer
})

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
})


export type AppState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    AppState,
    unknown,
    Action<string>
>

export {
    store as appStore
}
