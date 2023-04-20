import PostForm from "@components/PostForm";
import {useRouter} from "next/router";
import {getPostById} from "@lib/api";
import {useState, useEffect} from 'react';
import {useRedirectToLogin} from "@lib/session";

export default function Edit({session}) {
    useRedirectToLogin(session)

    const router = useRouter()
    const { id } = router.query
    const [post, setPost] = useState([])


    useEffect(() => {
        if (!id) return

        try {
            getPostById(id).then((p) => setPost(p))
        } catch (e) {
            console.log(e)
        }
    }, [id]);

    return Edit && (
    session.user && (
        <div>
            <PostForm session={session} postToEdit={{...post, id:parseInt(id)}} />
        </div>
    )
    )
}
