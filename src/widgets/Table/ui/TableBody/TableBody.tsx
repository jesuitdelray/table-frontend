import { TUser } from "@/entities/users"
import { tableLabels } from "../../const/const"
import styles from "./TableBody.module.scss"

export function TableBody({ usersData }: { usersData: TUser[] }) {
    if (!usersData.length)
        return (
            <div className={styles.noDataContainer}>
                <p className={styles.noDataText}>No data</p>
            </div>
        )

    return (
        <div className={styles.usersContainer}>
            {usersData?.map(user => (
                <div className={styles.user} key={user.id}>
                    {tableLabels.map(label => {
                        const field = label.toLocaleLowerCase()

                        return (
                            <p key={label} className={styles.userLabel}>
                                {user[field]}
                            </p>
                        )
                    })}
                </div>
            ))}
        </div>
    )
}
