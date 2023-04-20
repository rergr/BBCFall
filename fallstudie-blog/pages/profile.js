import { useRedirectToLogin } from "@lib/session"
import styles from "./profile.module.css"

export default function ProfilePage({ session }) {
    useRedirectToLogin(session)

    return (
        session.user && (
            <div className={styles.container} style={{ display: 'flex', justifyContent: 'center', alignContent:"center", flexDirection:"column"}}>
                <div className={styles.profileBox}>
                    <h2 className={styles.profileName}>{session.user.name}</h2>

                </div>
                <div style={{ display: 'flex', justifyContent: 'center', alignContent:"center", flexDirection:"row", gap:"2rem"}}>
                    <img
                        className={styles.firework}
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Vladimir_Lenin.jpg/1200px-Vladimir_Lenin.jpg"
                        style={{ display: 'flex', justifyContent: 'center', width: '23%', }}
                    />
                    <img
                        className={styles.firework}
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Karl_Marx_001.jpg/1200px-Karl_Marx_001.jpg"
                        style={{ display: 'flex', justifyContent: 'center', width: '23%'}}
                    />
                    <img
                        className={styles.firework}
                        src="https://3.bp.blogspot.com/-zOD1JKjD3JI/V76JNs9OEwI/AAAAAAAAK3U/Pxq1BkjxcwAhOPwHJrqQO1kMaDepKdXWACLcB/s1600/socialist_kiss_brezhnev_honecker_1979.jpg"
                        style={{ display: 'flex', justifyContent: 'center', width: '40%'}}
                    />
                </div>

            </div>
        )
    )



}
