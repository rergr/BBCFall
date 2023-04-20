import { useRedirectToLogin } from "@lib/session"
import styles from "./profile.module.css"

export default function ProfilePage({ session }) {
    useRedirectToLogin(session)

    return (
        session && session.user && (
            <div className={styles.container}>
                <div className={styles.profileBox}>
                    <h2 className={styles.profileName}>{session.user.name}</h2>

                </div>
            </div>
        )
    )

}
