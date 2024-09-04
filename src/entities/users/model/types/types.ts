export type TUser = {
    id: string
    name: string
    username: string
    email: string
    phone: string
    website: string
}

export type TUsersState = {
    usersData: TUser[]
    loading: boolean
    error: string | null
    userFilters: TFilterOptions
}

export type TFilterOptions = {
    name: string
    username: string
    email: string
    phone: string
}
