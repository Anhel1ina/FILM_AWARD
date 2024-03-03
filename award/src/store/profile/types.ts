export type ProfileStateType = {
    username: string
    email: string
}

export type ProfileActionType = {
    type: string
    username?: string
    email?: string
}