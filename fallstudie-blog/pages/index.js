import {getAllPosts} from "@lib/api";
import {useEffect, useState} from "react";
import Link from "next/link";
import styles from './index.module.css'

export default function Index({session}) {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        try {
            getAllPosts().then((p) => setPosts(p))
            } catch (e) {
                console.log(e)
            }
        },[])

    return (
        <div className={styles.container}>
            <ul className="posts">
                {
                    posts.map(post => {
                        return (
                            <li key={post.id} className={'post'}>
                                <Link  href={`/posts/${post.id}`} style={{ textDecoration: 'none'}}>
                                    <h1>{post.title}</h1>
                                    <p>{post.text}</p>
                                </Link>
                            </li>

                        )
                    })
                }
            </ul>

        </div>
    )
}
