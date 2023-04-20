import styles from './footer.module.css'

export default function Footer() {

    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <p>&copy; {currentYear} My Website. All Rights Reserved.</p>
            </div>
        </footer>
    )
}
