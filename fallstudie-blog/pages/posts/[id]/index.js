import styles from './index.module.css'
import {getPostById, deletePost} from "@lib/api";
import {useEffect, useState} from "react";
import {useRouter} from "next/router";
import Link from "next/link";

export default function Index({session}) {

    const router = useRouter()
    const { id } = router.query
    const [post, setPost] = useState([]);

    useEffect(() => {
        if (!id) return

        try {
            getPostById(id).then((p) => setPost(p))
            console.log(post)
        } catch (e) {
            console.log(e)
        }
    }, [id]);

    const handleDelete = async () => {
        await deletePost(post.id, session.token);
        await router.push('/');

    }
    if (!session.user) {
        return (
            <div className={styles.container}>
                <ul className='posts'>
                    <li key={post.id} className={`post ${styles.container}` }>
                        <h1>{post.title}</h1>
                        <p>{post.text}</p>
                    </li>
                </ul>
            </div>
        )

    }

    return post && (
        <div>
            <ul className='posts'>
                <li key={post.id} className={`post ${styles.container}` }>
                    <h1>{post.title}</h1>
                    <p>{post.text}</p>
                    <button onClick={handleDelete} type="submit" className={styles.deleteBtn}>Dеlете</button>
                    <Link href={`/posts/${post.id}/edit`}> <button type="submit" className={styles.editBtn}>Еdiте</button> </Link>
                </li>
            </ul>
        </div>
    )
}
