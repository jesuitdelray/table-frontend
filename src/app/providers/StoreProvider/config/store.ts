import { configureStore } from "@reduxjs/toolkit"
import { StateSchema } from "./StateSchema"

import { usersReducer } from "@/entities/users"

export function createReduxStore(initialState?: StateSchema) {
    return configureStore<StateSchema>({
        reducer: {
            users: usersReducer,
        },
        devTools: true,
        preloadedState: initialState,
    })
}

export type AppDispatch = ReturnType<typeof createReduxStore>["dispatch"]
