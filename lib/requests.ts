const apiEndpoint = "http://localhost:3000/api/"
// users
// GET - fetch logged in user
// POST - create new account
// PUT - update logged in user account
// /posts
// GET - fetch all posts
async function postData(url = '', data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
}

export async function fetchPosts() {
    return await fetch(
        apiEndpoint + 'posts'
    ).then((res) => res.json())
}

export async function fetchApprovedPosts() {
    return await fetch(
        apiEndpoint + 'posts/approved'
    ).then((res) => res.json())
}
// POST - create new post
// @ts-ignore
export async function createPost(data) {

    const response = await fetch(apiEndpoint + 'posts', {
        method: 'POST',
        body: data,
    });
    return response.json();
}
// /posts/{id}
// GET - fetch single post
// @ts-ignore
export async function fetchSinglePosts({ queryKey }) {
    const [_, id] = queryKey
    return await fetch(
        apiEndpoint + 'posts/' + id
    ).then((res) => res.json())
}
// POST - Approve post to be seen(by admin)
// @ts-ignore
export async function ApprovePost(data) {
    await postData(apiEndpoint + 'posts/' + data.id, data)
        .then((res) => res);
}
// PUT - update the post
// DELETE - delete the post


// create account
// @ts-ignore
export async function createAccount(data) {
    return await fetch("/api/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    }).then((res) => {
        res.json()
    });
}