import { FilterIcon } from "@/shared/assets/icons/FilterIcon"
import { tableLabels } from "../../const/const"
import styles from "./TableHeader.module.scss"
import { TFilterOptions } from "@/entities/users/model/types/types"

export function TableHeader({ filterOptions }: { filterOptions: TFilterOptions }) {
    return (
        <div className={styles.labelsContainer}>
            {tableLabels.map(label => {
                const field = label.toLocaleLowerCase()

                const showFilterIcon = filterOptions[field] !== ""

                return (
                    <div key={label} className={styles.labelContainer}>
                        <p key={label} className={styles.label}>
                            {label}
                        </p>
                        {showFilterIcon && <FilterIcon className={styles.filterIcon} />}
                    </div>
                )
            })}
        </div>
    )
}
