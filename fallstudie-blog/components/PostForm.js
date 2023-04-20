import { useEffect, useState } from "react"
import styles from "./PostForm.module.css"
import {useRouter} from "next/router";
import {createPost, deletePost, updatePost} from "@lib/api";

const defaultModel = {
    title: "",
    text: ""
}

function validateModel(post) {
    const errors = {
        title: "",
        text: ""
    }
    let isValid = true

    if (post.title === "") {
        errors.title = "NONOON"
        isValid = false
    }
    if (post.text  === "") {
        errors.text = "BOOOO"
        isValid = false
    }
    console.log(post)
    return { errors, isValid }
}

export default function PostForm({ session, postToEdit }) {

    const router = useRouter()
    const [isLoading, setIsLoading] = useState(false)
    const [errors, setErrors] = useState(defaultModel)
    const [post, setPost] = useState(defaultModel)

    useEffect(() => {
        if (postToEdit) {
            setPost(postToEdit)
        }
    }, [postToEdit])

    const handleChange = (e) => {
        const target = e.target
        const name = target.name
        const value = target.value
        setPost({
            ...post,
            [name]: value
        })
    }


        const handleSubmit = async (e) => {
            e.preventDefault()
            setIsLoading(true)
            setErrors(defaultModel)


        const result = validateModel(post)

        if (!result.isValid) {
            setErrors(result.errors)
            setIsLoading(false)
            return
        }

        if (post.id) {
            await updatePost(post, session.token)
            pushback()

        } else {
            post.userId = session.user.id
            await createPost(post, session.token)
            pushback()

        }


        setIsLoading(false)
    }

    const pushback = async () => {
        if (post.title !== "" || post.text  !== "") {
            router.push("/")
        }
    }

    return (
        <div className={styles.postform}>
            <form onSubmit={handleSubmit} className={styles['post-form']}>
                <fieldset>
                    <label>Title:</label>
                    <input type="text" name="title" value={post.title} onChange={handleChange} />
                    {errors.title && <div className={styles.errormsg}>{errors.title}</div>}
                </fieldset>

                <fieldset>
                    <label>Text:</label>
                    <textarea name="text" value={post.text} onChange={handleChange} />
                    {errors.text && <div className={styles.errormsg}>{errors.text}</div>}
                </fieldset>

                <div className={styles['button-container']}>
                    <button type="submit" >Sцъмiт</button>
                </div>
            </form>
        </div>
    )
}