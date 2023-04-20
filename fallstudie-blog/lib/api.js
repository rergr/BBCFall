const URL = "http://localhost:9001/api/posts"
const AURL = "http://localhost:9001/authenticate"

export async function getAllPosts() {
    const response = await fetch(URL)

    if (!response.ok) {
        return Promise.reject(response.statusText)
    }

    return await response.json()
}

export async function getPostById(id) {
    const response = await fetch(`${URL}/${id}`)

    if (!response.ok) {
        return Promise.reject(response.statusText)
    }

    return await response.json()

}

export async function createPost(post, token) {
    const response = await fetch(URL, {
        method: "POST",
        headers: {
            "content-type": "application/json",
            "authorization": `Bearer ${token}`

        },
        body: JSON.stringify(post)
    })

    if (!response.ok) {
        return Promise.reject(response.statusText)
    }

    return await response.json()


}

export async function updatePost(post, token) {
    const response = await fetch(`${URL}/${post.id}`, {
        method: "PUT",
        headers: {
            "content-type": "application/json",
            "authorization": `Bearer ${token}`

        },
        body: JSON.stringify(post)
    })

    if (!response.ok) {
        return Promise.reject(response.statusText)
    }

    return await response.json()

}


export async function deletePost(id, token) {
    console.log(token)
    const response = await fetch(`${URL}/${id}`, {
        method: "DELETE",
        headers: {
            "content-type": "application/json",
            "authorization": `Bearer ${token}`
        },

    })

    if (!response.ok) {
        return Promise.reject(response.statusText)
    }
}

export async function login({ email, password }) {
    const response = await fetch(AURL, {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            email,
            password
        })
    })

    const data = response.json()
    const token = data.token

    return data

}
