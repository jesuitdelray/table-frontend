import $api from "@/shared/api/axios"
import { createAsyncThunk } from "@reduxjs/toolkit"
import { TUser } from "../types/types"

export const fetchUsers = createAsyncThunk<TUser[], void>(
    "users/fetchUsers",
    async (_, thunkApi) => {
        const { rejectWithValue } = thunkApi

        try {
            const response = await $api.get(`/users`)
            if (!response.data) throw new Error()

            return response.data
        } catch (e) {
            return rejectWithValue(e)
        }
    }
)
