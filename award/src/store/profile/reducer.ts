import { ProfileActionType, ProfileStateType } from "./types"

export const ProfileInitState: ProfileStateType = {
    username: '',
    email: ''
}

export const profileReducer = (state = ProfileInitState, action: ProfileActionType): ProfileStateType => {
    switch (action.type) {
        case 'SET_PROFILE_USERNAME':
            return {
                ...state,
                username: action.username!
            }
        case 'SET_PROFILE_EMAIL':
            return {
                ...state,
                email: action.email!
            }
        default: return state
    }
}