import { TFilterOptions, TUser } from "@/entities/users/model/types/types"

export function defineFilteredData(usersData: TUser[], filteredOptions: TFilterOptions) {
    const {
        name: nameFilter,
        username: usernameFilter,
        email: emailFilter,
        phone: phoneFilter,
    } = filteredOptions

    return usersData.filter(user => {
        return (
            user.name.toLowerCase().indexOf(nameFilter.toLowerCase()) !== -1 &&
            user.username.toLowerCase().indexOf(usernameFilter.toLowerCase()) !== -1 &&
            user.email.toLowerCase().indexOf(emailFilter.toLowerCase()) !== -1 &&
            user.phone.toLowerCase().indexOf(phoneFilter.toLowerCase()) !== -1
        )
    })
}
