import { useState } from 'react'
import styles from './header.module.css'
import Link from "next/link";
import {useRedirectToHome, useRedirectToLogin} from "@lib/session";


export default function Header({session}) {

    const [menuOpen, setMenuOpen] = useState(false)

    function handleMenuToggle() {
        setMenuOpen(!menuOpen)
    }

    const handelLogout = () => {
        session.logout()

    }

    return (
        <div className={styles.container}>

            <header className={styles.header}>
                <h1 className={styles.title}>Союз Советских Социалистических Республик (СССР)</h1>
                <button
                    className={`${styles.menuButton} ${menuOpen ? styles.menuButtonOpen : ''}`}
                    onClick={handleMenuToggle}
                    aria-label="Menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </header>
            <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ''}`}>
                <ul className={styles.navList}>
                    <li className={styles.navItem}>
                        <Link href="/">Номе</Link>
                    </li>
                    <li className={styles.navItem}>
                        <Link href="/posts/create">Сгеате</Link>
                    </li>
                    <li className={styles.navItem}>

                        {session && session.user == null ? (
                            <Link href="/login">Lобiи</Link>
                        ) : (
                            <a onClick={handelLogout}>Lобоuт</a>
                        )}


                    </li>
                    <li className={styles.navItem}>
                        <Link href="/profile">pогтfоliе </Link>
                    </li>


                </ul>
            </nav>
        </div>
    )
}
