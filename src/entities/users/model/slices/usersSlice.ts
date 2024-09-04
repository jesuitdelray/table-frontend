import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { TFilterOptions, TUser, TUsersState } from "../types/types"
import { fetchUsers } from "../services/fetchUsers"

const initialState: TUsersState = {
    usersData: [],
    userFilters: {
        name: "",
        username: "",
        email: "",
        phone: "",
    },
    loading: false,
    error: null,
}

const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        setFilterOptions(state, action: PayloadAction<TFilterOptions>) {
            state.userFilters = action.payload
        },
    },
    extraReducers: builder => {
        builder
            .addCase(fetchUsers.pending, state => {
                state.loading = true
            })
            .addCase(fetchUsers.fulfilled, (state, action: PayloadAction<TUser[]>) => {
                state.loading = false
                state.usersData = action.payload
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.loading = false
                state.error = action.error.message
            })
    },
})

export const usersReducer = usersSlice.reducer
export const { setFilterOptions } = usersSlice.actions
