import { TFilterOptions } from "@/entities/users"
import styles from "./Sidebar.module.scss"
import { SetStateAction } from "react"

export function Sidebar({
    filterOptions,
    setFilterOptions,
}: {
    filterOptions: TFilterOptions
    setFilterOptions: (value: SetStateAction<TFilterOptions>) => void
}) {
    const {
        name: nameFilter,
        username: usernameFilter,
        email: emailFilter,
        phone: phoneFilter,
    } = filterOptions

    function filtersHandler(field: keyof TFilterOptions, value: string) {
        if (field === "phone") {
            value = value.replace(/[^0-9\s-.()x]/g, "")
        }

        setFilterOptions({ ...filterOptions, [field]: value })
    }

    return (
        <div className={styles.sidebar}>
            <p className={styles.filterTitle}>Filters</p>
            <div className={styles.filters}>
                <input
                    type="text"
                    placeholder="Filter by name"
                    value={nameFilter}
                    onChange={e => filtersHandler("name", e.target.value)}
                    className={styles.filterInput}
                />
                <input
                    type="text"
                    placeholder="Filter by username"
                    value={usernameFilter}
                    onChange={e => filtersHandler("username", e.target.value)}
                    className={styles.filterInput}
                />
                <input
                    type="email"
                    placeholder="Filter by email"
                    value={emailFilter}
                    onChange={e => filtersHandler("email", e.target.value)}
                    className={styles.filterInput}
                />
                <input
                    type="text"
                    placeholder="Filter by phone"
                    value={phoneFilter}
                    onChange={e => filtersHandler("phone", e.target.value)}
                    className={styles.filterInput}
                />
            </div>
        </div>
    )
}
