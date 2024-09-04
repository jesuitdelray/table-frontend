import { useEffect, useRef } from "react"
import { useSelector } from "react-redux"
import { useAppDispatch } from "@/shared/lib/useAppDispatch/useAppDispatch"
import { TUser, selectFilteredUsersData, fetchUsers } from "@/entities/users"

export function useFetchUsers(): TUser[] {
    const dispatch = useAppDispatch()
    const filteredUsersData = useSelector(selectFilteredUsersData)
    const isDataLoaded = useRef(false)

    useEffect(() => {
        if (isDataLoaded.current) return
        dispatch(fetchUsers())
        return () => {
            isDataLoaded.current = true
        }
    }, [dispatch])

    return filteredUsersData
}
