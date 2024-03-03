import { ProfileActionType } from "./types";

export const SetUsernameProfile= (username: string): ProfileActionType => ({
    type: 'SET_PROFILE_USERNAME',
    username: username
})

export const SetEmailProfile= (email: string): ProfileActionType => ({
    type: 'SET_PROFILE_EMAIL',
    email: email
})