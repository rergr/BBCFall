import {useRouter} from "next/router";
import { useRedirectToHome } from "@lib/session"
import {useEffect, useState} from "react";
import styles from './login.module.css'
import {login} from "@lib/api";



export default function Login({session}) {
    useRedirectToHome(session)

    const router = useRouter()

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleEmailChange(event) {
        setEmail(event.target.value);
    }

    function handlePasswordChange(event) {
        setPassword(event.target.value);
    }

    const handleLogin = async (e) => {
        e.preventDefault()
        const response = await login({email, password})
        session.login(response)
        await router.push("/")
    }

    return (
       <div className={styles.body}>
           <form onSubmit={handleLogin} className={styles.loginForm}>
               <label className={styles.label}>Lобiи</label>
               <input
                   type="email"
                   placeholder="Email"
                   name="email"
                   value={email}
                   onChange={handleEmailChange}
                   className={styles.input}
               />
               <input
                   type="password"
                   placeholder="Password"
                   name="password"
                   value={password}
                   onChange={handlePasswordChange}
                   className={styles.input}
               />
               <button type="submit" className={styles.button}>Lобiи</button>
           </form>
        </div>
    )
}



