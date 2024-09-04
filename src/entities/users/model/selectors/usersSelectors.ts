import { StateSchema } from "@/app/providers/StoreProvider"
import { createSelector } from "@reduxjs/toolkit"
import { defineFilteredData } from "../../lib/defineFilteredData"

export const selectUsersData = (state: StateSchema) => state.users.usersData
export const selectIsLoadingUsersData = (state: StateSchema) => state.users.loading
export const selectErrorUsersData = (state: StateSchema) => state.users.error

export const selectFilterOptions = (state: StateSchema) => state.users.userFilters

export const selectFilteredUsersData = createSelector(
    selectUsersData,
    selectFilterOptions,
    (usersData, filterOptions) => {
        return defineFilteredData(usersData, filterOptions)
    }
)
