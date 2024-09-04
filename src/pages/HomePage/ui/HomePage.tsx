import { Table } from "@/widgets/Table"
import styles from "./HomePage.module.scss"
import { useAppDispatch } from "@/shared/lib/useAppDispatch/useAppDispatch"
import { setFilterOptions } from "@/entities/users"
import { Sidebar } from "@/widgets/Sidebar/Sidebar"
import { TFilterOptions } from "@/entities/users/model/types/types"
import { useSelector } from "react-redux"
import { selectFilterOptions } from "@/entities/users/model/selectors/usersSelectors"

export function HomePage() {
    const dispatch = useAppDispatch()
    const filterOptions = useSelector(selectFilterOptions)

    function updateFilterOptions(newOptions: TFilterOptions) {
        dispatch(setFilterOptions(newOptions))
    }

    return (
        <div className={styles.container}>
            <Sidebar filterOptions={filterOptions} setFilterOptions={updateFilterOptions} />
            <Table filterOptions={filterOptions} />
        </div>
    )
}
