import PostForm from "@components/PostForm";
import {useRedirectToLogin} from "@lib/session";
import styles from "../profile.module.css";

export default function Create({session}) {
    useRedirectToLogin(session)

    return (
        session.user && (
            <div>
                <PostForm session={session}/>
            </div>
        )

    )
}
