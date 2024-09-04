import styles from "./Table.module.scss"
import { TableBody } from "./TableBody/TableBody"
import { useFetchUsers } from "@/widgets/Table/lib/useFetchUsers/useFetchUsers"
import { TableHeader } from "./TableHeader/TableHeader"
import { TFilterOptions } from "@/entities/users"

export function Table({ filterOptions }: { filterOptions: TFilterOptions }) {
    const filteredUsersData = useFetchUsers()

    return (
        <div className={styles.container}>
            <TableHeader filterOptions={filterOptions} />
            <TableBody usersData={filteredUsersData} />
        </div>
    )
}
