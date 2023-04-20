import styles from './footer.module.css'

export default function Footer() {

    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <p>&copy; {currentYear} My Website. All Rights Reserved by The CCCP.</p>
                <audio className={styles.ussran} controls loop={true} autoPlay={true}>
                    <source src="/ussran.mp3" type="audio/mpeg"/>
                </audio>
            </div>
        </footer>
    )
}
